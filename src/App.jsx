import { useState } from "react";
import SingleCounter from "./components/SingleCounter";
import useField from "./components/useField";
import "./App.css";
import useLocalStorage from "./components/useLocalStorage";

const App = () => {
  // part-1
  const [counter, setCounter] = useState(0);

  // part-2
  const nameInput = useField("text");
  const bornInput = useField("date");
  const heightInput = useField("number");

  // part-3
  const [name, setName] = useLocalStorage("name", "");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted values:", {
      name: nameInput.value,
      born: bornInput.value,
      height: heightInput.value,
    });

    localStorage.setItem("name", nameInput.value);
    localStorage.setItem("born", bornInput.value);
    localStorage.setItem("height", heightInput.value);
  };

  return (
    <div className="app-container">
      <div>{counter}</div>
      <div>
        <button onClick={() => setCounter(counter + 1)}>Plus</button>
        <button onClick={() => setCounter(counter - 1)}>Minus</button>
        <button onClick={() => setCounter(0)}>Reset</button>
        <SingleCounter />
        <SingleCounter />
        <SingleCounter />
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            Name: <input {...nameInput} />
          </div>
          <br />
          <div>
            Birthdate: <input {...bornInput} />
          </div>
          <br />
          <div>
            Height: <input {...heightInput} />
          </div>
          <button type="submit">Submit</button>
        </form>
        <div>
          {nameInput.value} {bornInput.value} {heightInput.value}
        </div>
      </div>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>Your name is stored in localStorage: {name}</p>
      </div>
    </div>
  );
};

export default App;
