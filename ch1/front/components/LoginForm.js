import React, { useState } from 'react';

import { Menu, Input, Button, Row, Col, Card, Avatar, Form } from 'antd';
import Head from 'next/head';
import Link from 'next/link';
const LoginForm = () => {
  return (
    <Form>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input name="user-id" required />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input name="user-password" required />
      </div>
      <div>
        <Button type="primary" htmlType="submit" loading={false}>
          로그인
        </Button>
        <Link href="signup">
          <a>
            <Button>회원가입</Button>
          </a>
        </Link>
      </div>
    </Form>
  );
};
export default LoginForm;
