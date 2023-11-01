import React from 'react';
import style from "./item.module.scss";

const Item = ({taskName}) => {
  return (
   <div className={style.itemDiv}>
    {taskName}
    {/* <button onClick={handleEdit(index)}></button>
    <button onClick={handleDelete(index)}></button> */}
    </div>
  )
}

export default Item;