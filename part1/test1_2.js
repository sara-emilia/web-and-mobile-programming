import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return <h1>{props.course}</h1>
}

const Part = (props) => {
    return <p>{props.part} {props.exercises}</p>
}

const Contents = (props) => {
    return (
        <div>
            <Part part="Basics of ReaAAAct" exercises="8" />
            <Part part="Using props" exercises="10" />
            <Part part="Component states" exercises="12" />
        </div>

    )
}

const Total = (props) => {
    return <p>Total {props.exercises} exercises</p>
}

const App = () => {
    return (
        <div>
            <Header course="Superadvanced web and mobile programming" />
            <Contents />
            <Total exercises="30" exercises />
        </div>
    )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)