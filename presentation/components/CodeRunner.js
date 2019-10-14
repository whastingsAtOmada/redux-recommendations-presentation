import React from 'react'
import { CodePane } from 'spectacle'

const cachedOutput = {}

class CodeRunner extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displayOutput: false,
      output: '',
    }
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handlePlayKey)
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handlePlayKey)
  }

  addOutput = (...args) => {
    this.setState((state) => {
      return {
        output: args.reduce((newOutput, arg) => {
          const renderedArg = (typeof arg === 'string') ? arg : JSON.stringify(arg, null, 2)
          return newOutput + renderedArg
        }, state.output) + '\n'
      }
    })
  }

  handlePlayKey = (event) => {
    if (event.key === 'p') {
      if (this.state.displayOutput) {
        this.hideOutput()
      } else {
        this.runCode()
      }
    }
  }

  hideOutput = () => {
    document.body.classList.remove('code-runner-open')
    this.setState({ displayOutput: false })
  }

  showOutput = () => {
    document.body.classList.add('code-runner-open')
    this.setState({ displayOutput: true })
  }

  runCode = () => {
    const { name } = this.props
    if (cachedOutput[name]) {
      this.setState({ output: cachedOutput[name] })
      this.showOutput()
      return
    }

    this.oldConsoleLog = console.log
    console.log = this.addOutput
    this.props.importer()
      .then(() => {
        cachedOutput[this.props.name] = this.state.output
        console.log = this.oldConsoleLog
        this.showOutput()
      })
  }

  renderButton() {
    if (this.state.displayOutput) {
      return (
        <button onClick={this.hideOutput} className="code-runner-button code-runner-button--stop">■</button>
      )
    }

    return (
      <button onClick={this.runCode} className="code-runner-button">▶</button>
    )
  }

  render() {
    return (
      <div className="code-runner">
        {this.renderButton()}
        {this.state.displayOutput && (
          <CodePane
            lang="js"
            source={this.state.output}
            overflow="overflow"
            theme="light"
          />
        )}
      </div>
    )
  }
}

export default CodeRunner
