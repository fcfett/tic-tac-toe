import { useCallback, useEffect, useState } from 'react'

import ResetIcon from './assets/reset.svg'
import Square from './components/Square'

const getInitialBoardState = (): (Player | null)[][] => [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]

export type Player = 'X' | 'O'

const INITIAL_PLAYER: Player = 'X'
const MIN_MOVES_TO_WIN = 5
const INITIAL_MOVES = 0
const MAX_MOVES = 9

function App() {
  const [boardState, setBoardState] = useState(getInitialBoardState())
  const [player, setPlayer] = useState(INITIAL_PLAYER)
  const [moves, setMoves] = useState(INITIAL_MOVES)
  const [winner, setWinner] = useState<null | Player>(null)

  const updateBoardSquare = (x: number, y: number) => () => {
    if (!winner && boardState[x][y] === null) {
      const newState = [...boardState]
      newState[x][y] = player
      setMoves((prevMoves) => prevMoves + 1)
      setPlayer((prevPlayer) => (prevPlayer === 'X' ? 'O' : 'X'))
      setBoardState(newState)
    }
  }

  const resetBoard = () => {
    setBoardState(getInitialBoardState())
    setPlayer(INITIAL_PLAYER)
    setMoves(INITIAL_MOVES)
    setWinner(null)
  }

  const checkWinner = useCallback(() => {
    // Diagonal left-right
    if (
      boardState[0][0] === boardState[1][1] &&
      boardState[1][1] === boardState[2][2]
    ) {
      return setWinner(boardState[0][0])
    }

    // Diagonal right-left
    if (
      boardState[2][0] === boardState[1][1] &&
      boardState[1][1] === boardState[0][2]
    ) {
      return setWinner(boardState[2][0])
    }

    for (let i = 0; i < 3; i++) {
      if (boardState[i][0] || boardState[0][i]) {
        // Verticals
        if (
          boardState[i][0] === boardState[i][1] &&
          boardState[i][1] === boardState[i][2]
        ) {
          return setWinner(boardState[i][0])
        }

        // Horizontals
        if (
          boardState[0][i] === boardState[1][i] &&
          boardState[1][i] === boardState[2][i]
        ) {
          return setWinner(boardState[0][i])
        }
      }
    }
  }, [boardState])

  useEffect(() => {
    if (moves >= MIN_MOVES_TO_WIN) {
      checkWinner()
    }
  }, [boardState, moves, checkWinner])

  return (
    <main className="flex flex-col items-center">
      <header className="flex w-full items-center justify-between bg-black text-white">
        <h1 className="ml-4 font-bold">
          {winner ? (
            <>
              Winner: <span>{winner}</span>
            </>
          ) : moves !== MAX_MOVES ? (
            <>
              Now playing: <span>{player}</span>
            </>
          ) : (
            <>Draw!</>
          )}
        </h1>

        <button
          className="bg-red-600 px-4 py-2 text-white"
          onClick={resetBoard}
        >
          <ResetIcon className="h-8 fill-white" />
        </button>
      </header>

      <section className="m-auto flex flex-col items-center justify-center gap-[1vmin] bg-black">
        <div className="flex gap-[inherit] bg-black">
          <Square onClick={updateBoardSquare(0, 0)} value={boardState[0][0]} />
          <Square onClick={updateBoardSquare(0, 1)} value={boardState[0][1]} />
          <Square onClick={updateBoardSquare(0, 2)} value={boardState[0][2]} />
        </div>
        <div className="flex gap-[inherit] bg-black">
          <Square onClick={updateBoardSquare(1, 0)} value={boardState[1][0]} />
          <Square onClick={updateBoardSquare(1, 1)} value={boardState[1][1]} />
          <Square onClick={updateBoardSquare(1, 2)} value={boardState[1][2]} />
        </div>
        <div className="flex gap-[inherit] bg-black">
          <Square onClick={updateBoardSquare(2, 0)} value={boardState[2][0]} />
          <Square onClick={updateBoardSquare(2, 1)} value={boardState[2][1]} />
          <Square onClick={updateBoardSquare(2, 2)} value={boardState[2][2]} />
        </div>
      </section>
    </main>
  )
}

export default App
