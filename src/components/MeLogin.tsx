import { useLogin } from '../features/auth/meAuth.ts';
import { useForm } from 'react-hook-form';

export const MeLogin = () => {
  const { mutate: login, isPending, error } = useLogin();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: any) => {
    login(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input type="email" placeholder="Email" {...register('email')} />
      </div>

      <div>
        <input
          type="password"
          placeholder="Mot de passe"
          {...register('password')}
        />
      </div>

      {error && <p>Email ou mot de passe invalide</p>}

      <button type="submit" disabled={isPending}>
        {isPending ? 'Connexion en cours...' : 'Se connecter'}
      </button>
    </form>
  );
};
