import { Outlet } from 'react-router-dom';
import Footer from './Footer';

export default function MainLayOut() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 overflow-y-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
