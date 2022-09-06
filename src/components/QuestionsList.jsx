import QuestionsListItem from "./QuestionsListItem";
import QuestionsContext from "./QuestionsContext";
import { useContext } from "react";

const QuestionsList = () => {
  const { questions } = useContext(QuestionsContext);

  return (
    <main>
      <div className="questions-box">
        {questions.map((question) => (
          <QuestionsListItem key={question._id} question={question} />
        ))}
      </div>
    </main>
  );
};

export default QuestionsList;
