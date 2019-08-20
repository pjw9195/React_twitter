import React from 'react';
import { Menu, Input } from 'antd';
import Head from 'next/head';

const AppLayout = ({ children }) => {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.22.0/antd.css"
        />
      </Head>
      <Menu mode="horizontal">
        <Menu.Item key={'home'}>노드버드</Menu.Item>
        <Menu.Item key={'profile'}>프로필</Menu.Item>
        <Menu.Item key={'mail'}>
          <Input.Search enterButton style={{ verticalAlign: 'middle' }} />
        </Menu.Item>
      </Menu>
      {children}
    </div>
  );
};
export default AppLayout;
