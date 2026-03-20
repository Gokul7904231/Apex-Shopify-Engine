import { useAuth } from '../context/AuthContext';
import { auth } from '../lib/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';
import { Sparkles, Crown, LogOut, Beaker } from 'lucide-react';
import { Button } from './ui/button';
import { Switch } from './ui/switch';
import { Badge } from './ui/badge';

export default function Header() {
  const { user, testMode, setTestMode } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/login');
  };

  return (
    <header className="top-header border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-[1600px] mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/plans">
            <Button variant="outline" size="sm" className="hidden md:flex gap-2 border-indigo-100 bg-indigo-50/50 text-indigo-600 hover:bg-indigo-100 hover:text-indigo-700 font-bold transition-all">
              <Crown className="w-4 h-4 fill-indigo-600" />
              Upgrade to Pro
            </Button>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          {/* Test Insights Toggle */}
          <div className="flex items-center gap-3 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100">
             <div className="flex items-center gap-2">
               <Beaker className={`w-4 h-4 ${testMode ? 'text-amber-500' : 'text-slate-400'}`} />
               <span className="text-[11px] font-black uppercase tracking-tighter text-slate-500">Test Insights</span>
             </div>
             <Switch 
               checked={testMode} 
               onCheckedChange={(val: boolean) => setTestMode(val)}
               className="data-[state=checked]:bg-amber-500"
             />
          </div>

          <div className="h-4 w-px bg-slate-200 mx-2" />

          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <p className="text-xs font-black text-slate-900 leading-none">{user?.displayName || 'Merchant Pro'}</p>
              <p className="text-[10px] font-bold text-slate-400 mt-1">{user?.email}</p>
            </div>
            
            <Badge variant="outline" className="bg-emerald-50 text-emerald-600 border-emerald-100 font-black text-[10px] px-2">
              ACTIVE
            </Badge>

            <Button 
              variant="ghost" 
              size="icon"
              onClick={handleLogout}
              className="text-slate-400 hover:text-rose-500 hover:bg-rose-50 transition-all"
            >
              <LogOut className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
