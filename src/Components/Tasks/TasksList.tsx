import React from 'react';
import Single from '../SingleTasks/Single';
import { Task } from '../taskModel';
import tasksStyles from './tasks.module.css';

//declare type of tasks and setTasks with interface
interface Props {
    tasks: Task[],
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}
const Tasks = ({tasks,setTasks}: Props) => {
  return (
    <section>
        {tasks.map(task => (
            <Single 
            task={task} 
            key={task.id}
            tasks={tasks}
            setTasks={setTasks}/>
        ))}
        </section>
  )
}

export default Tasks