import React, { useState, useEffect } from "react";
import QuestionsListItem from "./QuestionsListItem";
import LoadingSpinner from "./LoadingSpinner";
import QuestionsContext from "./QuestionsContext";
import { useContext } from "react";

const QuestionsList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [questionss, setQuestionss] = useState();

  const { questions, setQuestions } = useContext(QuestionsContext);

  return (
    <div>
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {questions && !isLoading && (
        <div>
          {questions.map((question) => (
            <QuestionsListItem key={question._id} question={question} />
          ))}
        </div>
      )}
    </div>
  );
};

export default QuestionsList;
