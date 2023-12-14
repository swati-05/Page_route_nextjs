import { useState, useEffect } from 'react';
// next
import { useRouter } from 'next/router';
import Login from '../pages/auth/login';
import useAuth from '../hooks/useAuth';
import { useSelector, useDispatch } from 'react-redux';

// ----------------------------------------------------------------------

export default function AuthGuard({ children }) {
    const dispatch = useDispatch();
  const { isAuthenticated, isInitialized, initialize } = useAuth();

   useEffect(() => {
    dispatch(initialize());
  }, [isInitialized]);


  if (!isInitialized) {
    return <span>Loading...</span>;
  }

  if (!isAuthenticated) {
   
    return <Login />;
  }

  return <>{children}</>;
}