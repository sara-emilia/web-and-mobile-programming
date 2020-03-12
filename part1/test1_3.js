import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {

    const course = 'Superadvanced web and mobile programming'
    const part1 = {
    name: 'Basics of React',
    exercises: 8
  }
  const part2 = {
    name: 'Using props',
    exercises: 10
  }
  const part3 = {
    name: 'Component states',
    exercises: 12
  }

return (
  <div>
        <h1>{course}</h1>
        <p>{part1.name} {part1.exercises}</p>
        <p>{part2.name} {part2.exercises}</p>
        <p>{part3.name} {part3.exercises}</p>
        <p>Total {part1.exercises + part2.exercises + part3.exercises} exersises</p>
    </div>
)
}
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )