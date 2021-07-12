import {Components} from 'react'

import './index.css'

class EvenOddApp extends Components {
  state = {text: 'Even', num: 0}

  increment = () => {
    const rand = Math.random() * 100
    this.setState(prevState => ({
      num: this.state.num + rand,
    }))
  }

  render() {
    const {text, num} = this.state
    if (num % 2 === 0) {
      this.setState(prevState => ({text: 'Even'}))
    } else {
      this.setState(prevState => ({text: 'Odd'}))
    }
    ;<div className="app-container">
      <div className="card-container">
        <h1 className="heading">Count {num}</h1>
        <p className="paragraph">Count is {text}</p>
        <button type="button" className="button" onClick={this.increment}>
          Increment
        </button>
        <p className="para">*Increase By Random Number Between 0 to 100</p>
      </div>
    </div>
  }
}
export default EvenOddApp
