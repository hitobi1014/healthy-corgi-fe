import HomePage from '@/pages/home';
import WorkoutVerificationPage from '@/pages/workout';
import React from 'react';
import MainLayOut from '@/components/layout/MainLayOut';
import LoginPage from '@/pages/users/login';
import SignupPage from '@/pages/users/signup';

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
    // MainLayout 하위로 Home(운동인증), 내정보
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: 'my-page',
        element: <div />, // TODO MyPage 컴포넌트 생성하면 추가하기
      },
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/signup',
    element: <SignupPage />,
  },
];
