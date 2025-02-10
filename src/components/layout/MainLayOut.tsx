import { Outlet } from 'react-router-dom';
import Footer from './Footer';

export default function MainLayOut() {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
}
