import { useState } from 'react';
import Task from './Task';

export default function TaskList({tasks, onChangeTask, onDeleteTask}) {
  return (
    <ul>
      
       <Task />
     
    </ul>
  );
}
