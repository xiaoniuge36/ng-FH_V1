import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu, Select } from 'antd';
import React, { useState } from 'react';
import './index.less'
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

const Ahouse = () => {
  const [current, setCurrent] = useState('main');//当前选中的菜单项

  const onClick = (e: any) => { //点击菜单项触发的事件
    console.log('click ', e); //打印出菜单项的key值
    setCurrent(e.key); //更新当前选中的菜单项
  };

  return <div className='content'>
    <div className='top'>
      <Menu className='menu_test' onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
    </div>

  </div>;
};

export default Ahouse;