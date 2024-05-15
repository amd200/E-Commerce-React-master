import React from "react";
import { NavLink } from "react-router-dom";

const SubTiltle = ({ title, btntitle, pathText }) => {
  return (
    <div className="d-flex justify-content-between pt-4">
      <div className="sub-tile">{title}</div>
      {btntitle ? (
        <NavLink to={pathText} style={{ textDecoration: "none" }}>
          <div className="shopping-now">{btntitle}</div>
        </NavLink>
      ) : null}
    </div>
  );
};

export default SubTiltle;
