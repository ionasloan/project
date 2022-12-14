//this will get import everything as an api
import * as api from '../api';

//action creators 

export const getEvents = () => async (dispatch) => {

    try{
        const {data} = await api.fetchEvents();

        dispatch ({ type: 'FETCH_ALL', payload: data }); 
    }
    catch(error){
        console.log(error.message);
    }
   
}

// const action = { type: 'FETCH_ALL', payload: [] }