import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Meta} from '@storybook/react/types-6-0';
import {action} from "@storybook/addon-actions";
import {Rating} from "./Rating";
import {RatingStarValueType} from "../../App";

export default {
    title: 'Rating',
    component: Rating,
} as Meta;

const callback = action("switch mode change event fired")

export const EmptyRating = () => <Rating ratingStarValue={0} setRatingStarValue={callback}/>;
export const Rating1Star = () => <Rating ratingStarValue={1} setRatingStarValue={callback}/>;
export const Rating2Star = () => <Rating ratingStarValue={2} setRatingStarValue={callback}/>;
export const Rating3Star = () => <Rating ratingStarValue={3} setRatingStarValue={callback}/>;
export const Rating4Star = () => <Rating ratingStarValue={4} setRatingStarValue={callback}/>;
export const Rating5Star = () => <Rating ratingStarValue={5} setRatingStarValue={callback}/>;

export const RatingModeChanging = () => {
    const [value, setValue] = useState<RatingStarValueType>(0)
    return <Rating ratingStarValue={value} setRatingStarValue={setValue} />
}

