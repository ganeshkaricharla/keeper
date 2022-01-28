import React, { useState } from 'react';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import AddIcon from '@material-ui/icons/Add';

function AddNote(props) {

    const [isExpanded, setExpanded] = useState(false);

    const [note, setNote] = useState({
        title: "",
        content: ""
    });


    function handleChange(event) {
        const {name, value} = event.target;
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]:value
            }
        })
    }

    function handleExpanded(){
        setExpanded(true);
    }
    function submitClick(event){
        props.onAdd(note);
        setNote({
            title: "",
            content:""
        })
        event.preventDefault();
    }

    return (
        <div>
            <form action="" className="create-note">
                {isExpanded && <input type="text" onChange={handleChange} value={note.title} name="title" placeholder="title" />}
                <textarea name="content" onChange={handleChange} onClick= {handleExpanded} value={note.content} placeholder="Take a note..." rows={isExpanded?"3":"1"}></textarea>
                <Zoom in ={isExpanded}>
                    <Fab onClick={submitClick}><AddIcon /></Fab>
                </Zoom>
            </form>
        </div>
    )
}


export default AddNote;