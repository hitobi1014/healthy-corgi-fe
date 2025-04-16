import { Outlet } from 'react-router-dom';
import Footer from '@/components/layout/Footer';

export default function MainLayOut() {
  return (
    <div
      className="flex flex-col h-screen"
      style={{ paddingTop: 'var(--safe-area-top)' }}
    >
      <div className="flex-1 overflow-y-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
