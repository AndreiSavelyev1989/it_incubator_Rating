import React, {useReducer, useState} from 'react'
import {reducer, toogleAccordionAC} from "./reducer";

type AccordionPropsType = {
    titleValue: string,
}

export const UnControlledAccordion = React.memo((props: AccordionPropsType) => {
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
})

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

const AccordionTitle = React.memo((props: AccordionTitlePropsType) => {
    console.log('AccordionTitle rendering');
    return (
        <h3 onClick={props.onClick}>{props.title}</h3>
    )
})

const AccordionBody = React.memo((props: any) => {
    console.log('AccordionBody rendering');

    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
})

