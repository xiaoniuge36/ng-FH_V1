import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { RadioChangeEvent } from 'antd';
import type { DotPosition } from 'antd/es/carousel';
import { Carousel,Radio } from 'antd';
import React, { useState } from 'react';
import './index.less';
const items = [
  {
    label: '首页',
    key: 'main',
  },
  {
    label: '关于我们',
    key: 'about',
  },
  {
    label: '服务项目',
    key: 'service',
  },
  {
    label: '展示案例',
    key: 'display',
  },
  {
    label: '联系我们',
    key: 'tel',
  },
];

// const Ahouse = () => {
//   const [current, setCurrent] = useState('main');//当前选中的菜单项

//   const onClick = (e: any) => { //点击菜单项触发的事件
//     console.log('click ', e); //打印出菜单项的key值
//     setCurrent(e.key); //更新当前选中的菜单项
//   };

//   return <div className='content'>
//     <div className='top'>
//       <Menu className='top_menu' onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
//     </div>

//   </div>;
// };
const Ahouse = () => {
  const [dotPosition, setDotPosition] = useState<DotPosition>('left');

  const handlePositionChange = ({ target: { value } }: RadioChangeEvent) => {
    setDotPosition(value);
  };
  return <div className='content'>
    <div className='top'>
      <ul className="top_menu">
        {
          items.map((item, index) => {
            return <li className='top_menuitem' key={index}  >{item.label}</li>
          })}
      </ul>
      <Radio.Group onChange={handlePositionChange} value={dotPosition} style={{ marginBottom: 8 }}>
        {/* <Radio.Button value="top">Top</Radio.Button>
        <Radio.Button value="bottom">Bottom</Radio.Button>
        <Radio.Button value="left">Left</Radio.Button>
        <Radio.Button value="right">Right</Radio.Button> */}
      </Radio.Group>
      <Carousel dotPosition={dotPosition}>
        <div>
          <h3 >1</h3>
        </div>
        <div>
          <h3 >2</h3>
        </div>
        <div>
          <h3 >3</h3>
        </div>
        <div>
          <h3 >4</h3>
        </div>
      </Carousel>
   </div>
  </div>
};


export default Ahouse;