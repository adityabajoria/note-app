import React from "react";
import Note from "./Note";
import CreateNote from "./CreateNote";

const NotesList = (props) => {
  const { notes, AddNote } = props;
  return (
    <div className="n-list">
      {notes.map((note) => (
        <Note id={note.id} text={note.text} date={note.date} />
      ))}
      <CreateNote AddNote={AddNote} />
    </div>
  );
};

export default NotesList;
