import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return <h1>{props.course}</h1>
}

const Contents = (props) => {
    return <p>{props.part} {props.exercises}</p>
}

const Total = (props) => {
    return <p>Total {props.exercises} exercises</p>
}

const App = () => {
    return (
        <div>
            <Header course="Superadvanced web and mobile programming" />
            <Contents part="Basics of React" exercises="8" />
            <Contents part="Using props" exercises="10" />
            <Contents part="Component states" exercises="12" />
            <Total exercises="30" exercises />
        </div>
    )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)