import '@/App.css';
import { AppRoutes } from '@/routes';

function App() {
  return (
    <div className="bg-gray-200 min-h-screen flex justify-center">
      <div className="route-container">
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;
