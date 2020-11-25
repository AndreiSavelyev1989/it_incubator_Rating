import React, {useState} from 'react'

type RatingPropsType = {}

function UnControlledRating(props: RatingPropsType) {
    console.log('Rating rendering');
    let [starValue, setStarValue] = useState(0)

    return (
        <div>
            <Star selected={starValue > 0} setStarValue={setStarValue} starValue={1}/>
            <Star selected={starValue > 1} setStarValue={setStarValue} starValue={2}/>
            <Star selected={starValue > 2} setStarValue={setStarValue} starValue={3}/>
            <Star selected={starValue > 3} setStarValue={setStarValue} starValue={4}/>
            <Star selected={starValue > 4} setStarValue={setStarValue} starValue={5}/>
        </div>
    )
}


type StarPropsType = {
    selected: boolean
    starValue: 1 | 2 | 3 | 4 | 5
    setStarValue: (starValue: 1 | 2 | 3 | 4 | 5) => void
}


function Star(props: StarPropsType) {
    console.log('Star rendering');
    const onStarClick = () => props.setStarValue(props.starValue)
    return <span onClick={onStarClick}>{props.selected ? <b>star </b> : " star"}</span>
}

export default UnControlledRating;