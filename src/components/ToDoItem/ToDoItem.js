import React, { useState } from 'react';
import style from "./toDoItem.module.scss";

const ToDoItem = ({name, index, taskList, setTaskList}) => {

    const [itemEdit, setItemEdit] = useState(false);
    const [editedText, setEditedText] = useState("");
    // const [editIndex, setEditIndex] = useState(null);
  
    const handleEdit = (index) => {
      setItemEdit(true);
      // setEditIndex(index);
      setEditedText(taskList[index].name);
    };
  
    const handleItemChange = (e) => {
      setEditedText(e.target.value);
    };
  
    const handleUpdate = (index) => {
      // add the name to the array
      const newTaskList = [...taskList];
      newTaskList[index].name = editedText;
      setTaskList(newTaskList);
      // editing mode off
      setItemEdit(false);
    };
  
  
    const handleDelete = (index) => {
      const newTaskList = [...taskList];
      newTaskList.splice(index, 1);
      setTaskList(newTaskList);
    }

  return (
    <>
         <div key={index} className={style.itemDiv}>
          {itemEdit ? (
            <input
              type="text"
              name="name"
              value={editedText}
              onChange={handleItemChange}
            />
          ) : (
            <p>{name}</p>
          )}

          <div className={style.buttonDiv}>
            {itemEdit ? (
              <button onClick={() => handleUpdate(index)}>update</button>
            ) : (
              <button onClick={() => handleEdit(index)}>edit</button>
            )}

            <button onClick={() => handleDelete(index)}>delete</button>
          </div>
        </div>
    </>
  )
}

export default ToDoItem;