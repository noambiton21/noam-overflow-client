import React, { useState } from "react";
import "./css-components/AskQuestionDialog.css";
import axios from "axios";
import exitIcon from "../pictures/x-symbol-svgrepo-com.svg";
import QuestionsContext from "./QuestionsContext";
import { useContext } from "react";

const AskQuestionDialog = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);
  const { setQuestionsChanged } = useContext(QuestionsContext);
  const token = localStorage.getItem("token");

  if (!props.show) {
    return null;
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    axios
      .post(
        `http://localhost:7000/api/question`,
        {
          content: content,
          title: title,
          tags: tags,
        },
        {
          headers: { Authorization: token },
        }
      )
      .then(function (response) {
        setQuestionsChanged(true);
      })
      .catch(function (error) {});
    props.onClose();
  };

  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-body">
          <img className="btn-exit" src={exitIcon} onClick={props.onClose} />
          <div className="container">
            <div className="modal-title">Ask Question</div>
            <h4 className="label-name">Title</h4>
            <input
              type="text"
              className="textField"
              onChange={(e) => setTitle(e.target.value)}
            />
            <h4 className="label-name">Question</h4>
            <textarea
              className="textAreaField"
              type="text"
              onChange={(e) => setContent(e.target.value)}
            />
            <h4 className="label-name">Tags separated by ,</h4>
            <input
              className="textField"
              type="text"
              onChange={(e) => setTags(e.target.value.split(","))}
            />
            <button
              type="submit"
              className="submit-modal"
              onClick={onSubmitHandler}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AskQuestionDialog;
