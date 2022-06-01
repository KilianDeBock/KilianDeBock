import React, { useEffect, useState } from "react";
import "./pointsCalculate.scss";

const PointsCalculatePage = () => {
  const [points, setPoints] = useState([{ 1: 0 }, { 1: 0 }]);
  const [id, setId] = useState(2);
  const [keyLength, setKeyLength] = useState(0);
  const [total, setTotal] = useState({});
  const [endNumber, setEndNumber] = useState(20);

  useEffect(() => {
    const P = Object.values(points[0]).filter((point) => point !== 0);
    const T = Object.values(points[1]).filter((point) => point !== 0);
    if (P.length === T.length && P.length > keyLength) {
      setKeyLength(P.length);

      const newPoints = { ...points };
      newPoints[0][id] = 0;
      newPoints[1][id] = 0;
      setPoints(newPoints);
      setId(id + 1);
    }

    const PTotal = Object.values(points[0]).reduce((acc, value) => value + acc);
    const TTotal = Object.values(points[1]).reduce((acc, value) => value + acc);
    const totalPoints = `${PTotal}/${TTotal}`;
    const percentage = (PTotal / TTotal) * 100 || 0;
    const toEndNr = (percentage / 100) * endNumber;
    setTotal({
      points: totalPoints,
      percentage: Math.round(percentage * 100) / 100,
      toEndNr: Math.round(toEndNr * 100) / 100,
    });
  }, [points, id, keyLength, endNumber]);

  const updatePoints = ({ target }) => {
    const newPoints = { ...points };
    const pV = points[1][target.id];
    const value = Number.parseFloat(target.value);
    newPoints[0][target.id] = value;
    newPoints[1][target.id] = value > pV ? value : pV;
    setPoints(newPoints);
    target.value = value;
  };

  const updateTotal = ({ target }) => {
    const newPoints = { ...points };
    const pV = points[0][target.id];
    const value = Number.parseFloat(target.value);
    newPoints[1][target.id] = value;
    setPoints(newPoints);
    target.value = value;

    // Wait for typer
    const notAllowed = value < pV;
    if (notAllowed)
      setTimeout(() => {
        const newValue = Number.parseFloat(target.value);
        newPoints[0][target.id] = newValue < pV ? newValue : pV;
        setPoints(newPoints);
      }, 1000);
  };

  return (
    <section>
      <form action="#">
        <article className="group">
          <label>
            Gotten Points
            {points[0] &&
              Object.entries(points[0]).map(([key, value], i) => {
                return (
                  <input
                    key={key + i}
                    id={key}
                    value={value}
                    type="number"
                    onChange={updatePoints}
                  />
                );
              })}
          </label>
          <label>
            Total Possible Points
            {points[1] &&
              Object.entries(points[1]).map(([key, value], i) => {
                return (
                  <input
                    key={i + key}
                    id={key}
                    value={value}
                    type="number"
                    onChange={updateTotal}
                  />
                );
              })}
          </label>
        </article>
        <article className="un-editable">
          <label>
            Total Points:
            <input type="text" readOnly value={total.points} />
          </label>
          <label>
            Total Percentage:
            <input type="text" readOnly value={total.percentage} />
          </label>
          <label>
            % To End Number:
            <input
              type="text"
              readOnly
              value={total.toEndNr + "/" + endNumber}
            />
            <input
              className="validField"
              type="number"
              value={endNumber}
              onChange={({ target }) => setEndNumber(Number(target.value))}
            />
          </label>
        </article>
      </form>
    </section>
  );
};

export default PointsCalculatePage;
