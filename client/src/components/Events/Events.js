import React from 'react';
import { useSelector } from 'react-redux';

import Event from "./Event/Event.js";
import useStyles from './styles';

const Events = () =>{
    const events = useSelector(( state ) => state.events)
    const classes = useStyles();

    console.log(events);
    
    return (
        <>
         <h1 className="">EVENTS</h1>
         <Event />
         <Event />
        </>
    )
}

export default Events;