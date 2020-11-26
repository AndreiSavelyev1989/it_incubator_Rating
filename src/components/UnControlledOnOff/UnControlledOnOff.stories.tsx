import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Meta} from '@storybook/react/types-6-0';
import {action} from "@storybook/addon-actions";
import {UnControlledOnOff} from "./UnControlledOnOff";
import {OnOff} from "../OnOff/OnOff";

export default {
    title: 'UnControlledOnOff',
    component: UnControlledOnOff,
} as Meta;

const callback = action("switch mode change event fired")


export const OnSwitch = () => <UnControlledOnOff defaultValue={true} onChange={callback}/>;
export const OffSwitch = () => <UnControlledOnOff defaultValue={false} onChange={callback}/>;

