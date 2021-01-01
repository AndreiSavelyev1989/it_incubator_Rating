import React from "react";
import styles from "./AnalogClock.module.css"

type AnalogClockPropsType = {
    date: Date
}

export const AnalogClock: React.FC<AnalogClockPropsType> = (props) => {

    const deg = 6;
    let hh = props.date.getHours() * 30;
    let mm = props.date.getMinutes() * deg;
    let ss = props.date.getSeconds() * deg;

    const secondsStyle = {
        transform: `rotateZ(${ss}deg)`
    }
    const minutesStyle = {
        transform: `rotateZ(${mm}deg)`
    }
    const hoursStyle = {
        transform: `rotateZ(${(hh) + (mm / 12)}deg)`
    }

    return (
        <>
            <div className={styles.clock}>
                <div className={styles.hour}>
                    <div className={styles.hr} style={hoursStyle}>
                    </div>
                </div>
                <div className={styles.min}>
                    <div className={styles.mn} style={minutesStyle}>
                    </div>
                </div>
                <div className={styles.sec} style={secondsStyle}>
                    <div className={styles.sc}>
                    </div>
                </div>
            </div>
        </>
    )
}