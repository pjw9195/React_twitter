import React, { useEffect } from 'react';
import Link from 'next/link';
import AppLayout from '../components/AppLayout';
import { Button, Form, Input, Card, Icon, Avatar } from 'antd';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction, LOG_IN, LOG_OUT } from '../reducers/user';

const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  const { mainPosts } = useSelector(state => state.post);
  useEffect(() => {}, []);
  return (
    <div>
      {user ? (
        <div>로그인 했습니다: {user.nickname}</div>
      ) : (
        <div>로그아웃 했습니다.</div>
      )}
      {isLoggedIn && <PostForm />}
      {mainPosts.map(c => {
        return <PostCard key={c} post={c} />;
      })}
    </div>
  );
};

export default Home;
