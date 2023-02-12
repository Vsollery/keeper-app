import React, { useState } from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';


function CreateArea(props) {

    const [isExpanded, setExpanded] = useState(false);

    function expand(){
        setExpanded(true)
    }


    const [note, setNotes] = useState({
        title: "",
        content: ""
    })

    function handleChange(event){

        const {name, value} = event.target;

        setNotes(prevNote => {
            return{
                ...prevNote,
                [name] : value
            }
        })
    }

    function submitNotes(event){
        props.onAdd(note);
        setNotes({
            title: "",
            content: ""
        })
        event.preventDefault();
    }

  return (
    <div>
      <form className="create-note">
        {
            isExpanded ? <input name="title" onChange={handleChange} value={note.title} placeholder="Title" /> : null
        }
        <textarea onClick={expand} name="content" onChange={handleChange} value={note.content} placeholder="Take a note..." rows={isExpanded ? 3 : 1} /> 
        <Zoom in={isExpanded}> 
            <Fab onClick={submitNotes}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
