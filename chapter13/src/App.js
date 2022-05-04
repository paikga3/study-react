import React from "react";
import { Route, Link, Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Profiles from "./Profiles";
import Profile from "./Profile";
import HistorySample from "./HistorySample";

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필</Link>
        </li>
        <li>
          <Link to="/history">History 예제</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles" element={<Profiles />}>
          <Route index={true} element={<div>사용자를 선택해 주세요.</div>} />
          <Route path=":username" element={<Profile />} />
        </Route>
        <Route path="/history" element={<HistorySample />} />
      </Routes>
    </div>
  );
};

export default App;
