import React from 'react';
import inputStyles from './input.module.css';


interface Props {
    task:string,
    setTask:React.Dispatch<React.SetStateAction<string>>;
    handleAddedTask: (e:React.FormEvent) => void;
}
const Input = ({task,setTask,handleAddedTask}: Props) => {
  return (
    <>
    <form onSubmit={handleAddedTask}>
    <input type='input' placeholder='Enter todo item ' 
    value={task}
    onChange={(e) => setTask(e.target.value)} />
    <button type='submit'> Enter </button>
    </form>
    </>
  )
}

export default Input