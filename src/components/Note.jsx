const Note = (props) => {
  const { id, text, date, Delete } = props;
  return (
    <div className="note">
      <span>{text}</span>
      <div className="footer">
        <small>{date}</small>
        <button onClick={() => Delete(id)} className="del-btn" size="1.2em">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Note;
