"use client"

import { useMemo } from "react"

type Position = { x: number; y: number }

interface GameBoardProps {
  snake: Position[]
  food: Position
  gridSize: number
}

export default function GameBoard({ snake, food, gridSize }: GameBoardProps) {
  const gridCells = useMemo(() => {
    const cells: { [key: string]: "snake" | "food" | "empty" } = {}

    // Mark snake segments
    snake.forEach((segment, index) => {
      const key = `${segment.x}-${segment.y}`
      cells[key] = "snake"
    })

    // Mark food
    const foodKey = `${food.x}-${food.y}`
    cells[foodKey] = "food"

    return cells
  }, [snake, food])

  return (
    <div className="bg-slate-900 rounded-xl p-2 border-2 border-emerald-500/50 shadow-inner">
      <div
        className="grid gap-0.5 bg-slate-950 rounded-lg p-2"
        style={{
          gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))`,
        }}
      >
        {Array.from({ length: gridSize * gridSize }).map((_, index) => {
          const x = index % gridSize
          const y = Math.floor(index / gridSize)
          const key = `${x}-${y}`
          const cellType = gridCells[key] || "empty"

          return (
            <div
              key={key}
              className={`aspect-square rounded-sm transition-all duration-75 ${
                cellType === "snake"
                  ? snake[0].x === x && snake[0].y === y
                    ? "bg-emerald-400 shadow-lg shadow-emerald-400/50"
                    : "bg-emerald-500 shadow-md shadow-emerald-500/30"
                  : cellType === "food"
                    ? "bg-amber-400 shadow-lg shadow-amber-400/50 scale-110"
                    : "bg-slate-800"
              }`}
            />
          )
        })}
      </div>
    </div>
  )
}
