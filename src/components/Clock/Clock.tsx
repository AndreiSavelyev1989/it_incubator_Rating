import React, {useEffect, useState} from "react";

const addZeroBeforeTime = (time: number) => time < 10 ? `0${time}` : time

export const Clock = () => {
    let currentTime = new Date()
    let hours = currentTime.getHours()
    let minutes = currentTime.getMinutes()
    let seconds = currentTime.getSeconds()

    let [currentHour, setCurrentHour] = useState(hours)
    let [currentMinutes, setCurrentMinutes] = useState(minutes)
    let [currentSeconds, setCurrentSeconds] = useState(seconds)

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log('tick2')
            setCurrentSeconds(state => state + 1)
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    if(currentSeconds === 60){
        setCurrentSeconds(0)
        setCurrentMinutes(currentMinutes + 1)
    }
    if(currentMinutes === 60){
        setCurrentMinutes(0)
        setCurrentHour(currentHour + 1)
    }
    if(currentHour === 24){
        setCurrentHour(0)
    }
    return (
        <div>
            <span>{addZeroBeforeTime(currentHour)}</span>:
            <span>{addZeroBeforeTime(currentMinutes)}</span>:
            <span>{addZeroBeforeTime(currentSeconds)}</span>
        </div>
    )
}