import { useEffect, useState } from "react";
import { Button } from "./button";

export default function Shortbreak() {
  const initialTime = 5 * 60;
  const [secondLeft, setSecondLeft] = useState(initialTime);
  const [isActive, setIsActive] = useState(false);

  const formatTime = (time: number) => {
    const minute = Math.floor(time / 60);
    const second = time % 60;
    return `${minute.toString().padStart(2, "0")} : ${second
      .toString()
      .padStart(2, "0")}`;
  };

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
    <div className="flex flex-col items-center gap-6 p-6">

      {/* Digital Timer */}
      <div className="text-5xl font-mono text-lime-600 bg-black px-8 py-4 rounded-md border border-gray-700 shadow-sm tracking-widest">
        {formatTime(secondLeft)}
      </div>

      {/* Control Buttons */}
      <div className="flex gap-4">
        <Button
          onClick={() => setIsActive((prev) => !prev)}
          variant={isActive ? "default" : "default"}
          className="px-6 font-medium"
        >
          {isActive ? "Pause" : "Start"}
        </Button>
        <Button
          onClick={() => {
            setSecondLeft(initialTime);
            setIsActive(false);
          }}
          variant="destructive"
          className="px-6 font-medium"
        >
          Reset
        </Button>
      </div>
    </div>
  );
}
