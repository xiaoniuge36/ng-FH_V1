import React, { FC } from 'react';
import { Button } from 'antd';
import './App.css';

const App: FC = () => {
  return (
    <div className='App' >
      <Button type="primary">Button</Button>
      <Button type="primary">Primary Button</Button>
      <Button>Default Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <br />
      <Button type="text">Text Button</Button>
      <Button type="link">Link Button</Button>
    </div>
  );
}

export default App;
