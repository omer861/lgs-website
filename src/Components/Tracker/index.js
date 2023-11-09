import React, { useEffect, useState } from "react";
import "./index.css"

const VisitTracker = ({ visitCount }) => {
  const [count, setCount] = useState(0);
  const step = Math.ceil(visitCount / 200); // Divide the target by the number of steps (e.g., 100 steps).

  useEffect(() => {
    const countUp = () => {
      if (count < visitCount) {
        setCount((prevCount) => Math.min(prevCount + step, visitCount));
      }
    };

    const animationId = requestAnimationFrame(countUp);

    return () => cancelAnimationFrame(animationId);
  }, [count, visitCount, step]);

  return <div className="tracker-container">
    <h1 className="tracker-head">Total Visits: {count}</h1></div>;
};

export default VisitTracker;