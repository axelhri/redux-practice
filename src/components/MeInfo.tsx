import { useSelector } from 'react-redux';
import type { RootState } from '../state/store.ts';

export const MeInfo = () => {
  const { user, isAuthenticated, loading } = useSelector(
    (state: RootState) => state.meAuth,
  );

  if (loading) return <div>Chargement...</div>;
  if (!isAuthenticated) return <div>Non connecté</div>;
  return (
    <div>
      <div>
        <strong>Connecté en tant que </strong>
        {user?.username}
      </div>
      <div>
        <strong>Identifiant:</strong> {user?.id}
      </div>
      <div>
        <strong>Email:</strong> {user?.email}
      </div>
    </div>
  );
};
