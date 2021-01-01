import React, {useEffect} from "react";
import {AnalogClock} from "./AnalogClock/AnalogClock";
import {DigitalClock} from "./DigitalClock/DigitalClock";

export type ClockViewPropsType = {
    mode?: 'analog' | 'digital'
    date: Date
    setDate: (time: Date) => void
}

export const Clock: React.FC<ClockViewPropsType> = (props) => {
    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log('tick2')
            props.setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    let view;
    switch (props.mode) {
        case "analog":
            view = <AnalogClock date={props.date}/>
        case "digital":
            view = <DigitalClock date={props.date}/>
        default:
            view = <DigitalClock date={props.date}/>
    }
    return (
        <div>{view}</div>
    )
}