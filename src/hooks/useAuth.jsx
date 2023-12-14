import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; // useSelector
import {
  initialize,
  login,
  logout,
  register
} from '../Redux/slices/authSlicer'; // AuthSlice

const useAuth = () => {
    const dispatch = useDispatch();
  const { isAuthenticated, isInitialized, user } = useSelector(
    (state) => state.authState
  );

  // useEffect(() => {
  //   dispatch(initialize());
  // }, []);

  return {
    user,
    login,
    logout,
    register,
    isAuthenticated,
    isInitialized,
    initialize
  };
};

export default useAuth;