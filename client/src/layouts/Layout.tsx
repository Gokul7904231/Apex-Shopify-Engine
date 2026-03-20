import React, { useState } from 'react';
import { Outlet, useNavigate, useLocation, Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Search, 
  Sparkles, 
  BarChart3, 
  Settings, 
  LogOut,
  Bell,
  Menu,
  X,
  ShoppingBag,
  Crown,
  Beaker
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { Button } from '../components/ui/button';
import { Switch } from '../components/ui/switch';
import { cn } from '../lib/utils';
import { Toaster, toast } from 'react-hot-toast';
import CartDrawer from '../components/CartDrawer';

export default function Layout() {
  const { user, logout, testMode, setTestMode } = useAuth();
  const { items, setIsOpen } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
    { icon: Search, label: 'Product Search', path: '/search' },
    { icon: Sparkles, label: 'Recommendations', path: '/recommendations' },
    { icon: BarChart3, label: 'Analytics', path: '/analytics' },
  ];

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const cartItemsCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="flex h-screen bg-[#F9FAFB] text-[#111827] font-sans">
      <Toaster position="top-right" />
      <CartDrawer />
      
      {/* Sidebar */}
      <aside className={cn(
        "bg-white border-r border-[#E5E7EB] transition-all duration-300 flex flex-col",
        sidebarOpen ? "w-64" : "w-20"
      )}>
        <div className="p-6 flex items-center gap-3">
          <div className="w-8 h-8 bg-[#6366F1] rounded-lg flex items-center justify-center">
            <Sparkles className="text-white w-5 h-5" />
          </div>
          {sidebarOpen && <span className="font-bold text-xl tracking-tight text-[#111827]">ShopifyAI</span>}
        </div>

        <nav className="flex-1 px-4 space-y-2 mt-4">
          {menuItems.map((item) => (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors group",
                location.pathname === item.path 
                  ? "bg-[#F3F4F6] text-[#6366F1]" 
                  : "text-[#6B7280] hover:bg-[#F9FAFB] hover:text-[#111827]"
              )}
            >
              <item.icon className={cn(
                "w-5 h-5",
                location.pathname === item.path ? "text-[#6366F1]" : "text-[#9CA3AF] group-hover:text-[#111827]"
              )} />
              {sidebarOpen && <span className="font-medium">{item.label}</span>}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-[#E5E7EB]">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2 text-[#6B7280] hover:text-[#EF4444] transition-colors"
          >
            <LogOut className="w-5 h-5" />
            {sidebarOpen && <span className="font-medium">Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-white border-b border-[#E5E7EB] flex items-center justify-between px-8 z-10 shrink-0">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 hover:bg-[#F3F4F6] rounded-lg text-[#6B7280]"
            >
              <Menu className="w-5 h-5" />
            </button>
            <Link to="/plans" className="hidden lg:block ml-4">
              <Button size="sm" className="bg-gradient-to-r from-indigo-50 to-white text-indigo-600 border border-indigo-100 hover:border-indigo-300 font-bold gap-2">
                <Crown className="w-4 h-4 fill-indigo-500" />
                Upgrade to Pro
              </Button>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            {/* Test Insights Toggle - Matches Red Rectangle Location */}
            <div className="hidden md:flex items-center gap-3 bg-[#F9FAFB] px-4 py-2 rounded-xl border border-[#E5E7EB]">
              <div className="flex items-center gap-2">
                <Beaker className={cn("w-4 h-4", testMode ? "text-[#6366F1]" : "text-[#9CA3AF]")} />
                <span className="text-[11px] font-black uppercase tracking-wider text-[#111827]">Test Insights</span>
              </div>
              <Switch 
                checked={testMode} 
                onCheckedChange={(val: boolean) => {
                  setTestMode(val);
                  toast.success(`Test mode ${val ? 'enabled' : 'disabled'}`);
                }}
              />
            </div>

            <div className="w-px h-6 bg-[#E5E7EB] mx-2 hidden md:block" />

            <button 
              onClick={() => setIsOpen(true)}
              className="p-2 text-[#6B7280] hover:text-[#6366F1] relative transition-colors"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#6366F1] text-white text-[10px] font-black rounded-full flex items-center justify-center border-2 border-white animate-in zoom-in">
                  {cartItemsCount}
                </span>
              )}
            </button>

            <button className="p-2 text-[#6B7280] hover:text-[#111827] relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-[#EF4444] rounded-full border-2 border-white"></span>
            </button>
            
            <div className="flex items-center gap-3 pl-4 border-l border-[#E5E7EB]">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-black text-[#111827] leading-tight">{user?.email?.split('@')[0].toUpperCase() || 'USER'}</p>
                <p className="text-[11px] font-bold text-[#6B7280]">{user?.email || 'test@example.com'}</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#6366F1] to-[#A855F7] flex items-center justify-center text-white font-black text-sm border-2 border-white shadow-sm">
                {user?.email?.[0].toUpperCase() || 'U'}
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
