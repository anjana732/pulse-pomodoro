import { useState, useEffect } from "react";
import { Button } from "./button";

export default function Timer(){

    const initialTime = 25 * 60;
    const [secondLeft, setSecondLeft] = useState(initialTime);
    const [isActive, setIsActive] = useState(false);

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
    <div className="text-center text-5xl font-bold my-4">
      <p>{formatTime(secondLeft)}</p>
      <div className="mt-4 flex justify-center gap-4">
        <button
          onClick={() => setIsActive(true)}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Start
        </button>
        <button
          onClick={() => {
            setIsActive(false)
            setSecondLeft(initialTime)
          }}
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          Reset
        </button>
        <button
          onClick={() => setIsActive(false)}
          className="bg-yellow-500 text-white px-4 py-2 rounded"
        >
          Pause
        </button>
      </div>
    </div>
  )
}