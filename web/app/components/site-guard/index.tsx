'use client'
import React, { memo, useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';

const SiteGuard = () => {
  const router = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const promptShown = useRef(false);

  useEffect(() => {
    const checkAuth = async () => {
      if (router.startsWith('/chat') && !promptShown.current) {
        const password = prompt('Enter password:');
        promptShown.current = true;

        if (password === 'cit2024') {
          setIsAuthenticated(true);
        } else {
          alert('Invalid password');
          setIsAuthenticated(false);
        }
      } else {
        setIsAuthenticated(true);
      }
      setIsCheckingAuth(false);
    };

    checkAuth();
  }, [router]);

  if (isCheckingAuth) {
    return <div style={{ height: '100vh', backgroundColor: 'white' }} />;
  }
  if (!isAuthenticated) {
    return <div style={{ height: '100vh', backgroundColor: 'white' }} />;
  }

  return <></>;
}

export default memo(SiteGuard);