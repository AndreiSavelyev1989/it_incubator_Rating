import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Meta} from '@storybook/react/types-6-0';
import {action} from "@storybook/addon-actions";
import {OnOff} from "./OnOff";

export default {
    title: 'OnOff',
    component: OnOff,
} as Meta;

const callback = action("switch mode change event fired")

export const OnSwitch = () => <OnOff on={true} setOn={callback}/>;
export const OffSwitch = () => <OnOff on={false} setOn={callback}/>;

export const SwitchModeChanging = () => {
    const [value, setValue] = useState<boolean>(false)
    return <OnOff on={value} setOn={() => setValue(!value)}/>
}

