import React, { useState } from "react";
import "./index.scss";
export default function Demo() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>
        <span
          className="reduce"
          onClick={() => {
            setCount(count - 1);
          }}
        >
          -
        </span>
        <span>{count}</span>
        <span
          className="add"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </span>
      </p>
    </div>
  );
}
