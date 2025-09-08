import { useSelector } from 'react-redux';
import type { RootState } from '../state/store.ts';

export const UserInfo = () => {
  const { user, isAuthenticated } = useSelector(
    (state: RootState) => state.auth,
  );
  if (!isAuthenticated) return <div>Non connecté</div>;
  return (
    <div>
      <div>Connecté en tant que {user?.email}</div>
      <div>Rôles : {user?.roles.join(', ')}</div>
    </div>
  );
};
