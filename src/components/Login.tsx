import { useCallback, useState } from 'react';
import { useLogin } from '../features/auth/useAuth.ts';
import * as React from 'react';

export const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;
  const { mutate: login, isPending } = useLogin();

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) return;
    login({ email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        value={email}
        onChange={onChange}
        placeholder="Email"
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={onChange}
        placeholder="Mot de passe"
      />
      <button type="submit" disabled={isPending}>
        {isPending ? 'Connexion en cours...' : 'Se connecter'}
      </button>
    </form>
  );
};
