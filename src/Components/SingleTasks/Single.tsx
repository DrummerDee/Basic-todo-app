import React from 'react'
import { Task } from '../taskModel'

type Props = {
task : Task,
tasks : Task[],
setTask: React.Dispatch<React.SetStateAction<Task[]>>
}
const Single = ({task,tasks,setTask}: Props) => {
  return (
    <div>Single</div>
  )
}

export default Single