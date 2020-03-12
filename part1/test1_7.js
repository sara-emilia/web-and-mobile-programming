import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      counter1: 0,
      counter2: 0,
      counter3: 0,
      all: []
    }
  }

  increase1 = () => {
    this.setState({
      counter1: this.state.counter1 + 1,
      all: this.state.all.concat(1)
    })
  }

  increase2 = () => {
    this.setState({
      counter2: this.state.counter2 + 1,
      all: this.state.all.concat(0)
    })
  }

  increase3= () => {
    this.setState({
      counter3: this.state.counter3 + 1,
      all: this.state.all.concat(-1)
    })
  }

  keskiArvo(param1) {
    let ave = 0;
    ave = (this.state.counter1 + (this.state.counter2)*0 + (this.state.counter3)*(-1)) / param1.length;
    return ave;
  }

  positiivisia(param1) {
    let pos = 0;
    pos = this.state.counter1 / param1.length * 100
    return pos;
  }

  render () {
    return (
      <div>
        <div>{this.state.counter}</div>
        <div>
          <h3>anna palautetta</h3>
          <button onClick={this.increase1.bind(this)}>hyvä</button><button onClick={this.increase2.bind(this)}>neutraali</button><button onClick={this.increase3.bind(this)}>huono</button>
          <h3>statistiikka</h3>
          <p>hyvä {this.state.counter1}</p>
          <p>neutraali {this.state.counter2}</p>
          <p>huono {this.state.counter3}</p>
          <p>keskiarvo {this.keskiArvo(this.state.all)}</p>
          <p>positiivisia {this.positiivisia(this.state.all)} %</p>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)