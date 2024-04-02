import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {value: 0}

  onChangeBtn = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    this.setState({value: randomNumber})
  }

  render() {
    const {value} = this.state
    return (
      <div className="random-bg-container">
        <div className="random-container">
          <h1 className="heading">Random Number</h1>
          <p className="random-para">
            Generate a random number in the range 0 to 100
          </p>
          <button
            type="button"
            className="generate-btn"
            onClick={this.onChangeBtn}
          >
            Generate
          </button>
          <p className="count-value">{value}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
