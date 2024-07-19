import { useParams } from "react-router-dom"

const TaskDetails = () => {

    const { taskId } = useParams()

    return (
        <div>
            <h2>detalhes da tarefa</h2>
            <p>ver tarefa: {taskId}</p>
        </div>
    )
}

export default TaskDetails