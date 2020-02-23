import React, { FunctionComponent, useEffect, useRef } from 'react';
import Grain from '@/utils/noise';
import { cn } from '@bem-react/classname';

import './App404.sass';

const b = cn('Error404');

const App404: FunctionComponent = () => {
  const canvasNoise = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const el = canvasNoise.current;
    const noise = new Grain(el);

    return () => {
      noise.remove();
    };
  }, []);

  return (
    <section className={b()}>
      <h1 className={b('Title')}>404 Not Found</h1>
      <canvas ref={canvasNoise} className={b('Noise')} id='js-canvas-noise' />
    </section>
  );
};

export default App404;
