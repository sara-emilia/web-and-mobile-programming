import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {

  const course = 'Superadvanced web and mobile programming'
  const parts = [
    {
      name: 'Basics of React',
      exercises: 8
    },
    {
      name: 'Using props',
      exercises: 10
    },
    {
      name: 'Component states',
      exercises: 12
    }
  ]

  const Header = () => {
    return <h1>{course}</h1>
  }

  const Contents = () => {
    return (
      <div>
        <p>{parts[0].name} {parts[0].exercises}</p>
        <p>{parts[1].name} {parts[1].exercises}</p>
        <p>{parts[2].name} {parts[2].exercises}</p>
      </div>
    )
  }

  const Total = () => {
    return <p>Total {parts[0].exercises + parts[1].exercises + parts[2].exercises} exercises</p>
  }

  return (
    <div>
      <Header course={course} />
      <Contents parts={parts} />
      <Total parts={parts} />
    </div>
  )
  }

  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )