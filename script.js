const noteText = document.querySelector('input[type="text"]');
const noteDate = document.querySelector('input[type="date"]');
const addNewbtn = document.querySelector('button[type="submit"]');
const notesDiv = document.querySelector('.notes-div');
const dateDiv = document.querySelector('due-date');
let noteArray=[];
let dateInput;
let noteInput;
let noteID = 0;

class Note {
    constructor(notetext, duedate, id) {
      this.text = notetext;
      this.due = duedate;
      this.id = id
    }
}

noteText.addEventListener('input', function() {
    noteInput = noteText.value;
    console.log(noteInput)
})
noteDate.addEventListener('input', function() {
    dateInput = noteDate.value;
    console.log(dateInput)
})

function addNewNote(){
    noteID++
    noteArray.push(new Note(noteInput, dateInput, noteID));
    let lastItem = noteArray[noteArray.length - 1];
    let newNoteHTML = `<div class="notes-and-checkbox" id="${noteID}"> <div class="note"> <p class="to-do"> <strong>To do</strong>: ${lastItem.text}</p><p class="due-date"><strong>Due by</strong>: ${lastItem.due}</p></div><div class="checkbox"><input type="checkbox" onclick='deleteNote(this)'></div></div>`
    notesDiv.insertAdjacentHTML("beforeend", newNoteHTML);
    console.log(noteArray);
    console.log(noteID);
}

function deleteNote(checkbox){
        const parentElement = checkbox.closest('.notes-and-checkbox');
        let ID = parseInt(parentElement.id, 10) - 1;
        noteArray.splice(ID, 1);
        console.log(noteArray);
        parentElement.remove();
}
