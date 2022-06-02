import React, { useEffect, useState } from "react";
import "./pointsCalculate.scss";

const PointsCalculatePage = () => {
  const [id, setId] = useState(2);
  const [keyLength, setKeyLength] = useState(0);
  const [total, setTotal] = useState({});
  const [endNumber, setEndNumber] = useState(20);
  const [pTotal, setPTotal] = useState(null);
  const [tTotal, setTTotal] = useState(null);
  const [tPercentage, setTPercentage] = useState(null);
  const [points, setPoints] = useState([
    { 1: 0 },
    { 1: 0 },
    {
      1: {
        weight: 100,
        percentage: 0,
      },
    },
  ]);

  useEffect(() => {
    const P = Object.values(points[0]);
    const T = Object.values(points[1]).filter((point) => point !== 0);

    if (P.length === T.length && P.length > keyLength) {
      setKeyLength(P.length);

      const newPoints = { ...points };
      newPoints[0][id] = 0;
      newPoints[1][id] = 0;
      newPoints[2][id] = {
        weight: 100,
        percentage: 0,
      };
      setPoints(newPoints);
      setId(id + 1);
    }

    const allPercentagesAndWeights = Object.values(points[2]).filter((p, i) => {
      if (i === Object.values(points[0]).length - 1) return false;
      return true;
    });

    const totalPercentages = allPercentagesAndWeights.reduce(
      (acc, cur) => cur.weight * cur.percentage + acc,
      0
    );

    const totalWeights = allPercentagesAndWeights.reduce(
      (acc, cur) => cur.weight + acc,
      0
    );

    const totalWeightedPercentages = totalPercentages / totalWeights;

    let PTotal =
      pTotal && tTotal
        ? pTotal
        : Object.values(points[0]).reduce((acc, value) => value + acc);
    let TTotal =
      tTotal && pTotal
        ? tTotal
        : Object.values(points[1]).reduce((acc, value) => value + acc);

    if (tTotal && pTotal) {
      const forcePercentage = (pTotal / tTotal) * 100 || 0;
      setTPercentage(Math.round(forcePercentage * 100) / 100);
    } else {
      setTPercentage(null);
    }

    const totalPoints = `${PTotal}/${TTotal}`;
    const percentage = tPercentage ?? totalWeightedPercentages;
    const toEndNr = (percentage / 100) * endNumber;

    setTotal({
      points: totalPoints,
      percentage: Math.round(percentage * 100) / 100,
      toEndNr: Math.round(toEndNr * 100) / 100,
    });
  }, [points, id, keyLength, endNumber, pTotal, tTotal, tPercentage]);

  const updateLocalPercentage = (newPoints, id) => {
    const wP = newPoints[0][id];
    const wT = newPoints[1][id];

    const percentage = (wP / wT) * 100 || 0;
    newPoints[2][id].percentage = Math.round(percentage * 100) / 100;
  };

  const updatePoints = ({ target }) => {
    const newPoints = { ...points };
    const pV = points[1][target.id];
    const value = Number.parseFloat(target.value) || 0;
    newPoints[0][target.id] = value;
    newPoints[1][target.id] = value > pV ? value : pV;
    updateLocalPercentage(newPoints, target.id);
    setPoints(newPoints);
    target.value = value;
  };

  const updateTotal = ({ target }) => {
    const newPoints = { ...points };
    const pV = points[0][target.id];
    const value = Number.parseFloat(target.value) || 0;
    newPoints[1][target.id] = value;
    updateLocalPercentage(newPoints, target.id);
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

  const updateWeight = ({ target }) => {
    const newPoints = { ...points };
    let value = Number.parseFloat(target.value) || 100;
    value = value > 100 ? 100 : value;
    value = value < 0 ? 0 : value;
    if (typeof newPoints[2][target.id] !== "object")
      newPoints[2][target.id] = {};
    newPoints[2][target.id].weight = value;

    updateLocalPercentage(newPoints, target.id);
    setPoints(newPoints);
    target.value = value;
  };

  return (
    <section>
      <form action="#">
        <article className="group">
          <div className="label">
            <label>Your Points:</label>
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
          </div>
          <div className="label">
            <label>Points Possible:</label>
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
          </div>
          <div className="label">
            <label>Weight</label>
            {points[2] &&
              Object.entries(points[2]).map(([key, value], i) => {
                return (
                  <div className="group spread" key={"W" + i + key}>
                    <span>{value.percentage}</span>
                    <input
                      id={key}
                      value={value.weight}
                      type="number"
                      className="validField small"
                      onChange={updateWeight}
                    />
                  </div>
                );
              })}
          </div>
        </article>
        <article className="un-editable">
          <label>
            Total Points:
            <input type="text" readOnly value={total.points || ""} />
            <div className="group half-width">
              <input
                className="validField"
                type="number"
                value={pTotal || ""}
                onChange={({ target }) =>
                  setPTotal(Number.parseFloat(target.value) || null)
                }
              />
              <input
                className="validField"
                type="number"
                value={tTotal || ""}
                onChange={({ target }) =>
                  setTTotal(Number.parseFloat(target.value) || null)
                }
              />
            </div>
          </label>
          <label>
            Total Percentage:
            <input type="text" readOnly value={total.percentage || ""} />
            <input
              className="validField"
              type="number"
              value={tPercentage || ""}
              onChange={({ target }) =>
                setTPercentage(Number.parseFloat(target.value) || null)
              }
            />
          </label>
          <label>
            % To End Total:
            <input
              type="text"
              readOnly
              value={total.toEndNr + "/" + endNumber}
            />
            <input
              className="validField"
              type="number"
              value={endNumber}
              onChange={({ target }) =>
                setEndNumber(Number.parseFloat(target.value) || null)
              }
            />
          </label>
        </article>
      </form>
    </section>
  );
};

export default PointsCalculatePage;
