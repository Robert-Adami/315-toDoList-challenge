import { useState } from "react";

function ToDoItem({ element, onChecked, id }) {
  return (
    <>
      <li onClick={() => onChecked(id)}>{element}</li>
    </>
  );
}

export default ToDoItem;

//Workin !




