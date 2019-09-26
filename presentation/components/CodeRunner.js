import React from 'react'
import { CodePane } from 'spectacle'

const cachedOutput = {}

class CodeRunner extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
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
          const renderedArg = (typeof arg === 'string') ? arg : JSON.stringify(arg)
          return newOutput + renderedArg
        }, state.output) + '\n'
      }
    })
  }

  handlePlayKey = (event) => {
    if (event.key === 'p') {
      this.runCode()
    }
  }

  runCode = () => {
    const { name } = this.props
    if (cachedOutput[name]) {
      this.setState({ output: cachedOutput[name] })
      return
    }

    this.oldConsoleLog = console.log
    console.log = this.addOutput
    this.props.importer()
      .then(() => {
        cachedOutput[this.props.name] = this.state.output
        console.log = this.oldConsoleLog
      })
  }

  render() {
    return (
      <div>
        <button onClick={this.runCode}>▶</button>
        {this.state.output && (
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
