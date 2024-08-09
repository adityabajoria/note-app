import NotesList from "./components/NotesList";
import { nanoid } from "nanoid";
import { useState } from "react";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "text",
      date: "15",
    },
  ]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };
  return (
    <div className="container">
      <NotesList notes={notes} AddNote={addNote} Delete={deleteNote} />
    </div>
  );
};

export default App;
