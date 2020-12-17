import React from 'react'


type ItemsType = {
    title: string
    value: any
}

export type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean
    setAccordionCollapsed: (collapsed: boolean) => void
    items: ItemsType[]
    onValueClick: (value: any) => void
}

export const Accordion = React.memo((props: AccordionPropsType) => {
    console.log('Accordion rendering');

    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            setAccordionCollapsed={props.setAccordionCollapsed}
                            collapsed={props.collapsed}/>
            {!props.collapsed && <AccordionBody
                items={props.items}
                onValueClick={props.onValueClick}/>}
        </div>
    )
})

type AccordionTitlePropsType = {
    title: string
    collapsed: boolean
    setAccordionCollapsed: (collapsed: boolean) => void
}

const AccordionTitle = React.memo((props: AccordionTitlePropsType) => {
    console.log('AccordionTitle rendering');
    const onTitleClick = () => props.setAccordionCollapsed(!props.collapsed)
    return (
        <h3 onClick={onTitleClick}>{props.title}</h3>
    )
})

type AccordionBodyPropsType = {
    items: ItemsType[]
    onValueClick: (value: any) => void
}

const AccordionBody = React.memo((props: AccordionBodyPropsType) => {
    console.log('AccordionBody rendering');
    return (
        <ul>
            {props.items.map(i => {
                const onTitleClick = () => props.onValueClick(i.value)
                return <li key={i.value} onClick={onTitleClick}>{i.title}</li>
            })}
        </ul>
    )
})

