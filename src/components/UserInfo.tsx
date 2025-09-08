import { useSelector } from 'react-redux';
import type { RootState } from '../state/store.ts';

export const UserInfo = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  return <div>Bonjour {user?.email}</div>;
};
