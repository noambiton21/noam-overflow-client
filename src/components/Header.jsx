import React, { useState, useEffect } from "react";
import logo from "../pictures/LOGO-05.png";
import Logout from "./Logout";
import AskQuestionDialog from "./AskQuestionDialog";
import "./css-components/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [search, setSearch] = useState("");
  const [showAskQuestionDialog, setShowAskQuestionDialog] = useState(false);

  let searchDebounce;
  const onSearch = (val) => {
    clearTimeout(searchDebounce);
    searchDebounce = setTimeout(async () => {
      setSearch(val);
    }, 300);
  };
  return (
    <div>
      <header>
        <Link className="iv-link" to={"/"}>
          <img className="iv-bar-logo" src={logo} alt="Logo" />
        </Link>
        <div className="xx">
          <input
            className="search"
            type="search"
            placeholder="Search..."
            onChange={(e) => onSearch(e.target.value)}
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
