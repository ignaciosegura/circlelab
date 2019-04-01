import React, { Component } from 'react';

class RenderOptions extends Component {
  constructor() {
    super();

    this.clickHandlerCSSTransform = this.clickHandlerCSSTransform.bind(this);
    this.clickHandlerCSS3DTransform = this.clickHandlerCSS3DTransform.bind(this);
    this.clickHandlerViewBox = this.clickHandlerViewBox.bind(this);
    this.clickReset = this.clickReset.bind(this);
    this.SVGScene = null;
    this.initialViewBox = '';
  }
  clickHandlerCSSTransform(e) {
    e.preventDefault();
    this.SVGScene.style.transform = 'scale(100)';
  }

  clickHandlerCSS3DTransform(e) {
    e.preventDefault();
    this.SVGScene.style.transform = 'perspective(1000px) translateZ(900px)';
  }

  clickHandlerViewBox(e) {
    e.preventDefault();
    let steps = 50 * 3;
    let currentStep = 0;
    let increment = 1000 / steps;

    let interval = setInterval(() => {
      let axis = 0;
      let negativeIncrement = 1000 - (currentStep * increment);

      let string = axis + ' ' + axis + ' ' + negativeIncrement + ' ' + negativeIncrement;
      this.SVGScene.setAttribute('viewBox', string);

      if (++currentStep === steps)
        clearInterval(interval);
    }, 20);
  }

  clickReset(e) {
    e.preventDefault();
    this.SVGScene.style.transform = '';
    this.SVGScene.setAttribute('viewBox', this.initialViewBox);
  }

  componentDidMount() {
    this.SVGScene = document.getElementById('svg-box');
    this.initialViewBox = this.SVGScene.getAttribute('viewBox');
  }

  render() {
    return <div id="render-options">
      <div onClick={this.clickHandlerCSSTransform}>Zoom by CSS transform</div>
      <div onClick={this.clickHandlerViewBox}>Zoom by viewBox</div>
      <div onClick={this.clickHandlerCSS3DTransform}>Zoom by 3D Transform</div>
      <div className="reset" onClick={this.clickReset}>Reset</div>
    </div>
  }
}

export default RenderOptions;
