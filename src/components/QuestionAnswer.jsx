import React from "react";
import arrow from "../pictures/up-arrow-svgrepo-com.svg";
import formatDate from "./formatDate";
import { useState } from "react";
import { createApiClient } from "../api";
const api = createApiClient();

const QuestionAnswer = (props) => {
  const [answer, setAnswer] = useState(props.answer);

  const updateScore = (score) => {
    async function addScore() {
      const status = await api.addScore(answer._id, score);
      console.log(status);
      if (status === 201) {
        setAnswer({ ...answer, score: score });
      } else {
        alert("You can vote only once");
      }
    }
    addScore();
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
