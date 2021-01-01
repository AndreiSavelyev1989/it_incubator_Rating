import React from "react";

const addZeroBeforeTime = (time: number) => time < 10 ? `0${time}` : time

type DigitalClockPropsType = {
    date: Date
}

export const DigitalClock: React.FC<DigitalClockPropsType> = (props) => {
    return (
        <div>
            <span>{addZeroBeforeTime(props.date.getHours())}</span>:
            <span>{addZeroBeforeTime(props.date.getMinutes())}</span>:
            <span>{addZeroBeforeTime(props.date.getSeconds())}</span>
        </div>
    )
}