import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useDragControls } from "framer-motion";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [gameOver, setGameOver] = useState(false);

  const dragControls = useDragControls();
  const containerRef = useRef(null);
  const constraintRef = useRef(null);

  const calculateWinner = (squares: (string | null)[]) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const minimax = (squares: (string | null)[], depth: number, isMaximizing: boolean): number => {
    const winner = calculateWinner(squares);
    
    if (winner === 'O') return 10 - depth;
    if (winner === 'X') return depth - 10;
    if (squares.every(square => square !== null)) return 0;

    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let i = 0; i < squares.length; i++) {
        if (squares[i] === null) {
          squares[i] = 'O';
          bestScore = Math.max(bestScore, minimax(squares, depth + 1, false));
          squares[i] = null;
        }
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < squares.length; i++) {
        if (squares[i] === null) {
          squares[i] = 'X';
          bestScore = Math.min(bestScore, minimax(squares, depth + 1, true));
          squares[i] = null;
        }
      }
      return bestScore;
    }
  };

  const makeAIMove = () => {
    let bestScore = -Infinity;
    let bestMove = 0;
    const newBoard = [...board];

    for (let i = 0; i < newBoard.length; i++) {
      if (newBoard[i] === null) {
        newBoard[i] = 'O';
        const score = minimax(newBoard, 0, false);
        newBoard[i] = null;
        
        if (score > bestScore) {
          bestScore = score;
          bestMove = i;
        }
      }
    }

    handleMove(bestMove);
  };

  const handleMove = (i: number) => {
    if (board[i] || calculateWinner(board) || gameOver) return;
    
    const newBoard = board.slice();
    newBoard[i] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  useEffect(() => {
    if (!isXNext && !calculateWinner(board) && !gameOver) {
      const timer = setTimeout(makeAIMove, 500);
      return () => clearTimeout(timer);
    }
  }, [isXNext, board, gameOver]);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setGameOver(false);
  };

  const winner = calculateWinner(board);
  const status = winner 
    ? `Winner: ${winner}`
    : board.every(square => square) 
    ? "Draw!"
    : `Next player: ${isXNext ? "X" : "O"}`;

  return (
    <AnimatePresence>
      {isVisible && (
        <div
          ref={constraintRef}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            pointerEvents: 'none',
            zIndex: 50,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            drag
            dragControls={dragControls}
            dragListener={false}
            dragElastic={0.2}
            dragConstraints={constraintRef}
            className="glass p-2 rounded-xl backdrop-blur-lg opacity-10"
            style={{ 
              touchAction: 'none',
              position: 'absolute',
              bottom: 16,
              left: 16,
              pointerEvents: 'auto'
            }}
          >
            <div
              className="text-xs font-semibold text-center text-white mb-1 w-full bg-black/40 rounded-t-md px-0 py-1 cursor-move select-none"
              onPointerDown={e => dragControls.start(e)}
            >TicTacToe Game</div>
            {/* Draggable border edges only */}
            <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 10 }}>
              {/* Top edge */}
              <div
                className="absolute left-0 top-0 w-full h-2 cursor-move pointer-events-auto"
                onPointerDown={e => dragControls.start(e)}
                style={{ zIndex: 11 }}
              />
              {/* Bottom edge */}
              <div
                className="absolute left-0 bottom-0 w-full h-2 cursor-move pointer-events-auto"
                onPointerDown={e => dragControls.start(e)}
                style={{ zIndex: 11 }}
              />
              {/* Left edge */}
              <div
                className="absolute left-0 top-0 h-full w-2 cursor-move pointer-events-auto"
                onPointerDown={e => dragControls.start(e)}
                style={{ zIndex: 11 }}
              />
              {/* Right edge */}
              <div
                className="absolute right-0 top-0 h-full w-2 cursor-move pointer-events-auto"
                onPointerDown={e => dragControls.start(e)}
                style={{ zIndex: 11 }}
              />
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-400">{status}</span>
              <button
                onClick={() => setIsVisible(false)}
                className="text-gray-400 hover:text-white"
              >
                ×
              </button>
            </div>
            <div className="grid grid-cols-3 gap-0.5 w-32">
              {board.map((square, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleMove(i)}
                  className="h-8 glass flex items-center justify-center text-lg font-bold"
                >
                  {square}
                </motion.button>
              ))}
            </div>
            <button
              onClick={resetGame}
              className="mt-2 w-full py-0.5 glass hover:bg-white/10 transition-colors rounded-md text-xs"
            >
              Reset Game
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default TicTacToe;
