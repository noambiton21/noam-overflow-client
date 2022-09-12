import React from "react";
import { Link } from "react-router-dom";
import formatDate from "./formatDate";

import "./css-components/QuestionsListItem.css";
const QuestionsListItem = (props) => {
  const question = props.question;

  return (
    <div className="question">
      <div className="question-content">
        <div className="question-details">
          <span className="numeric-detail">{question.votes}</span>
          <span>votes</span>
          <span className="numeric-detail">{question.answers.length}</span>
          <span>answers</span>
        </div>
        <div>
          <Link className="question-title" to={`/question/${question._id}`}>
            {question.title}
          </Link>
          <p>{question.content}</p>
          <div className="tags-frame">
            {question.tags?.map((tag, i) => (
              <div key={i} className="tag">
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="created-details">
          <div>asked {formatDate(question.createdAt)}</div>
          <div>by {question.createdByEmail} </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionsListItem;
