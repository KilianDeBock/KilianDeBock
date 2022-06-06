import React from "react";
import { Link } from "react-router-dom";
import "./tools.scss";

const ToolsPage = () => {
  const hookL = "{";
  const hookR = "}";

  return (
    <article className="code code--fill">
      <div className="code__line">
        const <span className="code__variable">Tools</span> {hookL}
      </div>
      <div className="code__line code__tab-1">
        <span className="code__key">points</span>:{" "}
        <Link className="code__value" to="/tools/points">
          "
          <span className="link">
            Calculate your school points with weight, percentage and total end
            number.
          </span>
          "
        </Link>
      </div>
      <div className="code__line">{hookR}</div>
    </article>
  );
};

export default ToolsPage;
