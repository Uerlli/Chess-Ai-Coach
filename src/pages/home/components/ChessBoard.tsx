import { fenToBoard } from "@/pages/home/utils/chessBoard";

const GLYPHS: Record<string, string> = {
  k: "♚",
  q: "♛",
  r: "♜",
  b: "♝",
  n: "♞",
  p: "♟",
  K: "♔",
  Q: "♕",
  R: "♖",
  B: "♗",
  N: "♘",
  P: "♙",
};

const FILES = ["a", "b", "c", "d", "e", "f", "g", "h"];

interface ChessBoardProps {
  fen: string;
  orientation?: "white" | "black";
}

export default function ChessBoard({ fen, orientation = "white" }: ChessBoardProps) {
  const board = fenToBoard(fen);
  const orientedRows = orientation === "white" ? board : [...board].reverse();
  const ranks = orientation === "white" ? [8, 7, 6, 5, 4, 3, 2, 1] : [1, 2, 3, 4, 5, 6, 7, 8];
  const files = orientation === "white" ? FILES : [...FILES].reverse();

  return (
    <div className="w-full flex gap-2 select-none">
      <div className="flex flex-col justify-around py-[2px]">
        {ranks.map((rank) => (
          <span key={rank} className="font-mono text-[9px] leading-none text-foreground-500 w-3 text-center">
            {rank}
          </span>
        ))}
      </div>

      <div className="flex-1">
        <div className="grid grid-cols-8 aspect-square w-full border border-background-300/60">
          {orientedRows.map((row, r) => {
            const orientedRow = orientation === "white" ? row : [...row].reverse();
            return orientedRow.map((cell, c) => {
              const isDark = (r + c) % 2 === 1;
              return (
                <div
                  key={`${r}-${c}`}
                  className={`relative flex items-center justify-center ${
                    isDark ? "bg-background-600" : "bg-background-800"
                  }`}
                >
                  {cell && (
                    <span
                      className={`chess-piece text-[clamp(1.3rem,3vw,2.5rem)] ${
                        cell === cell.toUpperCase() ? "piece-white" : "piece-black"
                      }`}
                    >
                      {GLYPHS[cell]}
                    </span>
                  )}
                </div>
              );
            });
          })}
        </div>

        <div className="grid grid-cols-8 mt-2">
          {files.map((file) => (
            <span key={file} className="font-mono text-[9px] leading-none text-foreground-500 text-center">
              {file}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}