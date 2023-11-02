import React, { useState } from "react";
import style from "./item.module.scss";
import ToDoItem from "../ToDoItem/ToDoItem";

const Item = ({ taskList, setTaskList }) => {
 


  return (
    <>
      {taskList.map((element, index) => (
       <ToDoItem name={element.name} index={index} taskList={taskList} setTaskList={setTaskList}/>
      ))}
    </>
  );
};

export default Item;
