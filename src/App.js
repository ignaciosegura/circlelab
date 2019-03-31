import React, { Component } from 'react';
import './App.scss';

import SVGArtboard from './components/svg-artboard.js';
import RenderOptions from './components/render-options.js'

class App extends Component {
  render() {
    return (
      <div className="app">
        <section id="svg-container">
          <SVGArtboard numberOfCircles="100"></SVGArtboard>
          <RenderOptions></RenderOptions>
        </section>
      </div>
    );
  }
}

export default App;
