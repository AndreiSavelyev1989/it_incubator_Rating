import React, {useState} from "react";

type UnControlledOnOffPropsType = {
    defaultValue: boolean
    onChange: (value: boolean) => void
}
export function UnControlledOnOff(props: UnControlledOnOffPropsType){
    console.log("OnOff rendering");
    let [on, setOn] = useState(props.defaultValue ? props.defaultValue : false);

    let onStyle = {
        width: "30px",
        height: "30px",
        border: "1px solid black",
        display: "inline-block",
        backgroundColor: on ? "green" : "white"
    }
    let offStyle = {
        width: "30px",
        height: "30px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "1px",
        backgroundColor: on ? "white" : "red"
    }
    let conditionStyle = {
        width: "15px",
        height: "15px",
        borderRadius: "10px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: on ? "green" : "red"
    }

    const onChangeSwitch = () => {
        setOn(!on)
        props.onChange(!on)
    }
    return (
        <div>
            <button style={onStyle} onClick={onChangeSwitch}>On</button>
            <button style={offStyle} onClick={onChangeSwitch}>Off</button>
            <div style={conditionStyle}/>
        </div>
    )
}

