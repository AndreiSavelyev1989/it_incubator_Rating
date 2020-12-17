import React, {useReducer, useState} from 'react'
import {reducer, toogleAccordionAC} from "./reducer";

type AccordionPropsType = {
    titleValue: string,
}

export function UnControlledAccordion(props: AccordionPropsType) {
    console.log('UnControlledAccordion rendering');

    // let [collapsed, setCollapsed] = useState(false);
    let [collapsed, dispatch] = useReducer(reducer, false);
    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            onClick={() => dispatch(toogleAccordionAC())}
                            />
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering');
    return (
        <h3 onClick={props.onClick}>{props.title}</h3>
    )
}

function AccordionBody(props: any) {
    console.log('AccordionBody rendering');

    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

