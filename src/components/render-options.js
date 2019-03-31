import React, { Component } from 'react';

class RenderOptions extends Component {
  constructor() {
    super();

    this.clickedCSS = false;
    this.clickedViewbox = false;
    this.clickHandlerCSSTransform = this.clickHandlerCSSTransform.bind(this);
    this.clickHandlerViewBox = this.clickHandlerViewBox.bind(this);
  }
  clickHandlerCSSTransform(e) {
    e.preventDefault();
    if (this.clickedCSS) return;

    this.SVGScene.style.transform = 'scale(100)';
    this.clickedCSS = true;
  }

  clickHandlerViewBox(e) {
    let steps = 50 * 5;
    let currentStep = 0;
    let increment = 1000 / steps;

    let interval = setInterval(() => {
      let axis = currentStep * (increment / 4);
      let negativeIncrement = 1000 - (currentStep * increment);

      let string = axis + ' ' + axis + ' ' + negativeIncrement + ' ' + negativeIncrement;
      this.SVGScene.setAttribute('viewBox', string);

      if (++currentStep === steps)
        clearInterval(interval);
    }, 20);

  }

  componentDidMount() {
    this.SVGScene = document.getElementById('svg-box');
  }

  render() {
    return <div id="render-options">
      <div onClick={this.clickHandlerCSSTransform}>Zoom by CSS transform</div>
      <div onClick={this.clickHandlerViewBox}>Zoom by viewBox</div>
    </div>
  }
}

export default RenderOptions;
