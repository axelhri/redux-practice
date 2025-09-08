import { useDispatch } from 'react-redux';
import { setCredentials } from './authSlice';
import { login } from '../../api/auth';
import { useMutation } from '@tanstack/react-query';
import type { AppDispatch } from '../../state/store.ts';

export const useLogin = () => {
  const dispatch = useDispatch<AppDispatch>();

  return useMutation({
    mutationFn: (credentials: { email: string; password: string }) =>
      login(credentials),
    onSuccess: (data) => {
      dispatch(setCredentials({ token: data.token }));
      console.log('You are now logged in', data);
    },
    onError: (error) => {
      console.error('Authentication failed', error);
    },
  });
};
