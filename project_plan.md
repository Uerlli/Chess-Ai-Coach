# Chess Intelligence House

## 1. Descrição do Projeto

**Posicionamento:** um **supervisor de xadrez em tempo real**, concebido como uma instituição privada dedicada ao estudo da posição. Não é um site de xadrez, não é uma landing page, não é um dashboard SaaS genérico e não é um app gamer.

**Conceito central:** *"Chess as inherited intelligence."* Complementos: *"Old Money + Smart Money = Quiet Power."* / *"The board is old. The intelligence is not."*

**Público-alvo:** jogadores sérios que estudam aberturas, analisam partidas, treinam contra bots e querem entender *o que aconteceu* e *por que*.

**Valor central:** observar uma partida em tempo real, reconstruir continuamente o estado do tabuleiro (FEN), avaliar a posição com Stockfish, decidir se o erro merece interromper o jogador e, só então, falar por voz com uma orientação curta e pedagógica. O sistema é silencioso por padrão e intervém apenas quando importa.

**Pipeline conceitual:**
CHESS.COM / LICHESS → OBS STUDIO → OBS VIRTUAL CAMERA → NAVEGADOR → BOARD DETECTOR → FEN → STOCKFISH (WASM local) → CAMADA PEDAGÓGICA → (ELEVENLABS) → 🎧 VOZ DO MENTOR

**Detecção econômica:** o frame só é processado quando a posição mudou. A voz só é acionada quando a variação de avaliação justifica (imprecisão leve = silêncio; erro grave = fala).

## 2. Estrutura de Páginas

- `/` — **A Casa (sala de supervisão)**: sessão atual, fonte de captura, tabuleiro (Position), análise da engine (Local Intelligence), Insights/Mentor (voz), Archive e Research (mapa de erros). Página de foco.
- `/archive` (futuro) — biblioteca histórica completa de sessões e posições arquivadas.
- `/research` (futuro) — posições estudadas, padrões de erro, aberturas e tendências.
- `/settings` (futuro) — preferências de voz, limiares pedagógicos e status das integrações.

## 3. Lista de Funcionalidades Principais

- [ ] Reconstrução visual completa (identidade escura, tipografia de 3 camadas, tabuleiro como objeto de estudo)
- [ ] Fonte de captura (CAPTURE SOURCE): OBS Virtual Camera (principal) + Browser Screen Capture (fallback), com enumeração real de dispositivos de vídeo
- [ ] Board Detector: localizar tabuleiro, detectar peças, validar posição e produzir FEN com nível de confiança
- [ ] Stockfish local (WASM): avaliação, profundidade, melhor jogada e variação principal
- [ ] Camada pedagógica: decidir se o erro merece interrupção (imprecisão / erro / blunder)
- [ ] Mentor por voz (ElevenLabs): mensagens de 1–2 frases, com controles de voz (ligar/desligar, volume, voz, replay, mudo)
- [ ] Archive: sessões (player, adversário, abertura, resultado, data) com erros, insights e posições relevantes
- [ ] Research: mapa de erro / padrões de atenção e posições estudadas
- [ ] Estados de supervisão discretos (OBS NOT CONNECTED, BOARD DETECTED, POSITION VALIDATED, LOW CONFIDENCE, etc.)

## 4. Modelo de Dados (SaaS Supabase)

Persistência de longo prazo via Supabase. As tabelas serão criadas na fase de persistência, com Row Level Security ativo.

### Tabela: study_sessions
| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | uuid | Chave primária |
| archive_no | int | Número do arquivo (ex.: 0184) |
| player | text | Jogador |
| opponent | text | Adversário |
| opening | text | Abertura |
| result | text | Resultado |
| played_at | timestamptz | Data da sessão |
| accuracy | int | Precisão (%) |
| insights_count | int | Nº de insights |
| created_at | timestamptz | Criação |

### Tabela: session_insights
| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | uuid | Chave primária |
| session_id | uuid | FK → study_sessions |
| position_fen | text | FEN da posição |
| evaluation_before | numeric | Avaliação antes do lance |
| evaluation_after | numeric | Avaliação depois do lance |
| severity | text | imprecision / mistake / blunder |
| message | text | Texto do mentor |
| voice_asset_url | text | Áudio gerado |
| created_at | timestamptz | Criação |

### Tabela: research_positions
| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | uuid | Chave primária |
| fen | text | Posição (FEN) |
| label | text | Rótulo |
| notes | text | Observações |
| tags | text[] | Etiquetas |
| created_at | timestamptz | Criação |

### Tabela: mentor_settings
| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | uuid | Chave primária |
| voice_enabled | boolean | Voz ligada/desligada |
| voice_id | text | Voz escolhida (ElevenLabs) |
| volume | numeric | Volume |
| speak_threshold | text | Limiar de interrupção |
| updated_at | timestamptz | Atualização |

## 5. Backend e Integrações

- **Banco de dados:** SaaS Supabase — conectado. Tabelas e RLS criados na fase de persistência.
- **Visão computacional:** OpenAI ou Gemini, executada em Supabase Edge Function (a chave nunca fica no frontend).
- **Engine:** Stockfish via WebAssembly, rodando localmente no navegador.
- **Voz:** ElevenLabs, executada em Supabase Edge Function (a chave nunca fica no frontend).
- **Captura:** OBS Virtual Camera + `getDisplayMedia()` nativo do navegador.
- **Shopify / pagamentos:** não aplicável.
- **Segurança:** nenhuma chave secreta no frontend; sem uso de `localStorage` para segredos.

## 6. Plano de Fases de Desenvolvimento

### Fase 1: Reconstrução Visual da Casa
- Objetivo: materializar a identidade Chess Intelligence House — paleta escura, tipografia de 3 camadas (serif/sans/mono), tabuleiro como objeto central, painel de engine, captura, insights, archive e research, com estados discretos.
- Entregável: página principal coesa, com dados de demonstração no Archive e tabuleiro renderizado a partir de FEN.

### Fase 2: Captura em Tempo Real
- Objetivo: ligar a captura de verdade — enumeração/seleção de dispositivos de vídeo (OBS Virtual Camera) e compartilhamento de tela nativo do navegador, com preview ao vivo e estados reais de conexão.
- Entregável: fonte de captura funcional com permissões, preview e estados (CONNECTED / NOT FOUND / PERMISSION REQUIRED / SIGNAL LOST).

### Fase 3: Board Detector → FEN
- Objetivo: detectar o tabuleiro na imagem e produzir FEN com confiança, processando apenas quando a posição mudar. Integra a visão computacional via Edge Function.
- Entregável: pipeline imagem → FEN com estados BOARD DETECTED / POSITION VALIDATED / LOW CONFIDENCE.

### Fase 4: Stockfish Local
- Objetivo: integrar o Stockfish (WASM) para avaliação real, profundidade, melhor jogada e variação principal.
- Entregável: painel Local Intelligence alimentado por análise real.

### Fase 5: Camada Pedagógica
- Objetivo: decidir quando interromper o jogador a partir da variação de avaliação e do contexto.
- Entregável: lógica de severidade (imprecisão / erro / blunder) e geração de insights curtos.

### Fase 6: Voz do Mentor (ElevenLabs)
- Objetivo: transformar os insights em áudio e reproduzi-los, com controles de voz.
- Entregável: reprodução de voz funcional via Edge Function, respeitando o limiar de interrupção.

### Fase 7: Persistência do Archive (Supabase)
- Objetivo: criar as tabelas com RLS e salvar sessões, insights e posições de pesquisa permanentemente.
- Entregável: Archive e Research persistidos no Supabase.