//import Avatar from "./components/Avatar";
//import Profile from "./components/Profile";

import { useState } from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import {initialTasks}  from './data/task.js';

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);

  function handleAddTask(text) {

  }

  function handleChangeTask(task) {}

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask />
      <TaskList />
    </>
  );

}

let nextId = 3;



