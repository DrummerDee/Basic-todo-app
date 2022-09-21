import React from 'react';
import '../Styles/_main.scss'


interface Props {
    task:string,
    setTask:React.Dispatch<React.SetStateAction<string>>;
    handleAddedTask: (e:React.FormEvent) => void;
}
const Input = ({task,setTask,handleAddedTask}: Props) => {
  return (
    <>
    <form className='input' onSubmit={handleAddedTask}>
    <input type='input' placeholder='Enter todo item' className='input__field' 
    value={task}
    onChange={(e) => setTask(e.target.value)} />
    <button type='submit' className='submit'> Enter </button>
    </form>
    </>
  )
}

export default Input