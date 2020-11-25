import React, {useState} from 'react';
import './App.css';
import Rating from './components/Rating/Rating';
import Accordion from './components/Accordion/Accordion';
import UnControlledOnOff from "./components/UnControlledOnOff/UnControlledOnOff";
import UnControlledAccordion from "./components/UnControlledAccordion/UnControlledAccordion";
import UnControlledRating from "./components/UnControlledRating/UnControlledRating";
import OnOff from "./components/OnOff/OnOff";

export type RatingStarValueType = 0 | 1 | 2 | 3 | 4 | 5

function App() {
    console.log('App rendering');
    let [ratingStarValue, setRatingStarValue] = useState<RatingStarValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [on, setOn] = useState<boolean>(false);

    return (
        <div>
            <h3>Controlled components</h3>
            <AppTitle title={'This is App title component 1'}/>
            <Rating ratingStarValue={ratingStarValue}
                    setRatingStarValue={setRatingStarValue}/>
            <Accordion titleValue={'Menu:'}
                       setAccordionCollapsed={setAccordionCollapsed}
                       collapsed={accordionCollapsed}/>
            <AppTitle title={'This is App title component 2'}/>
            <OnOff on={on} setOn={setOn}/>

            <hr/>
            <h3>Uncontrolled components</h3>
            <UnControlledAccordion titleValue={'Menu:'} />
            <UnControlledAccordion titleValue={'Users:'} />
            <UnControlledOnOff />
            <UnControlledOnOff />
            <UnControlledOnOff />
            <UnControlledRating />
            <UnControlledRating />

        </div>
    );
}

type AppTitlePropsType = {
    title: string
}

function AppTitle(props: AppTitlePropsType) {
    console.log('AppTitle rendering');
    return (
        <div>{props.title}</div>
    )
}

export default App;
