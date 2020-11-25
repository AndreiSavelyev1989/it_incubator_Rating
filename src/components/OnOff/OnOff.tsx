import React, {useState} from "react";

function OnOff(){
    console.log("OnOff rendering");
    let [on, setOn] = useState(false);

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

    return (
        <div>
            <button style={onStyle} onClick={() => setOn(true)}>On</button>
            <button style={offStyle} onClick={() => setOn(false)}>Off</button>
            <div style={conditionStyle}></div>
        </div>
    )
}

export default OnOff;