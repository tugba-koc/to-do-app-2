import React from "react";

export default function ToDoList({
  toDoList,
  setToDoList,
  checked,
  setChecked,
  filteredList,
}) {
  const removeToDo = (id) => {
    setToDoList(toDoList.filter((el) => el.id !== id));
  };

  const checkHandler = (id) => {
    setToDoList(
      toDoList.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            active: !item.active,
          };
        }
        return item;
      })
    );
  };

  return (
    <div>
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlfor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {filteredList.map((todo, index) => (
            <li key={index} id={todo.id}>
              <div className="view">
                <input
                  className="toggle "
                  type="checkbox"
                  checked={todo.active ? !checked : checked}
                  onChange={() => checkHandler(todo.id)}
                />
                <label className={todo.active ? `completed` : ""}>
                  {todo.text}
                </label>
                <button
                  onClick={() => removeToDo(todo.id)}
                  className="destroy"
                ></button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
