import { useLogin } from '../features/auth/useAuth.ts';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, type LoginFormValues } from '../schemas/LoginSchema.ts';

export const ReactHookFormLogin = () => {
  const { mutate: login, isPending, error, reset } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  const onSubmit = (data: LoginFormValues) => {
    login(data, {
      onSuccess: () => reset(),
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input type="email" placeholder="Email" {...register('email')} />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <input
          type="password"
          placeholder="Mot de passe"
          {...register('password')}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>

      {!Object.keys(errors).length && error && (
        <p>Email ou mot de passe invalide</p>
      )}

      <button type="submit" disabled={isPending}>
        {isPending ? 'Connexion en cours...' : 'Se connecter'}
      </button>
    </form>
  );
};
