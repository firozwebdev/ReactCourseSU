

import { useState } from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import {initialTasks}  from './data/task.js';

export default function App() {
  const [tasks,setTasks] = useState(initialTasks)

  const getNextId = (data) => {
    const maxId = data.reduce((prev,current) => prev && prev.id > current.id ? prev.id : current.id)
    return maxId + 1 ;
  }
  //handlers
   const handleAddTask = (text) => {
     setTasks([
       ...tasks,
       {
        id: getNextId(tasks), 
        text: text, 
        done: false,
       }
     ])
   };
   const handleChangeTask = (task) => {
    const nextTasks = tasks.map(t =>{

    })
     setTasks([])
   }

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onClick={handleAddTask}/>
      <TaskList tasks={tasks}/>
    </>
  );

}

let nextId = 3;



