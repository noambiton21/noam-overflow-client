import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuestionsContext from "./components/QuestionsContext";
import Login from "./components/Login";
import Header from "./components/Header";
import QuestionsList from "./components/QuestionsList";
import QuestionPage from "./components/QuestionPage";

function App() {
  const [questions, setQuestions] = useState([]);
  const [questionsChanged, setQuestionsChanged] = useState(false);


  useEffect(() => {
    axios
      .get(`http://localhost:7000/api/question`)
      .then((res) => {
        setQuestionsChanged(false);
        setQuestions(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [questionsChanged]);

  return (
    <BrowserRouter>
      <QuestionsContext.Provider value={{ questions, setQuestions ,setQuestionsChanged }}>
        <Header />
        <Routes>
          <Route path="/" exact element={<QuestionsList />}></Route>
          <Route path="/question" exact element={<QuestionsList />}></Route>
          <Route path="/question/:id" element={<QuestionPage />}></Route>
        </Routes>
      </QuestionsContext.Provider>
    </BrowserRouter>
  );
}

export default App;
