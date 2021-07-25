import "./App.css";
import React, { useState } from "react";
import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm";
import Filters from "./components/Filters";

function App() {
  const [inputText, setInputText] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const [checked, setChecked] = useState(false);
  const [filteredList, setFilteredlist] = useState([]);
  

  return (
    <div className="App">
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <ToDoForm
            toDoList={toDoList}
            setToDoList={setToDoList}
            inputText={inputText}
            setInputText={setInputText}
          />
          <ToDoList
            filteredList={filteredList}
            setFilteredlist={setFilteredlist}
            setChecked={setChecked}
            checked={checked}
            toDoList={toDoList}
            setToDoList={setToDoList}
          />
        </header>

        <Filters
          filteredList={filteredList}
          setFilteredlist={setFilteredlist}
          checked={checked}
          setChecked={setChecked}
          toDoList={toDoList}
          setToDoList={setToDoList}
          inputText={inputText}
          setInputText={setInputText}
        />
      </section>


    </div>
  );
}

export default App;
