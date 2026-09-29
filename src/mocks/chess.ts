export const STARTING_FEN = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";

export const engineSnapshot = {
  position: "Starting position",
  evaluation: "—",
  depth: "—",
  bestIdea: "Awaiting position",
  time: "—",
  principalVariation: [] as string[],
};

export const captureMeta = {
  source: "OBS Virtual Camera",
  resolution: "1920 × 1080",
  frameRate: "30 fps",
  lastSync: "—",
};

export const trainingCredo = "A position is a story told by the pieces that remain.";

export const currentInsight = {
  severity: "Mistake",
  move: "Nf6",
  message:
    "Atenção: ao avançar o cavalo, o peão de e4 ficou sem defesa. Proteja a casa antes de continuar o desenvolvimento.",
};

export const voiceOptions = [
  "Mentor — Deep British",
  "Mentor — Calm Continental",
  "Mentor — Neutral Studio",
];

export const archiveSessions = [
  {
    id: "0184",
    player: "M. Arantes",
    opponent: "L. Fontaine",
    opening: "Ruy López — Closed",
    result: "Win",
    date: "23 Set 2026",
    accuracy: 91,
    insights: 4,
    errors: ["Move 14 — e4 desprotegido", "Move 22 — centro aberto", "Move 31 — troca prematura"],
  },
  {
    id: "0183",
    player: "M. Arantes",
    opponent: "D. Okafor",
    opening: "Sicilian — Najdorf",
    result: "Draw",
    date: "19 Set 2026",
    accuracy: 86,
    insights: 6,
    errors: ["Move 9 — ordem de lances", "Move 18 — bispo preso"],
  },
  {
    id: "0182",
    player: "M. Arantes",
    opponent: "S. Petrova",
    opening: "Queen's Gambit — Declined",
    result: "Loss",
    date: "15 Set 2026",
    accuracy: 78,
    insights: 9,
    errors: ["Move 11 — blunder tático", "Move 27 — rei exposto"],
  },
  {
    id: "0181",
    player: "M. Arantes",
    opponent: "R. Lindqvist",
    opening: "English — Symmetrical",
    result: "Win",
    date: "11 Set 2026",
    accuracy: 93,
    insights: 3,
    errors: ["Move 20 — peão fraco em c5"],
  },
  {
    id: "0180",
    player: "M. Arantes",
    opponent: "Engine — Stockfish 19",
    opening: "Catalan — Open",
    result: "Draw",
    date: "07 Set 2026",
    accuracy: 88,
    insights: 5,
    errors: ["Move 16 — perda de tempo"],
  },
];

export const attentionPattern = [
  { tone: "low" },
  { tone: "mid" },
  { tone: "peak" },
  { tone: "low" },
  { tone: "low" },
  { tone: "high" },
  { tone: "mid" },
  { tone: "low" },
  { tone: "peak" },
  { tone: "high" },
  { tone: "low" },
  { tone: "mid" },
  { tone: "mid" },
  { tone: "high" },
  { tone: "low" },
  { tone: "peak" },
  { tone: "low" },
  { tone: "mid" },
  { tone: "high" },
  { tone: "low" },
  { tone: "low" },
  { tone: "mid" },
  { tone: "peak" },
  { tone: "high" },
] as const;

export const supervisionStates = [
  "OBS NOT CONNECTED",
  "OBS CONNECTED",
  "WAITING FOR BOARD",
  "BOARD DETECTED",
  "POSITION VALIDATED",
  "POSITION CHANGED",
  "ANALYZING",
  "ENGINE READY",
  "INSIGHT READY",
  "SIGNAL LOST",
  "LOW CONFIDENCE",
];

export const researchFenSample = "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 6 5";