import { FaDeleteLeft } from "react-icons/fa6";
import ReactMarkdown from "react-markdown";

const Note = (props) => {
  const { id, text, date, Delete } = props;
  return (
    <div className="note">
      <ReactMarkdown>{text}</ReactMarkdown>
      <span>{text}</span>
      <div className="footer">
        <small>{date}</small>
        <FaDeleteLeft
          onClick={() => Delete(id)}
          className="del-btn"
          size="1.2em"
        />
      </div>
    </div>
  );
};

export default Note;
