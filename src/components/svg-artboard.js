import React, { Component } from 'react';

class SVGArtboard extends Component {
  constructor(props) {
    super(props);

    this.sceneSize = 1000;
    this.sceneRadius = this.sceneSize / 2;
  }
  findCenter() {
    return {
      x: '50%',
      y: '50%'
    }
  }
  createCircle(center, radius, stroke, index) {
    return <circle cx={center.x} cy={center.y} r={radius} strokeWidth={stroke} key={"circle-" + index}></circle>
  }
  createCircles(circles) {
    let output = [];
    let stepSize = this.sceneRadius / circles;
    let center = this.findCenter();

    for (let i = 0; i < circles; i++) {
      let currentStep = stepSize * i;
      let currentStroke = currentStep / 300;
      output.push(
        this.createCircle(center, currentStep, currentStroke, i)
      );
    }

    return output;
  }


  render() {
    let circles = this.createCircles(this.props.numberOfCircles);
    let viewBoxSettings = `0 0 ${this.sceneSize} ${this.sceneSize}`;

    return <svg id="svg-box" width="100%" height="100%" x="0" y="0" viewBox={viewBoxSettings}>
      {circles}
    </svg>
  }
}

export default SVGArtboard;
