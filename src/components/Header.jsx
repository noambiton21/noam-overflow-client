import React, { useState, useEffect } from "react";
import logo from "../pictures/LOGO-05.png";
import Logout from "./Logout";
import AskQuestionDialog from "./AskQuestionDialog";
import "./css-components/Header.css";
import { Link, useNavigate } from "react-router-dom";
import QuestionsContext from "./QuestionsContext";
import { useContext } from "react";

const Header = () => {
  const [showAskQuestionDialog, setShowAskQuestionDialog] = useState(false);
  const { setSearch } = useContext(QuestionsContext);
  let navigate = useNavigate();

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSearch(event.target.value);
    }
  };

  const onSearch = (val) => {
    setSearch(val);
    navigate("/");
  };
  return (
    <div>
      <header>
        <Link className="iv-link" to={"/"}>
          <img className="iv-bar-logo" src={logo} alt="Logo" />
        </Link>
        <div className="center-header-items">
          <input
            className="search"
            type="search"
            placeholder="Search..."
            onKeyDown={handleKeyDown}
          />
          <button
            className="btn-ask-question"
            onClick={() => setShowAskQuestionDialog(true)}
          >
            Ask question
          </button>
        </div>
        <Logout />
      </header>
      <AskQuestionDialog
        onClose={() => setShowAskQuestionDialog(false)}
        show={showAskQuestionDialog}
      />
    </div>
  );
};

export default Header;
