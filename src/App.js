import NotesList from "./components/NotesList";
import SearchBar from "./components/SearchBar";
import { nanoid } from "nanoid";
import { useState, useEffect } from "react";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes-data"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes-data", JSON.stringify(notes));
  }, [notes]);

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
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <h1 className="header">Notes App</h1>
        <button onClick={() => setDarkMode((prev) => !prev)} className="save">
          {darkMode ? "lightMode" : "darkMode"}
        </button>
        <SearchBar Search={setSearch} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(search)
          )}
          AddNote={addNote}
          Delete={deleteNote}
        />
      </div>
    </div>
  );
};

export default App;
