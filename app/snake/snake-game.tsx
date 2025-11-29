"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import GameBoard from "./game-board"
import GameControls from "./game-controls"
import GameStats from "./game-stats"

type Direction = "UP" | "DOWN" | "LEFT" | "RIGHT"
type Position = { x: number; y: number }

const GRID_SIZE = 20
const INITIAL_SPEED = 150

export default function SnakeGame() {
  const [snake, setSnake] = useState<Position[]>([{ x: 10, y: 10 }])
  const [food, setFood] = useState<Position>({ x: 15, y: 15 })
  const [direction, setDirection] = useState<Direction>("RIGHT")
  const [nextDirection, setNextDirection] = useState<Direction>("RIGHT")
  const [gameOver, setGameOver] = useState(false)
  const [score, setScore] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [speed, setSpeed] = useState(INITIAL_SPEED)
  const gameLoopRef = useRef<NodeJS.Timeout | null>(null)

  // Generate random food position
  const generateFood = useCallback(() => {
    let newFood: Position
    do {
      newFood = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE),
      }
    } while (snake.some((segment) => segment.x === newFood.x && segment.y === newFood.y))
    return newFood
  }, [snake])

  // Game loop
  useEffect(() => {
    if (!isPlaying || gameOver) return

    gameLoopRef.current = setInterval(() => {
      setSnake((prevSnake) => {
        setDirection(nextDirection)

        // Calculate new head position
        const head = prevSnake[0]
        let newHead: Position

        switch (nextDirection) {
          case "UP":
            newHead = { x: head.x, y: (head.y - 1 + GRID_SIZE) % GRID_SIZE }
            break
          case "DOWN":
            newHead = { x: head.x, y: (head.y + 1) % GRID_SIZE }
            break
          case "LEFT":
            newHead = { x: (head.x - 1 + GRID_SIZE) % GRID_SIZE, y: head.y }
            break
          case "RIGHT":
            newHead = { x: (head.x + 1) % GRID_SIZE, y: head.y }
            break
        }

        // Check self collision
        if (prevSnake.some((segment) => segment.x === newHead.x && segment.y === newHead.y)) {
          setGameOver(true)
          setIsPlaying(false)
          return prevSnake
        }

        let newSnake = [newHead, ...prevSnake]

        // Check food collision
        if (newHead.x === food.x && newHead.y === food.y) {
          setScore((prev) => prev + 10)
          setFood(generateFood())
          // Speed increases slightly with each food
          setSpeed((prev) => Math.max(80, prev - 2))
        } else {
          newSnake = newSnake.slice(0, -1)
        }

        return newSnake
      })
    }, speed)

    return () => {
      if (gameLoopRef.current) clearInterval(gameLoopRef.current)
    }
  }, [isPlaying, gameOver, food, speed, nextDirection, generateFood])

  // Keyboard controls
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowUp":
        case "w":
        case "W":
          if (direction !== "DOWN") {
            setNextDirection("UP")
            e.preventDefault()
          }
          break
        case "ArrowDown":
        case "s":
        case "S":
          if (direction !== "UP") {
            setNextDirection("DOWN")
            e.preventDefault()
          }
          break
        case "ArrowLeft":
        case "a":
        case "A":
          if (direction !== "RIGHT") {
            setNextDirection("LEFT")
            e.preventDefault()
          }
          break
        case "ArrowRight":
        case "d":
        case "D":
          if (direction !== "LEFT") {
            setNextDirection("RIGHT")
            e.preventDefault()
          }
          break
        case " ":
          setIsPlaying((prev) => !prev)
          e.preventDefault()
          break
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [direction])

  const handleDirectionChange = (newDirection: Direction) => {
    if (
      (direction === "UP" && newDirection === "DOWN") ||
      (direction === "DOWN" && newDirection === "UP") ||
      (direction === "LEFT" && newDirection === "RIGHT") ||
      (direction === "RIGHT" && newDirection === "LEFT")
    ) {
      return
    }
    setNextDirection(newDirection)
  }

  const handleReset = () => {
    setSnake([{ x: 10, y: 10 }])
    setFood({ x: 15, y: 15 })
    setDirection("RIGHT")
    setNextDirection("RIGHT")
    setGameOver(false)
    setScore(0)
    setIsPlaying(false)
    setSpeed(INITIAL_SPEED)
  }

  return (
    <div className="w-full max-w-md">
      <div className="bg-slate-800 rounded-2xl shadow-2xl p-6 border border-emerald-500/30">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-2">
            SNAKE
          </h1>
          <p className="text-slate-400 text-sm">Classic game reimagined</p>
        </div>

        {/* Game Stats */}
        <GameStats score={score} gameOver={gameOver} />

        {/* Game Board */}
        <div className="mb-6">
          <GameBoard snake={snake} food={food} gridSize={GRID_SIZE} />
        </div>

        {/* Controls */}
        <GameControls
          isPlaying={isPlaying}
          gameOver={gameOver}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onReset={handleReset}
          onDirectionChange={handleDirectionChange}
        />

        {/* Instructions */}
        <div className="mt-6 text-center text-xs text-slate-400 space-y-1">
          <p>🎮 Use Arrow Keys or WASD to move</p>
          <p>⎵ Spacebar to play/pause</p>
        </div>
      </div>
    </div>
  )
}
