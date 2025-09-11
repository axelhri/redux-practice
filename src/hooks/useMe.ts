import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../state/store.ts';
import { setCredentials, setUser } from '../features/auth/meSlice.ts';
import { fetchMe } from '../api/fetchMe.ts';
import { useEffect } from 'react';

export const useMe = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;

    dispatch(setCredentials({ token }));

    fetchMe(token)
      .then((user) => {
        dispatch(setUser(user));
      })
      .catch((err) => {
        console.error('Failed to fetch user: ', err);
        localStorage.removeItem('token');
      });
  }, [dispatch]);
};
