import { useDispatch } from 'react-redux';
import { setCredentials, setUser } from './meSlice';
import { login } from '../../api/meApi';
import { useMutation } from '@tanstack/react-query';
import type { AppDispatch } from '../../state/store.ts';
import { fetchMe } from '../../api/fetchMe.ts';

export const useLogin = () => {
  const dispatch = useDispatch<AppDispatch>();

  return useMutation({
    mutationFn: (credentials: { email: string; password: string }) =>
      login(credentials),
    onSuccess: async (data) => {
      dispatch(setCredentials({ token: data.token }));
      console.log('You are now logged in', data);

      try {
        const user = await fetchMe(data.token);
        dispatch(setUser(user));
        console.log('You are now logged in', user);
      } catch (error) {
        console.error('Failed to fetch user', error);
      }
    },
    onError: (error) => {
      console.error('Authentication failed', error);
    },
  });
};
