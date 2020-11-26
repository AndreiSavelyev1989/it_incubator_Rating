import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Meta} from '@storybook/react/types-6-0';
import {UnControlledRating} from "./UnControlledRating";
import {action} from "@storybook/addon-actions";

export default {
    title: 'UnControlledRating',
    component: UnControlledRating,
} as Meta;

const callback = action("rating changed inside component")

export const EmptyRating = () => <UnControlledRating defaulValue={0} onChange={callback}/>;
export const Rating1Star = () => <UnControlledRating defaulValue={1} onChange={callback}/>;
export const Rating2Star = () => <UnControlledRating defaulValue={2} onChange={callback}/>;
export const Rating3Star = () => <UnControlledRating defaulValue={3} onChange={callback}/>;
export const Rating4Star = () => <UnControlledRating defaulValue={4} onChange={callback}/>;
export const Rating5Star = () => <UnControlledRating defaulValue={5} onChange={callback}/>;

