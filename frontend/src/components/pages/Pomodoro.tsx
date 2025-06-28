import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "../ui/button"
import Timer from "../ui/Timer"

export default function Pomodoro() {
  return (
    <>
      <h1>Pulse Pomodoro</h1>
      <Card>
        <CardHeader className="flex gap-4">
          <Button>Pomodoro</Button>
          <Button>Short Break</Button>
          <Button>Long Break</Button>
        </CardHeader>
        <CardContent>
         <Timer/>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </>
  )
}