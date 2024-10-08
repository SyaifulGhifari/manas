'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className='relative max-h-screen h-screen bg-cover bg-center duration-500' style={{ textAlign: 'center', padding: '50px', backgroundImage: `url('/images/404.jpg` }}>
      <h1>404 - Page Not Found</h1>
      <p>You will be redirected to the home page in 5 seconds...</p>
    </div>
  );
}

