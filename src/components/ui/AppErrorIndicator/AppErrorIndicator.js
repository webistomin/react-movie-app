import React from 'react';
import './AppErrorIndicator.sass';

export default class AppErrorIndicator extends React.Component {
  leftEye = React.createRef();
  rightEye = React.createRef();

  onMouseMoveHandler = (event) => {
    const rect = this.leftEye.current.getBoundingClientRect();
    const coords = {
      x: rect.left + document.body.scrollLeft + rect.width / 2,
      y: rect.top + document.body.scrollTop + rect.height / 2,
    };

    const rad = Math.atan2(event.pageX - coords.x, event.pageY - coords.y);
    const rot = rad * (180 / Math.PI) * -1 + 180;
    this.leftEye.current.style.transform = `rotate(${rot}deg)`;
    this.rightEye.current.style.transform = `rotate(${rot}deg)`;
  };

  componentDidMount() {
    document.title = 'Something went wrong. 😠';
  }

  render() {
    return (
      <div className='error-indicator' onMouseMove={this.onMouseMoveHandler}>
        <h1 className='error-indicator__code'>
          <strong className='error-indicator__number'>5</strong>
          <div className='error-indicator__eye' ref={this.leftEye} />
          <div className='error-indicator__eye' ref={this.rightEye} />
        </h1>
        <h2 className='error-indicator__title'>Whoops!</h2>
        <h3 className='error-indicator__subtitle'>Something went wrong. Check console</h3>
      </div>
    );
  }
}
