import { useDispatch } from 'react-redux';
import { setCredentials } from './authSlice';
import { login } from '../../api/auth';
import { useMutation } from '@tanstack/react-query';

export const useLogin = () => {
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: (credentials: { email: string; password: string }) =>
      login(credentials),
    onSuccess: (data) => {
      dispatch(setCredentials({ token: data.token }));
      console.log('You are now logged in');
    },
    onError: (error) => {
      console.error('Authentication failed', error);
    },
  });
};
