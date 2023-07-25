const notesContainer = document.getElementById("app");
const addNoteButton = notesContainer.querySelector(".add-note");

addNoteButton.addEventListener("click", () => addNote());
// function generateRandomNumbers() 
//   {
//     var numbers = [];
    
//     while (numbers.length < 4) {
//       var randomNumbers = Math.floor(Math.random() * 9) + 1; // Generate a random number between 1 and 10
      
//       if (numbers.indexOf(randomNumbers) === -1) {
//         numbers.push(randomNumbers);
//       }
//     }
//     console.log(numbers,typeof(numbers));
//     const newNum=JSON.stringify(numbers);
//     console.log(newNum,typeof(newNum));
//     const NewNumber=newNum.replace(/,/g, '');
//     console.log(NewNumber,typeof(NewNumber));


//     return numbers;
//   }



function addNote() {
    const notes = getNotes();
    const noteObject = {
      id: Math.floor(Math.random() * 100000),
      content: ""
    };
  
    const noteElement = createNoteElement(noteObject.id, noteObject.content);
    notesContainer.insertBefore(noteElement, addNoteButton);
  
    notes.push(noteObject);
    saveNotes(notes);
  }

function getNotes() {
    return JSON.parse(localStorage.getItem("stickynotes-notes") || "[]");
  }
  
  

getNotes().forEach((note) => {
  const noteElement = createNoteElement(note.id, note.content);
  notesContainer.insertBefore(noteElement, addNoteButton);
});


function saveNotes(notes) {
  localStorage.setItem("stickynotes-notes", JSON.stringify(notes));
}

function createNoteElement(id, content) {
  const element = document.createElement("textarea");

  element.classList.add("note");
  element.value = content;
  element.placeholder = "STICKY - NOTE";

  element.addEventListener("change", () => {
    updateNote(id, element.value);
  });

  element.addEventListener("dblclick", () => {
    const doDelete = confirm(
      "Are you sure you wish to delete this sticky note?"
    );

    if (doDelete) {
      deleteNote(id, element);
    }
  });

  return element;
}

function updateNote(id, newContent) {
  const notes = getNotes();
  const targetNote = notes.filter((note) => note.id == id)[0];

  targetNote.content = newContent;
  saveNotes(notes);
}

function deleteNote(id, element) {
  const notes = getNotes().filter((note) => note.id != id);
  console.log(notes);

  saveNotes(notes);
  notesContainer.removeChild(element);
}
