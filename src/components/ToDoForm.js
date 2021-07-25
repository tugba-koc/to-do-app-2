import React from "react";

export default function ToDoForm({
  inputText,
  setInputText,
  toDoList,
  setToDoList,
}) {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setToDoList([
      ...toDoList,
      {
        text: inputText,
        id: Math.random() * 1000,
        active: false,
      },
    ]);
    setInputText("");
  };

  const changeHandler = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input
          onChange={changeHandler}
          name="inputText"
          value={inputText}
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
        />
        <button id="space">ekle</button>
      </form>
    </div>
  );
}
