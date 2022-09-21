import React, { useState } from 'react';
import Input from './Input';
import Header from './Header';
import TasksList from './TasksList';
import '../Styles/_main.scss'

//import task interface 
import {Task} from './taskModel';


const HomePage: React.FC = () => {

//declare todo useState for single todo
const [task,setTask] = useState<string>('');
//useState for all todos 
const [tasks, setTasks] = useState<Task[]>([]);

//function that will handle tasks
const handleAddedTask = (e: React.FormEvent) => {
  e.preventDefault();
//conditional for tasks
if(task){
  setTasks([...tasks,{id:Date.now(),task,isComplete:false}])
  setTask('');
}
};
console.log(task)
console.log(tasks)
  return (
    <>
    <Header />
    <Input task={task} setTask={setTask} handleAddedTask={handleAddedTask}/>
    <TasksList tasks={tasks} setTasks={setTasks}/>
    </>
  )
}

export default HomePage