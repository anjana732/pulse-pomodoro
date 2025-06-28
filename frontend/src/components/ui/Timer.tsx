import { useState, useEffect } from "react"
import { Button } from "./button" // assuming you're using ShadCN's button

export default function Timer() {
  const initialTime = 25 * 60
  const [secondLeft, setSecondLeft] = useState(initialTime)
  const [isActive, setIsActive] = useState(false)

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`
  }

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined

    if (isActive && secondLeft > 0) {
      interval = setInterval(() => {
        setSecondLeft((prev) => prev - 1)
      }, 1000)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isActive, secondLeft])

  return (
    <div className="flex flex-col items-center gap-8 p-4">
      {/* Digital clock style timer */}
      <div className="text-6xl font-mono tracking-widest bg-black text-lime-400 px-8 py-4 rounded-md shadow-md border border-gray-700">
        {formatTime(secondLeft)}
      </div>

      {/* Control buttons */}
      <div className="flex gap-4">
        <Button onClick={() => setIsActive(true)} variant="default">
          Start
        </Button>
        <Button
          onClick={() => {
            setIsActive(false)
            setSecondLeft(initialTime)
          }}
          variant="destructive"
        >
          Reset
        </Button>
        <Button onClick={() => setIsActive(false)} variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
          Pause
        </Button>
      </div>
    </div>
  )
}
