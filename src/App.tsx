import React, {useState} from 'react';
import './App.css';
import {Rating} from './components/Rating/Rating';
import {Accordion} from './components/Accordion/Accordion';
import {UnControlledOnOff} from "./components/UnControlledOnOff/UnControlledOnOff";
import {UnControlledAccordion} from "./components/UnControlledAccordion/UnControlledAccordion";
import {UnControlledRating} from "./components/UnControlledRating/UnControlledRating";
import {OnOff} from "./components/OnOff/OnOff";
import {Select} from "./components/Select/Select";

export type RatingStarValueType = 0 | 1 | 2 | 3 | 4 | 5

function App() {
    console.log('App rendering');
    const [ratingStarValue, setRatingStarValue] = useState<RatingStarValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [onSwitch, setOnSwitch] = useState<boolean>(false);
    const [selectValue, setSelectValue] = useState("Moscow")
    return (
        <div>
            <h3>Controlled components</h3>
            <AppTitle title={'This is App title component 1'}/>
            <Rating ratingStarValue={ratingStarValue}
                    setRatingStarValue={setRatingStarValue}/>
            <Accordion titleValue={'Menu:'}
                       setAccordionCollapsed={setAccordionCollapsed}
                       collapsed={accordionCollapsed} items={[]} onValueClick={() => null}/>
            <AppTitle title={'This is App title component 2'}/>
            <OnOff on={onSwitch} setOn={setOnSwitch}/> {onSwitch.toString()}
            <Select  items={[{id: 1, value: 'Minsk'}, {id: 2, value: 'Moscow'}]}
                     onChange={setSelectValue}
                     value={selectValue}/>

            <hr/>
            <h3>Uncontrolled components</h3>
            <UnControlledAccordion titleValue={'Menu:'} />
            <UnControlledAccordion titleValue={'Users:'} />
            <UnControlledOnOff onChange={() => null} defaultValue={false}/>
            {/*<UnControlledOnOff />*/}
            {/*<UnControlledOnOff />*/}
            {/*<UnControlledRating />*/}
            <UnControlledRating onChange={() => null}/>

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
