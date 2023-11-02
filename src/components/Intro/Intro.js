import React, { useState } from "react";
import style from "./intro.module.scss";

const Intro = ({ taskList, setTaskList }) => {
  const [isReady, setIsReady] = useState(false);
  const [task, setTask] = useState("");

  // handling add button click
  const handleAdd = () => {
    setIsReady(true);
  };

  // handling the change
  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (task) => {
    const newTaskList = [...taskList, {name: task}];
    setTaskList(newTaskList);
    setTask("");
    setIsReady(false);
  };

  return (
    <div className={style.introDiv}>
      {/* text or edit conditional */}

      {isReady ? (
        <>
          <input
            type="text"
            name="task"
            value={task}
            placeholder="type task"
            onChange={handleChange}
          />
        </>
      ) : (
        <>
          <p>To Do App</p>
        </>
      )}

      {/* button input based on Condition */}
      {isReady ? (
        <>
          <button onClick={() => handleSubmit(task)}>submit Task</button>
        </>
      ) : (
        <>
          <button onClick={handleAdd}>Add Task</button>
        </>
      )}
    </div>
  );
};

export default Intro;
