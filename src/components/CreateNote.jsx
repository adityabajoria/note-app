import { useState } from "react";

const CreateNote = ({ AddNote }) => {
  const [text, setText] = useState("");

  const handleText = (e) => {
    setText(e.target.value);
  };

  const saveBtn = () => {
    if (text === "") {
      AddNote(text);
    }
    AddNote(text);
  };
  return (
    <div className="note create">
      <textarea
        rows="10"
        cols="10"
        value={text}
        placeholder="Add a Note...."
        onChange={handleText}
      ></textarea>
      <div className="note-footer">
        <small>text remaining</small>
        <button className="save" onClick={saveBtn}>
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateNote;
