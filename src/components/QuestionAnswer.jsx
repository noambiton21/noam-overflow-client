import React from "react";
import arrow from "../pictures/up-arrow-svgrepo-com.svg";
import formatDate from "./formatDate";
import axios from "axios";
import { useState } from "react";

const QuestionAnswer = (props) => {
  const [answer, setAnswer] = useState(props.answer);

  const updateScore = (score) => {
    axios
      .post(`http://localhost:7000/api/score`, {
        answerId: answer._id,
        userId: "63151c7b76e60b91412a79b5",
        newScore: score,
      })
      .then(function (response) {
        setAnswer({ ...answer, score: score });
      })
      .catch(function (error) {
        alert(error);
      });
  };

  const addScoreHandler = (event) => {
    event.preventDefault();
    updateScore(answer.score + 1);
  };

  const subScoreHandler = (event) => {
    event.preventDefault();
    updateScore(answer.score - 1);
  };

  return (
    <div className="answer-box">
      <div className="quest-content">
        <div className="quest-details">
          <img
            className="arrow-up"
            src={arrow}
            width="20px"
            onClick={addScoreHandler}
          />
          <span className="answer-score">{answer.score}</span>
          <img
            className="arrow-down"
            src={arrow}
            width="20px"
            onClick={subScoreHandler}
          />
        </div>
        <div className="answer">{answer.content}</div>
      </div>
      <div className="created">
        <div className="created-item">
          answered {formatDate(answer.createdAt)}
        </div>
        <div className="created-item">by {answer.createdBy.email}</div>
      </div>
    </div>
  );
};

export default QuestionAnswer;
