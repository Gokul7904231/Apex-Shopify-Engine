import { NavLink, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { useAuth } from '../context/AuthContext';

/**
 * Production-ready Sidebar Navigation.
 * Includes user session management and responsive behavior.
 */
export default function Sidebar() {
  const { user, syncStatus } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (err) {
      console.error('Logout failed:', err);
    }
  };

  return (
    <nav className="sidebar">
      <div className="sidebar-header">
        <div className="logo cursor-pointer" onClick={() => navigate('/')}>
          <div className="logo-icon">📊</div>
          <div>
            <h1>Analytics Pro</h1>
            <span className="logo-subtitle">Shopify Integrator</span>
          </div>
        </div>
      </div>

      <ul className="nav-links">
        <li>
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
            <span className="nav-icon">🏠</span> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/search" className={({ isActive }) => isActive ? 'active' : ''}>
            <span className="nav-icon">🔍</span> Product Search
          </NavLink>
        </li>
        <li>
          <NavLink to="/recommendations" className={({ isActive }) => isActive ? 'active' : ''}>
            <span className="nav-icon">💡</span> AI Recommendations
          </NavLink>
        </li>
        <li>
          <NavLink to="/analytics" className={({ isActive }) => isActive ? 'active' : ''}>
            <span className="nav-icon">📈</span> Market Analytics
          </NavLink>
        </li>
      </ul>

      <div className="sidebar-footer">
        {user && (
          <div className="mb-4">
             <div className="text-[10px] text-muted mb-2 font-mono flex items-center gap-2">
                <span className={`w-1.5 h-1.5 rounded-full ${syncStatus === 'synced' ? 'bg-success' : 'bg-warning'}`}></span>
                Context: {syncStatus}
             </div>
             <button 
               onClick={handleLogout}
               className="w-full text-left py-2 px-3 text-sm text-secondary hover:text-danger hover:bg-danger/10 rounded transition-colors flex items-center gap-2 group"
             >
               <span className="group-hover:translate-x-1 transition-transform">🚪</span> Sign Out
             </button>
          </div>
        )}
        <div className="demo-badge">
          <span>🟢</span> Live API Connected
        </div>
      </div>
    </nav>
  );
}
