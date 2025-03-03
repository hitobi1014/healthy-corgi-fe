import { useRoutes } from 'react-router-dom';
import { routeConfig } from '@/routes/config';

export const AppRoutes = () => {
  return useRoutes(routeConfig);
};
