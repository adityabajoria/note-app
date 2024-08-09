import { MdDeleteForever } from "react-icons/md";

const Note = (props) => {
  const { id, text, date } = props;
  return (
    <div className="note">
      <span>{text}</span>
      <div className="footer">
        <small>{date}</small>
        <MdDeleteForever className="delete-icon" size="1.3em" />
      </div>
    </div>
  );
};

export default Note;
