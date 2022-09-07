import React from "react";
import "./css-components/QuestionPage.css";
import QuestionAnswer from "./QuestionAnswer";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import formatDate from "./formatDate";
import QuestionsContext from "./QuestionsContext";
import { useContext } from "react";
import { createApiClient } from "../api";
const api = createApiClient();

const QuestionPage = () => {
  const params = useParams();
  const [question, setQuestion] = useState([]);
  const [answerText, setAnswerText] = useState("");
  const [newAnswer, setNewAnswer] = useState(false);
  const { setQuestionsChanged } = useContext(QuestionsContext);
  let token = localStorage.getItem("token");

  useEffect(() => {
    async function fetchQuestion() {
      const questionFetched = await api.getQuestion(params.id);
      setQuestion(questionFetched);
    }
    setNewAnswer(false);
    fetchQuestion();
  }, [params.id, newAnswer]);

  const answerSubmitHandler = (event) => {
    event.preventDefault();
    async function postAnswer() {
      api.addAnswer(answerText, params.id);
      setNewAnswer(true);
      setQuestionsChanged(true);
    }
    postAnswer();
    document.getElementById("answer-input").value = "";
  };

  return (
    <div className="main">
      <div>
        <h1 className="quest-title">{question.title}</h1>
        <div className="question-created">
          Asked {formatDate(question.createdAt)} by {question.createdBy?.email}
        </div>
        <hr className="divider"></hr>
      </div>
      <p>{question.content}</p>
      <div className="tags-frame">
        {question.tags?.map((tag) => (
          <div key={tag} className="tag">
            {tag}
          </div>
        ))}
      </div>

      <div>
        <h2 className="answer">Answers</h2>
        {question.answers
          ?.sort((a, b) => {
            return b.score - a.score;
          })
          .map((answer) => (
            <div key={answer._id}>
              <QuestionAnswer answer={answer} />
            </div>
          ))}
        <hr className="divider"></hr>
        <textarea
          id="answer-input"
          className="input-answer"
          placeholder="Type answer here"
          onChange={(e) => setAnswerText(e.target.value)}
        />
        <button
          className="btn-answer"
          type="submit"
          onClick={answerSubmitHandler}
        >
          Answer
        </button>
      </div>
    </div>
  );
};

export default QuestionPage;
