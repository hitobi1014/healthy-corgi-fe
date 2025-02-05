import HomePage from '../pages/home';
import WorkoutVerificationPage from '../pages/workout';
import React from 'react';
import MainLayOut from '../components/layout/MainLayOut';
import LoginPage from '../pages/users/login';
import SignupPage from '../pages/users/signup';

interface RouteConfig {
  path: string;
  element?: React.ReactNode;
  children?: RouteConfig[];
  auth?: boolean;
}

export const routeConfig: RouteConfig[] = [
  {
    path: '/',
    element: <MainLayOut />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: 'workout/verifications',
        element: <WorkoutVerificationPage />,
      },
      {
        path: 'user',
        children: [
          {
            path: 'login',
            element: <LoginPage />,
          },
          {
            path: 'signup',
            element: <SignupPage />,
          },
        ],
      },
    ],
  },
];
