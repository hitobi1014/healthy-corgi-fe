import { useRoutes } from 'react-router-dom';
import { routeConfig } from './config';

export const AppRoutes = () => {
  return useRoutes(routeConfig);
};
