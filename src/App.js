import React, { Component } from 'react';
import './App.scss';

import SVGArtboard from './components/svg-artboard.js';
import RenderOptions from './components/render-options.js'

class App extends Component {
  render() {
    return (
      <div className="app">
        <section id="svg-container">
          <SVGArtboard numberOfCircles="400"></SVGArtboard>
          <RenderOptions></RenderOptions>
          <a id="link-to-github" href="https://github.com/ignaciosegura/circlelab" target="_blank" rel="noopener noreferrer">GITHub repo</a>
        </section>
      </div>
    );
  }
}

export default App;
