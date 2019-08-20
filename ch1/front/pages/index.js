import Link from 'next/link';
import AppLayout from '../components/AppLayout';

const Home = () => {
  return (
    <>
      <AppLayout>
        <Link href="/about">
          <a>about</a>
        </Link>
        <div>hello next!</div>
      </AppLayout>
    </>
  );
};

export default Home;
