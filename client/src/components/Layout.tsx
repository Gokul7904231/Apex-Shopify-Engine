import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

export default function Layout() {
  return (
    <div className="app" style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      <Sidebar />
      <div className="main-wrapper" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Header />
        <main className="main-content" style={{ flex: 1, overflowY: 'auto', padding: '2rem', background: '#f4f6f8' }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
