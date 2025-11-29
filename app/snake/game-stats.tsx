"use client"

import { Trophy } from "lucide-react"

interface GameStatsProps {
  score: number
  gameOver: boolean
}

export default function GameStats({ score, gameOver }: GameStatsProps) {
  return (
    <div className="bg-slate-900/50 rounded-lg p-4 mb-6 border border-emerald-500/30">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-slate-400 text-sm mb-1">Score</p>
          <p className="text-3xl font-bold text-emerald-400">{score}</p>
        </div>
        {gameOver && (
          <div className="text-center">
            <Trophy className="h-8 w-8 text-amber-400 mx-auto mb-2" />
            <p className="text-red-400 font-semibold text-sm">Game Over!</p>
          </div>
        )}
      </div>
    </div>
  )
}
