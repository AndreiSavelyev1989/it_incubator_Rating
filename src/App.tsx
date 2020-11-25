import React from 'react';
import './App.css';
import Rating from './components/Rating/Rating';
import Accordion from './components/Accordion/Accordion';
import OnOff from "./components/OnOff/OnOff";
import UnControlledAccordion from "./components/UnControlledAccordion/UnControlledAccordion";
import UnControlledRating from "./components/UnControlledRating/UnControlledRating";

function App() {
    console.log('App rendering');

    return (
        <div>
            <AppTitle title={'This is App title component 1'}/>
            <Rating value={3}/>
            <Accordion titleValue={'Menu:'} collapsed={false}/>
            <AppTitle title={'This is App title component 2'}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <Accordion titleValue={'Users:'} collapsed={true}/>

            <OnOff/>
            <OnOff/>
            <OnOff/>

            <UnControlledAccordion titleValue={'Menu:'} />
            <UnControlledAccordion titleValue={'Users:'} />

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
