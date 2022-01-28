import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import AddNote from './AddNote';


function App() {

    const [notes, setNotes] = useState([]);

    function addNote(note) {
        setNotes(previousNotes => {return [...previousNotes,note]})
    }

    function deleteNote(id) {
        setNotes(prevNotes => {
            return prevNotes.filter((noteItems,index) => {
                return index !== id;
            })
        })
    }
    return (
        <div>
            <Header />
            <AddNote onAdd={addNote} />
            {notes.map(function (note,index) {
                return (
                    <Note
                        key={index}
                        id = {index}
                        title={note.title}
                        paragraph={note.content}
                        onDelete = {deleteNote}
                    />
                )
            })}
            <Footer />
        </div>
    );
}

export default App;