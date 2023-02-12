import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';

// const createNotes = (notesItem) =>{
//   return (
//     <Note key={notesItem.key} title={notesItem.title} content={notesItem.content}/>
//   )
// }


function App() {

  const[notes, setNotes] = useState([]);

  function addNote(newNote){
    setNotes(prevNotes => {
      return [...prevNotes, newNote]
    })
  }

  function deleteNote(id){
    setNotes(prevNotes =>{
      return prevNotes.filter((noteItem, index) =>{
        return index !== id;
      })
    })
  }

  return (
    <div className="App">
     <Header />
      <CreateArea onAdd={addNote}/>
      {
        notes.map((notesItem,index)=> {
        return (<Note 
                  key = {index}
                  id={index}
                  title={notesItem.title} 
                  content={notesItem.content} 
                  onDelete={deleteNote}

                  />)
        })
      }
      <Footer />
      
    </div>
  );
}

export default App;
