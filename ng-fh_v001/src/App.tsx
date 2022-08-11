import React, { FC } from 'react';
import { Button } from 'antd';
import './App.less';
import Ahouse from './ahouse';

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
      <div className='test'></div>
      <Ahouse/>
    </div>
  );
}

export default App;
