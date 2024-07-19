import React from 'react'
import Greeting from './Greeting'
import Counter2 from './Counter2'
import TaskList from './TaskList'

const Exercises = () => {

    const tasks = [
        {id: 1, text: "A um"},
        {id: 2, text: "B dois"},
    ];

  return (
    <div>
    <div>Exercises</div>
        <Greeting name="joão"/>
        <Counter2 />
        <TaskList tasks={tasks} />
        </div>
  )
}

export default Exercises