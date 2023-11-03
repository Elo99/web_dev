import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoginForm from "./LoginForm";
import Main from "./Main";
import "./App.css";

const Home = () => {
  return (
    <Router>
      <div className="home">
        <LoginForm />
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Home;