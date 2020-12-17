import React from "react";

type OnOffPropsType = {
    on: boolean
    setOn: (on: boolean) => void
}

export const OnOff = React.memo((props: OnOffPropsType) => {
    console.log("OnOff rendering");

    let onStyle = {
        width: "30px",
        height: "30px",
        border: "1px solid black",
        display: "inline-block",
        backgroundColor: props.on ? "green" : "white"
    }
    let offStyle = {
        width: "30px",
        height: "30px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "1px",
        backgroundColor: props.on ? "white" : "red"
    }
    let conditionStyle = {
        width: "15px",
        height: "15px",
        borderRadius: "10px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: props.on ? "green" : "red"
    }

    const onSwitchChange = () => { props.setOn(!props.on)}

    return (
        <div>
            <button style={onStyle} onClick={onSwitchChange}>On</button>
            <button style={offStyle} onClick={onSwitchChange}>Off</button>
            <div style={conditionStyle}/>
        </div>
    )
})
