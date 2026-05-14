//import "./App.css";
import { useState } from "react";
import "./Card";
import Card from "./Card";
function App() {
  const shoot = (a) => alert(a);
  const cars = ["ford", "nexon", "tesla"];
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [car, setCar] = useState("Volvo");
  function handleSubmit(e) {
    e.preventDefault();
    alert(name);
  }
  function handleChange(e) {
    setName(e.target.value);
  }

  function handleTextChange(e) {
    setText(e.target.value);
  }

  function handleCarChange(e) {
    setCar(e.target.value);
  }

  return (
    <>
      <h1>Hello World !</h1>
      <Card>
        <h1>This is from app component</h1>
        <p>This is from app component</p>
      </Card>
      <button onClick={() => shoot("Great shot !")}>Take a Shot !</button>
      <ol>
        {cars.map((car, i) => (
          <li key={i}>{car}</li>
        ))}
      </ol>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Enter your name : </label>
        <input type="text" id="name" value={name} onChange={handleChange} />
        <input type="submit" />
        <label>
          Write here :
          <textarea value={text} onChange={handleTextChange} />
        </label>
      </form>
      <p>current value of text : {text}</p>
      <select value={car} onChange={handleCarChange}>
        <option value="Volvo">Volvo</option>
        <option value="Ford">Ford</option>
        <option value="Fieat">Fieat</option>
      </select>
    </>
  );
}

export default App;
