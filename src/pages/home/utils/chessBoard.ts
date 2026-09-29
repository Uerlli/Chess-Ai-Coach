export type BoardCell = string | null;

/**
 * Converts the piece-placement field of a FEN string into an 8x8 matrix.
 * Uppercase letters represent white pieces, lowercase represent black.
 * Empty squares are represented as null.
 */
export function fenToBoard(fen: string): BoardCell[][] {
  const placement = (fen || "").trim().split(/\s+/)[0] || "8/8/8/8/8/8/8/8";
  const rows = placement.split("/");
  const board: BoardCell[][] = [];

  rows.forEach((row) => {
    const line: BoardCell[] = [];
    for (const char of row) {
      if (/\d/.test(char)) {
        const empty = Number.parseInt(char, 10);
        for (let i = 0; i < empty; i += 1) {
          line.push(null);
        }
      } else {
        line.push(char);
      }
    }
    while (line.length < 8) line.push(null);
    board.push(line.slice(0, 8));
  });

  while (board.length < 8) board.push(new Array(8).fill(null));
  return board.slice(0, 8);
}

export function isValidFen(fen: string): boolean {
  const parts = (fen || "").trim().split(/\s+/);
  if (parts.length < 2) return false;
  const placement = parts[0];
  const ranks = placement.split("/");
  if (ranks.length !== 8) return false;
  return ranks.every((rank) => {
    let count = 0;
    for (const char of rank) {
      if (/[1-8]/.test(char)) count += Number.parseInt(char, 10);
      else if (/[prnbqkPRNBQK]/.test(char)) count += 1;
      else return false;
    }
    return count === 8;
  });
}