/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";

export default function Filters({ toDoList, setFilteredlist, filteredList }) {
  useEffect(() => {
    setFilteredlist(toDoList);
  }, [toDoList]);

  const all = (e) => {
    e.preventDefault();
    setFilteredlist(toDoList);
  };

  const activeFilter = (e) => {
    e.preventDefault();
    setFilteredlist(toDoList.filter((el) => el.active === false));
  };

  const clearFilter = (e) => {
    e.preventDefault();
    setFilteredlist([]);
  };

  const completedFilter = (e) => {
    e.preventDefault();
    setFilteredlist(toDoList.filter((el) => el.active === true));
  };

  return (
    <div>
      <footer className="footer">
        <span className="todo-count">
          <strong>{filteredList.length} </strong>
          items left
        </span>

        <ul className="filters">
          <li>
            <a onClick={all} href="/" className="selected">
              All
            </a>
          </li>
          <li>
            <a onClick={activeFilter} href="/">
              Active
            </a>
          </li>
          <li>
            <a onClick={completedFilter} href="/">
              Completed
            </a>
          </li>
        </ul>

        <button onClick={clearFilter} className="clear-completed">
          Clear completed
        </button>
      </footer>
    </div>
  );
}
