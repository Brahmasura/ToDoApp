import Intro from "./components/Intro/Intro";
import "./App.css";
import Item from "./components/Item/Item";
import { useState } from "react";

function App() {
  const [taskList, setTaskList] = useState([]);


  return (
    <div className="App">
      <h1 style={{ marginBottom: "2rem" }}>hi this is the todoapp</h1>
      <Intro taskList={taskList} setTaskList={setTaskList} />
      <div className="itemsDiv">
        <Item taskList={taskList} setTaskList={setTaskList} />
      </div>
    </div>
  );
}

export default App;
