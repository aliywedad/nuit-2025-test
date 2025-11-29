"use client"

// import { button } from "@/components/ui/button"
import { ChevronUp, ChevronDown, ChevronLeft, ChevronRight, Play, Pause, RotateCcw } from "lucide-react"

type Direction = "UP" | "DOWN" | "LEFT" | "RIGHT"

interface GameControlsProps {
  isPlaying: boolean
  gameOver: boolean
  onPlay: () => void
  onPause: () => void
  onReset: () => void
  onDirectionChange: (direction: Direction) => void
}

export default function GameControls({
  isPlaying,
  gameOver,
  onPlay,
  onPause,
  onReset,
  onDirectionChange,
}: GameControlsProps) {
  return (
    <div className="space-y-4">
      {/* D-Pad */}
      <div className="flex justify-center">
        <div className="grid grid-cols-3 gap-2 w-fit">
          <div />
          <button
             
            
             
            className="border-emerald-500/50 hover:bg-emerald-500/20 hover:text-emerald-400 bg-transparent"
            onClick={() => onDirectionChange("UP")}
            disabled={!isPlaying || gameOver}
          >
            <ChevronUp className="h-4 w-4" />
          </button>
          <div />

          <button
             
            
             
            className="border-emerald-500/50 hover:bg-emerald-500/20 hover:text-emerald-400 bg-transparent"
            onClick={() => onDirectionChange("LEFT")}
            disabled={!isPlaying || gameOver}
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
             
            
             
            className="border-emerald-500/50 hover:bg-emerald-500/20 hover:text-emerald-400 bg-transparent"
            onClick={() => onDirectionChange("DOWN")}
            disabled={!isPlaying || gameOver}
          >
            <ChevronDown className="h-4 w-4" />
          </button>
          <button
             
            
             
            className="border-emerald-500/50 hover:bg-emerald-500/20 hover:text-emerald-400 bg-transparent"
            onClick={() => onDirectionChange("RIGHT")}
            disabled={!isPlaying || gameOver}
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex gap-3 justify-center">
        {!isPlaying && !gameOver ? (
          <button onClick={onPlay} className="bg-emerald-500 hover:bg-emerald-600 text-white flex-1">
            <Play className="h-4 w-4 mr-2" />
            Play
          </button>
        ) : isPlaying ? (
          <button
            onClick={onPause}
            
            
            className="border-emerald-500/50 hover:bg-emerald-500/20 hover:text-emerald-400 flex-1 bg-transparent"
          >
            <Pause className="h-4 w-4 mr-2" />
            Pause
          </button>
        ) : null}

        <button
          onClick={onReset}
          
          
          className="border-red-500/50 hover:bg-red-500/20 hover:text-red-400 bg-transparent"
           
        >
          <RotateCcw className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
