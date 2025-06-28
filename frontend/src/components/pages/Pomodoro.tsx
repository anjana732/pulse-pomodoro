import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import { Button } from "../ui/button"
import Timer from "../ui/Timer"
import Shortbreak from "../ui/Shortbreak"
import Longbreak from "../ui/Longbreak"
import { useState } from "react"

export default function Pomodoro() {

  const[pomodoro, setPomodoro] = useState(true);
  const[shortBreak,  setShortBreak] = useState(false);
  const[longBreak , setLongBreak] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-start gap-8 px-4 py-12 bg-white text-gray-900">
      {/* Heading */}
      <h1 className="text-4xl font-extrabold text-center tracking-tight">
        Pulse Pomodoro
      </h1>

      {/* Description (outside card) */}
      <div className="max-w-2xl text-center text-gray-600 text-base leading-relaxed">
        <p className="mb-4">
          The <strong>Pomodoro Technique</strong> is a powerful time management method
          that breaks your work into 25-minute focused sessions followed by short breaks.
        </p>
        <p>
          This application helps you enhance productivity, stay focused, and prevent burnout — 
          one Pomodoro at a time.
        </p>
      </div>

      {/* Timer Card */}
      <Card className="w-full max-w-md shadow-md">
        <CardHeader>
          {/* Buttons in header */}
         
          <div className="flex justify-center gap-3 flex-wrap">
            <Button variant="default" className="px-5 font-medium" onClick={() => {setLongBreak(false); setPomodoro(true); setShortBreak(false)} }>
              Pomodoro
            </Button>
            <Button variant="secondary"className="border-gray-600 text-white" onClick={() => {setLongBreak(false); setPomodoro(false); setShortBreak(true)} }>
              Short Break
            </Button>
            <Button variant="outline" className="border-gray-600 text-white" onClick={() => {setLongBreak(true); setPomodoro(false); setShortBreak(false)} }>
              Long Break
            </Button>
          </div>
        </CardHeader>

        <CardContent>
          {pomodoro && <Timer />}
          {shortBreak && <Shortbreak/>}
          {longBreak && <Longbreak/>}
          
        </CardContent>

        {/* No footer text inside the card */}
        <CardFooter></CardFooter>
      </Card>
    </div>
  )
}
