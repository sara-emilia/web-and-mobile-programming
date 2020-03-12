import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {

  const course = {
    name: 'Superadvanced web and mobile programming',
    parts: [
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
}
  return (
    <div>
      <h1>{course.name}</h1>
      <p>{course.parts[0].name} {course.parts[0].exercises}</p>
      <p>{course.parts[1].name} {course.parts[1].exercises}</p>
      <p>{course.parts[2].name} {course.parts[2].exercises}</p>
      <p>Total {course.parts[0].exercises + course.parts[1].exercises+ course.parts[2].exercises} exercises</p>
    </div>
  );
}

  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )