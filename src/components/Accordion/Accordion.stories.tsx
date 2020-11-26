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

export const AccordionCollapsed = () => <Accordion titleValue={"Menu"} collapsed={true}
                                                   setAccordionCollapsed={callback}/>;
export const AccordionUnCollapsed = () => <Accordion titleValue={"Users"} collapsed={false}
                                                     setAccordionCollapsed={callback}/>;

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(false)
    return <Accordion titleValue={"Menu"} collapsed={value} setAccordionCollapsed={() => setValue(!value)}/>
}

