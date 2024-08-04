// components/Loading.tsx
import { useEffect } from 'react';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

const Loading = () => {
  useEffect(() => {
    NProgress.start();
    return () => {
      NProgress.done();
    };
  }, []);

  return null;
};

export default Loading;
