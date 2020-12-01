import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Meta} from '@storybook/react/types-6-0';
import {Accordion} from "./Accordion";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Accordion',
    component: Accordion,
} as Meta;

const callback = action("accordion mode change event fired")
const onValueClickCallback = action("this value was clicked")


export const AccordionCollapsed = () => <Accordion titleValue={"Menu"}
                                                   collapsed={true}
                                                   setAccordionCollapsed={callback}
                                                   items={[]}
                                                   onValueClick={onValueClickCallback}
/>;
export const AccordionUnCollapsed = () => <Accordion titleValue={"Users"}
                                                     collapsed={false}
                                                     setAccordionCollapsed={callback}
                                                     items={[
                                                         {title: "Andrei", value: 1},
                                                         {title: "Mihail", value: 2},
                                                         {title: "Pavel", value: 3},
                                                         {title: "Dima", value: 4},
                                                         {title: "Sveta", value: 5},
                                                     ]}
                                                     onValueClick={onValueClickCallback}
/>;

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(false)
    return <Accordion
        titleValue={"Menu"}
        collapsed={value}
        setAccordionCollapsed={() => setValue(!value)}
        onValueClick={onValueClickCallback}
        items={[
            {title: "Andrei", value: 1},
            {title: "Mihail", value: 2},
            {title: "Pavel", value: 3},
            {title: "Dima", value: 4},
            {title: "Sveta", value: 5},
        ]}
    />
}

