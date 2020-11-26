import React from 'react'
import {RatingStarValueType} from "../../App";

type RatingPropsType = {
    ratingStarValue: RatingStarValueType
    setRatingStarValue: (ratingStarValue: RatingStarValueType) => void
}

export function Rating(props: RatingPropsType) {
    console.log('Rating rendering');

    return (
        <div>
            <Star
                selected={props.ratingStarValue > 0}
                ratingStarValue={1}
                setRatingStarValue={props.setRatingStarValue}/>
                <Star
                selected={props.ratingStarValue > 1}
                ratingStarValue={2}
                setRatingStarValue={props.setRatingStarValue}/>
                <Star
                selected={props.ratingStarValue > 2}
                ratingStarValue={3}
                setRatingStarValue={props.setRatingStarValue}/>
                <Star
                selected={props.ratingStarValue > 3}
                ratingStarValue={4}
                setRatingStarValue={props.setRatingStarValue}/>
                <Star
                selected={props.ratingStarValue > 4}
                ratingStarValue={5}
                setRatingStarValue={props.setRatingStarValue}/>
        </div>
    )
}


type StarPropsType = {
    selected: boolean
    ratingStarValue: RatingStarValueType
    setRatingStarValue: (ratingStarValue: RatingStarValueType) => void
}

function Star(props: StarPropsType) {
    console.log('Star rendering');
    // if (props.selected) {
    //     return <span><b>star </b></span>
    // } else {
    //     return <span>star </span>
    // }
    const onStarClick = () => props.setRatingStarValue(props.ratingStarValue)
    return <span onClick={onStarClick}>{props.selected ? <b>star </b> : " star"}</span>
}
