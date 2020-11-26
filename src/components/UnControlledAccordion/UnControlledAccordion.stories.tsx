import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Meta} from '@storybook/react/types-6-0';
import {action} from "@storybook/addon-actions";
import {UnControlledAccordion} from "./UnControlledAccordion";

export default {
    title: 'UnControlledAccordion',
    component: UnControlledAccordion,
} as Meta;

const callback = action("uncontrolled accordion mode change event fired")

export const ModeChanging = () => {
    return <UnControlledAccordion titleValue={"Users"} />
}

