import React from 'react';
import Grain from '@/utils/noise';
import './App404.sass';

export default class App404 extends React.Component {
  canvasNoise = React.createRef();

  componentDidMount() {
    const el = this.canvasNoise.current;
    new Grain(el);
  }

  render() {
    return (
      <section className='error-404'>
        <h1 className='error-404__title'>404 Not Found</h1>
        <canvas ref={this.canvasNoise} className='error-404__noise' id='js-canvas-noise' />
      </section>
    );
  }
}
