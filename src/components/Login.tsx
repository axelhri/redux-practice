import { useCallback, useState } from 'react';
import { useLogin } from '../features/auth/useAuth.ts';
import * as React from 'react';
import { loginSchema, type LoginFormValues } from '../schemas/LoginSchema.ts';

export const Login = () => {
  const [formData, setFormData] = useState<LoginFormValues>({
    email: '',
    password: '',
  });
  const { email, password } = formData;
  const [errors, setErrors] = useState<
    Partial<Record<keyof LoginFormValues, string>>
  >({});
  const { mutate: login, isPending, error, reset } = useLogin();

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = loginSchema.safeParse(formData);

    if (!result.success) {
      reset();
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors({
        email: fieldErrors.email?.[0],
        password: fieldErrors.password?.[0],
      });
      return;
    }

    login(result.data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="email"
          name="email"
          value={email}
          onChange={onChange}
          placeholder="Email"
        />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <input
          type="password"
          name="password"
          value={password}
          onChange={onChange}
          placeholder="Mot de passe"
        />
        {errors.password && <p>{errors.password}</p>}
      </div>
      {error && <p>Email ou mot de passe invalide</p>}
      <button type="submit" disabled={isPending}>
        {isPending ? 'Connexion en cours...' : 'Se connecter'}
      </button>
    </form>
  );
};
