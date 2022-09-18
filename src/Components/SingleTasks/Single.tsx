import React , {useState} from 'react';
import { Task } from '../taskModel';
import {FaEdit, FaTrashAlt} from 'react-icons/fa';
import {FcCheckmark} from 'react-icons/fc';
import Tasks from '../Tasks/TasksList';

type Props = {
task : Task,
tasks : Task[],
setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}
const Single = ({task,tasks,setTasks}: Props) => {
{/* edit functionality */}
const [edit, setEdit] = useState<boolean>(false);
{/* edit to tasks text */}
const [editTask, setEditTask] = useState<string>(task.task)
{/*done function */}
  const handleComplete = (id:number) => {
    setTasks(
      tasks.map((task) => 
      task.id === id ? {...task,isComplete:!task.isComplete} : task
      )
      )
    console.log('Task completed');
  }
  {/*delete function */}
  const handleDeletion = (id:number) => {
    setTasks(
      tasks.filter((task) => 
      task.id !== id 
      )
    )
    console.log('Task deleted');
  }

  {/*handles the post edit change, which is why it's a form instead of a div or section */}
  const handleEdit = (e:React.FormEvent, id:number) => {
      e.preventDefault();
      setTasks(tasks.map((task) => 
        task.id == id ? {...task, task : editTask} : task
      )
    );
    setEdit(false)
  };
  return (
    <form onSubmit={(e) => handleEdit(e,task.id )}>
      {/*conditional rendering for edit mode, need input to display when edit button is clicked and if the task is not completed */}
        {
          edit ? (
            <input value={editTask} onChange ={(e) => setEditTask(e.target.value)} className='updateText'/>
          ): (
            task.isComplete ? (
              <s>{task.task}</s>
            ): (
              <span>{task.task}</span>
            )
          )
}
      {/*displays the tasks. If task is done strike through, if not render the undone task */}
      {/* {task.isComplete ? (
        <s>{task.task}</s>
      ): (
        <span>{task.task}</span>
      )
      } */}
      <div>
        {/*will display the crud part of the todo */}
        <span className="icons" onClick={() => !edit && !task.isComplete ? setEdit(!edit) : !edit }><FaEdit/></span>
        <span className="icons" onClick={() => handleDeletion(task.id)}><FaTrashAlt/></span>
        <span className="icons" onClick={() => handleComplete(task.id)}><FcCheckmark/></span>
        </div>
    </form>
  )
}

export default Single