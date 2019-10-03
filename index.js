import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import Redbox from "redbox-react";
import { Deck, Slide } from 'spectacle';
import components from './presentation/components';
import slides, { transitions } from "./presentation/index.mdx";
import theme from './presentation/theme';
import './node_modules/prismjs/themes/prism-tomorrow.css'
import './presentation/index.css'

require("normalize.css");

const CustomErrorReporter = ({ error }) => <Redbox error={error} />;

CustomErrorReporter.propTypes = {
  error: PropTypes.instanceOf(Error).isRequired
};

ReactDOM.render(
  <AppContainer errorReporter={CustomErrorReporter}>
    <Deck transition={[]} transitionDuration={0} theme={theme} contentWidth={1200} contentHeight={1200}>
      {slides.map((S, i) => {
        let transition = transitions[i] || null;
        return <S transition={transition} key={`slide-${i}`} />;
      })}
    </Deck>
  </AppContainer>,
  document.getElementById("root"),
);

if (module.hot) {
  module.hot.accept(() => {
    const newTheme = require("./presentation/theme").default;
    const newSlides = require("./presentation/index.mdx").default;
    ReactDOM.render(
      <AppContainer errorReporter={CustomErrorReporter}>
        <Deck transition={[]} transitionDuration={0} theme={theme} contentWidth={1200} contentHeight={1200}>
          {newSlides.map((S, i) => {
            let transition = transitions[i] || null;
            return <S transition={transition} key={`slide-${i}`} />;
          })}
        </Deck>
      </AppContainer>,
      document.getElementById("root"),
    );
  });
}
