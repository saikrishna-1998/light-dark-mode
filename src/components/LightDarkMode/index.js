// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    backgroundLight: true,
  }

  onClickLightMode = () => {
    this.setState(prevState => ({backgroundLight: !prevState.backgroundLight}))
  }

  getButtonText = () => {
    const {backgroundLight} = this.state
    return backgroundLight ? 'Light Mode' : 'Dark Mode'
  }

  render() {
    const {backgroundLight} = this.state
    const buttonText = this.getButtonText()
    const modeClassName = backgroundLight ? 'dark-mode' : 'light-mode'

    return (
      <div className="mode-container">
        <div className={`container ${modeClassName}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <button
            type="button"
            className="change-button"
            onClick={this.onClickLightMode}
          >
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
