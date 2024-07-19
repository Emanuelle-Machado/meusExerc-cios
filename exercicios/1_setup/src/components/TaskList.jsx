import React from 'react'

const TaskList = ({tasks}) => {

    if(tasks.length === 0){
        return <div>Não há tarefas a mostrar</div>
    }

    return (
    <div>    
       <ul>

       
        {tasks.map((task) => (
            <li key={task.id}> {task.text} </li>
        ))}
        </ul>
    </div>
    
  )
}

export default TaskList