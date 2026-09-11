import { type VercelConfig } from '@vercel/config/v1';

export const config: VercelConfig = {
  framework: 'astro',
  buildCommand: 'npm run build',
  outputDirectory: 'dist',
};
