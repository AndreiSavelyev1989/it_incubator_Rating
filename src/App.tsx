import React from 'react';
import './App.css';
import Rating from './components/Rating/Rating';
import Accordion from './components/Accordion/Accordion';

function App() {
  return (
    <div>
     <AppTitle title={'This is App component'}/>
     <Rating value={3}/>
     <Accordion title ={'Menu:'}/>
     <Rating value={4}/>
    </div>
  );
}


function AppTitle (props:any) {
  return (
    <div>{props.title}</div>
  )
}

export default App;
