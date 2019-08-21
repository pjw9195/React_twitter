import React from 'react';
import { Menu, Input, Button } from 'antd';
import Head from 'next/head';
import Link from 'next/link';
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
        <Menu.Item key={'home'}>
          <Link href="/">
            <a>노드버드</a>
          </Link>
        </Menu.Item>
        <Menu.Item key={'profile'}>
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item key={'mail'}>
          <Input.Search enterButton style={{ verticalAlign: 'middle' }} />
        </Menu.Item>
      </Menu>
      <Link href="signup">
        <a>
          <Button>회원가입</Button>
        </a>
      </Link>
      {children}
    </div>
  );
};
export default AppLayout;
