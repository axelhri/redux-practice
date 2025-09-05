import { z } from 'zod';

export const loginSchema = z.object({
  email: z
    .email('Veuillez entrer un email valide')
    .nonempty("L'email est requis"),

  password: z
    .string()
    .nonempty('Le mot de passe est requis')
    .min(8, 'Le mot de passe doit contenir au moins 8 caractères')
    .regex(/[A-Z]/, 'Le mot de passe doit contenir au moins une majuscule')
    .regex(/[a-z]/, 'Le mot de passe doit contenir au moins une minuscule')
    .regex(/[0-9]/, 'Le mot de passe doit contenir au moins un chiffre')
    .regex(
      /[@$!%*?&_-]/,
      'Le mot de passe doit contenir au moins un caractère spécial',
    ),
});

export type LoginFormValues = z.infer<typeof loginSchema>;
