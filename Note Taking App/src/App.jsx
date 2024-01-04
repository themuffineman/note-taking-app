import "./Note.css"
import { useState } from "react"
let idCount = 0;

function App() {


  const [NoteInput, setNoteInput] = useState("")
  const [newNotes, setNewNote] = useState([])


  function createNewNote(e){
    idCount += 1
    e.preventDefault()
    setNewNote((input)=>{
      return (
      [...input, { todo: NoteInput, id: idCount, class: ''}]
    )})

    setNoteInput('')
  }
  function deleteNote(id){

    setNewNote((note)=>{
      return(
      note.filter( (e)=> e.id != id)
      )
    })
  }
  function strikeThrough(id){
    setNewNote((prevNotes) => {

      // Use map to create a new array with the updated note
      
      const updatedNotes = prevNotes.map((todo) => {
        if (todo.id === id) {
          console.log('yaay!');
          return { ...todo, class: "strikethrough" };
        }
  
        return todo;
      });
  
      // Return the new array to update the state
      return updatedNotes;
    });
  }
  return(
    <>
      <form className="container">
        <label htmlFor="noteInput">Note</label>
        <input type="text" id="noteInput" placeholder='e.g Wash dishes' value={NoteInput} onChange={(e)=> setNoteInput(e.target.value)}/>
        <button onClick={createNewNote}>
          Add Todo Item
        </button>
      </form>
      {newNotes.map((note)=>{
        return(
          <div className='container' key={note.id}>
            <p className={note.class}>{note.todo}</p>
            <input type="checkbox" onChange={()=> strikeThrough(note.id)}/>
            <button onClick={ ()=> deleteNote(note.id)}>DELETE</button>
          </div>)
        })}
    </>
  )
}


export default App
