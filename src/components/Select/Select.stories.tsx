import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Meta} from '@storybook/react/types-6-0';
import {action} from "@storybook/addon-actions";
import {Select} from "./Select";

export default {
    title: 'Select',
    component: Select,
} as Meta;

const callback = action("selected item")


export const UniversalSelectWithValue = () => {
    const [value, setValue] = useState("Moscow")
    return <>
        <Select
            value={value}
            onChange={setValue}
            items={[
                {id: 1, value: "Minsk"},
                {id: 2, value: "Moscow"},
                {id: 3, value: "Kiev"},
            ]}/>
    </>
}
export const UniversalSelectWithOutValue = () => {
    const [value, setValue] = useState(null)
    return <>
        <Select
            value={value}
            onChange={setValue}
            items={[
                {id: 1, value: "Minsk"},
                {id: 2, value: "Moscow"},
                {id: 3, value: "Kiev"},
            ]}/>
    </>
}