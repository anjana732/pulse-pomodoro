import { Button } from "../ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Dialog } from "../ui/dialog";

export function Pomodoro(){
    return(
        <>
        <Card className="w-[350px] mx-auto mt-20 text-center">
  <CardHeader>
    <CardTitle className="text-3xl">Pulse Pomodoro</CardTitle>
    <CardDescription>Stay focused. Stay sharp.</CardDescription>
  </CardHeader>
  <CardContent>
    <div className="text-6xl font-mono my-6">{/* Timer: 25:00 */}</div>
    <div className="flex justify-center gap-4">
      <Button>Start</Button>
      <Button variant="outline">Pause</Button>
      <Button variant="destructive">Reset</Button>
    </div>
  </CardContent>
</Card>

        </>
    )
}