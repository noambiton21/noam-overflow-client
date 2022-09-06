import React, { useState, useEffect } from "react";
import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { createApiClient } from "../api";
import QuestionsList from "./QuestionsList";
import QuestionPage from "./QuestionPage";
import QuestionsContext from "./QuestionsContext";
const api = createApiClient();

const ProtectedRoutes = () => {
  const [questions, setQuestions] = useState([]);
  const [shouldFetchQuestions, setShouldFetchQuestions] = useState(false);
  const [search, setSearch] = useState("");
  useEffect(() => {
    async function fetchQuestions() {
      const questions = await api.getQuestions(search);
      setQuestions(questions);
    }
    setShouldFetchQuestions(false);
    fetchQuestions();
  }, [shouldFetchQuestions, search]);
  return (
    <QuestionsContext.Provider
      value={{
        questions,
        setQuestions,
        setQuestionsChanged: setShouldFetchQuestions,
        setSearch,
      }}
    >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<QuestionsList />}></Route>
          <Route path="/question/:id" element={<QuestionPage />}></Route>
        </Routes>
      </BrowserRouter>
    </QuestionsContext.Provider>
  );
};

export default ProtectedRoutes;
