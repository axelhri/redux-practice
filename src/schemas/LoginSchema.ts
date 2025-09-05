import { z } from 'zod';

const loginSchema = z.object({
  email: z.email('Veuillez entrer un email valide').nonempty(),
  password: z.string().min(8).nonempty(),
});

export default loginSchema;
