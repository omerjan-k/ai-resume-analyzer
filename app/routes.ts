import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  route('auth', 'routes/auth.tsx'),
  route('upload', 'routes/upload.tsx'),
  route('resume/:id', 'routes/resume.tsx'),
  route('*', 'routes/notFound.tsx'), // Catch-all 404 route
] satisfies RouteConfig;
