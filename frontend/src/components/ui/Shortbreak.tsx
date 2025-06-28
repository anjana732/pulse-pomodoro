import { useEffect, useState } from "react";
import { Button } from "./button";

export default function Shortbreak(){

    const initialTime = 5 * 60;

    const formatTime = (time: number) => {
        const minute = Math.floor(time/60);
        const second = time % 60;
        console.log(`min: ${minute} sec: ${second}`);

        return `${minute.toString().padStart(2,"0")} : ${second.toString().padStart(2,"0")}`;
    }

    const[secondLeft, setSecondLeft] = useState(initialTime);
    const [isActive, setIsActive] = useState(false);

    useEffect(()=>{

        let interval: NodeJS.Timeout | undefined

        if(isActive && secondLeft > 0){
            interval = setTimeout(() => {
                setSecondLeft((prev) => prev - 1)
            }, 1000);
        }
        
        return () => {
      if (interval) clearInterval(interval)
    }

    },[secondLeft, isActive])

    return(
        <>
        <h3>Short Break</h3>
        {formatTime(secondLeft)}
        <Button onClick={()=> setIsActive(prev => !prev)}>{ isActive? "Pause" : "Start" }</Button>
        <Button onClick={()=> {setSecondLeft(initialTime) ; setIsActive(false)}}>Reset</Button>
        </>
    )
}