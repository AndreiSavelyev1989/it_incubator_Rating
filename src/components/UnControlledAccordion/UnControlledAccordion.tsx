import React, {useState} from 'react'

type AccordionPropsType = {
    titleValue: string,
}

function UnControlledAccordion(props: AccordionPropsType) {
    console.log('UnControlledAccordion rendering');

    let [collapsed, setCollapsed] = useState(false);
    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            setCollapsed={setCollapsed}
                            collapsed={collapsed}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    collapsed: boolean
    setCollapsed: (collapsed: boolean) => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering');
    const onTitleClick = () => props.setCollapsed(!props.collapsed)
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

export default UnControlledAccordion;