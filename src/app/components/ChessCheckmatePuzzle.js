'use client'

import React, { useState, useEffect } from 'react'
import { Chess } from 'chess.js'
import { Chessboard } from 'react-chessboard'
import Button from './Button'

export default function ChessCheckmatePuzzle({ isGameComplete }) {
  const [game, setGame] = useState(new Chess())
  const [position, setPosition] = useState('')
  const [message, setMessage] = useState('Find the checkmate in one move!')
  const [gameOver, setGameOver] = useState(false)

  useEffect(() => {
    // Set up a new position where there's a checkmate in one move
    const initialPosition = '3r2rk/p5pp/1p4n1/3p2N1/2pP4/2P1R3/q1PQ2PP/1B3RK1 w - - 0 1'
    const newGame = new Chess(initialPosition)
    setGame(newGame)
    setPosition(initialPosition)
  }, [])

  function makeAMove(move) {
    const gameCopy = new Chess(game.fen())
    
    try {
      const result = gameCopy.move(move)
      setGame(gameCopy)
      setPosition(gameCopy.fen())

      if (gameCopy.isCheckmate()) {
        isGameComplete(); 
        setMessage('Congratulations! You found the checkmate!')
        setGameOver(true)
      } else {
        setMessage('That\'s not the checkmate. Try again!')
      }
    } catch (error) {
      setMessage('Invalid move. Try again!')
    }
  }

  function onDrop(sourceSquare, targetSquare) {
    if (gameOver) return false

    const move = {
      from: sourceSquare,
      to: targetSquare,
      promotion: 'q' // always promote to queen for simplicity
    }

    makeAMove(move)
    return true
  }

  function resetGame() {
    const initialPosition = '3r2rk/p5pp/1p4n1/3p2N1/2pP4/2P1R3/q1PQ2PP/1B3RK1 w - - 0 1'
    const newGame = new Chess(initialPosition)
    setGame(newGame)
    setPosition(initialPosition)
    setMessage('Find the checkmate in one move!')
    setGameOver(false)
  }

  return (
      <div className="flex flex-col items-center space-y-4">
        <div className="w-full max-w-md">
          <Chessboard 
            position={position} 
            onPieceDrop={onDrop} 
            boardWidth={400}
          />
        </div>
        <p className="text-lg font-semibold text-center">{message}</p>
        <Button onClick={resetGame} className="mt-4">
          Reset Board
        </Button>
      </div>
  )
}
