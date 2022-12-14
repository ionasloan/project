import React, {useState} from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";

import FileBase from 'react-file-base64';
import useStyles from './styles';



const Form = () =>{
    const [eventData, setEventData] = useState({
        location: '',
        title: '', 
        plot: '', 
        country: '',
        runningTime: '',
        date: '',
        genre: '',
        image: '' });
    const classes = useStyles();

    const handleSubmit = () => {

    }
    const clear = () => {

    }


    return (
       <Paper className={classes.paper}>
        <form autoComplete="off" noValidate className="{classes.form}" onSubmit={handleSubmit}>
        <Typography varient="h6">Creating an Event </Typography>
        <TextField
         name="location" 
         variant="outlined" 
         label="Location"
         fullWidth
         value={eventData.location}
         onChange={(e) => setEventData ({ ...eventData, location: e.target.value})}
         />

    <TextField
         name="title" 
         variant="outlined" 
         label="Title"
         fullWidth
         value={eventData.title}
         onChange={(e) => setEventData ({ ...eventData, title: e.target.value})}
         />

<TextField
         name="plot" 
         variant="outlined" 
         label="Plot"
         fullWidth
         value={eventData.plot}
         onChange={(e) => setEventData ({ ...eventData, plot: e.target.value})}
         />

<TextField
         name="country" 
         variant="outlined" 
         label="Country"
         fullWidth
         value={eventData.country}
         onChange={(e) => setEventData ({ ...eventData, country: e.target.value})}
         />

<TextField
         name="runningTime" 
         variant="outlined" 
         label="Running Time"
         fullWidth
         value={eventData.runningTime}
         onChange={(e) => setEventData ({ ...eventData, runningTime: e.target.value})}
         />

<TextField
         name="date" 
         variant="outlined" 
         label="Date"
         fullWidth
         value={eventData.runningTime}
         onChange={(e) => setEventData ({ ...eventData, date: e.target.value})}
         />

<TextField
         name="genre" 
         variant="outlined" 
         label="Genre"
         fullWidth
         value={eventData.genre}
         onChange={(e) => setEventData ({ ...eventData, genre: e.target.value})}
         />

<TextField
         name="image" 
         variant="outlined" 
         label="Image"
         fullWidth
         value={eventData.image}
         onChange={(e) => setEventData ({ ...eventData, image: e.target.value})}
         />


        <div className="{classes.fileInput}">
            <FileBase
                type="file"
                multiple={false}
                onDone={({base64}) => setEventData({ ...eventData, selectedFile: base64 })}
            />

        </div>

        <Button className={classes.buttonSubmit} varient="container" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button varient="contained" color="secondary" size="large" onClick={clear} fullWidth>Clear</Button>
        </form>
       </Paper>
    )
}

export default Form;