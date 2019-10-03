import React from 'react'
import { CodePane as SpectacleCodePane } from 'spectacle'

const CodePane = (props) => {
  return (
    <SpectacleCodePane
      className="custom-code-pane"
      lang="javascript"
      overflow="overflow"
      theme="external"
      {...props}
    />
  )
}

export default CodePane