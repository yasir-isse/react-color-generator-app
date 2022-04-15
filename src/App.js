import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [colorsList, setColorsList] = useState(new Values("#00bfff").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setColorsList(colors);
    } catch (error) {
      setError(true);
    }
  };
  return (
    <main>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            className={error ? "error" : null}
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder={"orange"}
          />
          <button className="btn" type="submit">
            generate
          </button>
        </form>
      </section>

      <section className="colors">
        {colorsList.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              hex={color.hex}
              rdb={color.rgb}
              index={index}
            />
          );
        })}
      </section>
    </main>
  );
}

export default App;
