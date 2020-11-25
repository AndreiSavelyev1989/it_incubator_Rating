import React from 'react'

type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean
    setAccordionCollapsed: (collapsed: boolean) => void
}

function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering');

        return (
            <div>
                <AccordionTitle title={props.titleValue}
                                setAccordionCollapsed={props.setAccordionCollapsed}
                                collapsed={props.collapsed}/>
                {!props.collapsed && <AccordionBody />}
            </div>
        )
}

type AccordionTitlePropsType = {
    title: string
    collapsed: boolean
    setAccordionCollapsed: (collapsed: boolean) => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering');
    const onTitleClick = () => props.setAccordionCollapsed(!props.collapsed)
    return (
        <h3 onClick={onTitleClick}>{props.title}</h3>
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

export default Accordion;