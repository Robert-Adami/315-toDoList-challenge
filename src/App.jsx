import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState("");
  const [toDoList, setToDoList] = useState([]);

  function handleInputChange(e) {
    setUserInput(e.target.value);
  }

  function handleToDoList() {
    setToDoList((prev) => [...prev, userInput]);
    setUserInput("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={userInput} onChange={handleInputChange} />
        <button onClick={handleToDoList}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {toDoList.map((elem, index) => (
            <li key={index}>{elem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

//CHALLENGE: Make this app work by applying what you've learnt.
//1. When new text is written into the input, its state should be saved.
//2. When the add button is pressed, the current data in the input should be
//added to an array.
//3. The <ul> should display all the array items as <li>s

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
