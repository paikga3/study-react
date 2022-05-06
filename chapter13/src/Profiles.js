import React from "react";
import { Link, Outlet } from "react-router-dom";
import WithRouterSample from "./WithRouterSample";

const Profiles = () => {
  return (
    <div>
      <h3>사용자 목록:</h3>
      <ul>
        <li>
          <Link to="velopert">velopert</Link>
        </li>
        <li>
          <Link to="gildong">gildong</Link>
        </li>
      </ul>

      <Outlet />
      <WithRouterSample />
    </div>
  );
};

export default Profiles;
