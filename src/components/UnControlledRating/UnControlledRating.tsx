import React, {useState} from 'react'
import {RatingStarValueType} from "../../App";

type RatingPropsType = {
    defaulValue?: RatingStarValueType
    onChange: (value: RatingStarValueType) => void
}

export const UnControlledRating = React.memo((props: RatingPropsType) => {
    console.log('Rating rendering');
    let [starValue, setStarValue] = useState(props.defaulValue ? props.defaulValue : 0)

    return (
        <div>
            <Star selected={starValue > 0} setStarValue={setStarValue} starValue={1} onChange={props.onChange}/>
            <Star selected={starValue > 1} setStarValue={setStarValue} starValue={2} onChange={props.onChange}/>
            <Star selected={starValue > 2} setStarValue={setStarValue} starValue={3} onChange={props.onChange}/>
            <Star selected={starValue > 3} setStarValue={setStarValue} starValue={4} onChange={props.onChange}/>
            <Star selected={starValue > 4} setStarValue={setStarValue} starValue={5} onChange={props.onChange}/>
        </div>
    )
})


type StarPropsType = {
    selected: boolean
    starValue: 1 | 2 | 3 | 4 | 5
    setStarValue: (starValue: 1 | 2 | 3 | 4 | 5) => void
    onChange: (value: RatingStarValueType) => void
}


const Star = React.memo((props: StarPropsType) => {
    console.log('Star rendering');
    const onStarClick = () => {
        props.setStarValue(props.starValue)
        props.onChange(props.starValue)
    }
    return <span onClick={onStarClick}>{props.selected ? <b>star </b> : " star"}</span>
})

