import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Lock, LogIn, Github, Chrome, AlertCircle, ShoppingBag, Sparkles, LayoutDashboard } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { toast } from 'react-hot-toast';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const { login, signup, loginWithGoogle, loginAnonymously, resetPassword } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return toast.error('Please enter all fields');
    
    setLoading(true);
    try {
      if (isLogin) {
        await login(email, password);
        toast.success('Successfully logged in!', {
          icon: '🚀',
          style: { borderRadius: '12px', background: '#111827', color: '#fff', fontWeight: 600 }
        });
      } else {
        await signup(email, password);
        toast.success('Account created successfully!', {
          icon: '✨',
          style: { borderRadius: '12px', background: '#111827', color: '#fff', fontWeight: 600 }
        });
      }
      navigate('/');
    } catch (error: any) {
      console.error('Auth error:', error);
      toast.error(error.message || 'Authentication failed', {
        icon: '❌',
        style: { borderRadius: '12px', background: '#FEF2F2', color: '#EF4444', fontWeight: 600 }
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDemoAccess = async () => {
    setLoading(true);
    try {
      await loginAnonymously();
      toast.success('Logged in as Guest!', {
        icon: '👤',
        style: { borderRadius: '12px', background: '#F1F5F9', color: '#111827', fontWeight: 600 }
      });
      navigate('/');
    } catch (error: any) {
      toast.error('Demo access failed. Please try email login.');
    } finally {
      setLoading(false);
    }
  };

  const handleSocialLogin = async (method: 'google') => {
    setLoading(true);
    try {
      if (method === 'google') await loginWithGoogle();
      
      toast.success(`Signed in with ${method}!`, {
        icon: '🔑',
        style: { borderRadius: '12px', background: '#F3F4F6', color: '#111827', fontWeight: 600 }
      });
      navigate('/');
    } catch (error: any) {
      console.error(`${method} login error:`, error);
      toast.error(`${method} authentication failed. Check your connection.`);
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async () => {
    if (!email) {
      toast.error('Please enter your email address first', {
        icon: '📧',
        style: { borderRadius: '12px', fontWeight: 600 }
      });
      return;
    }
    
    try {
      await resetPassword(email);
      toast.success('Password reset link sent to your email!', {
        icon: '📨',
        style: { borderRadius: '12px', background: '#F0FDF4', color: '#15803D', fontWeight: 600 }
      });
    } catch (error: any) {
      toast.error(error.message || 'Failed to send reset email');
    }
  };

  return (
    <div className="min-h-screen w-full flex bg-[#F9FAFB] animate-in fade-in duration-700 font-sans">
      {/* Left Decoration - Visible on Desktop */}
      <div className="hidden lg:flex w-1/2 bg-[#111827] relative items-center justify-center overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#6366F1] rounded-full blur-[160px] opacity-20 translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#A855F7] rounded-full blur-[160px] opacity-20 -translate-x-1/2 translate-y-1/2" />
        
        <div className="relative z-10 max-w-lg space-y-8 p-12 text-white">
          <div className="w-16 h-16 bg-white/10 rounded-2xl backdrop-blur-md flex items-center justify-center shadow-2xl border border-white/20 mb-8">
            <Sparkles className="w-8 h-8 text-[#A855F7]" />
          </div>
          <h1 className="text-6xl font-black leading-[1.1] tracking-tighter">The Future of Shopify Analytics is Here.</h1>
          <p className="text-xl font-medium text-white/60 leading-relaxed">
            Harness the power of AI to transform your store's raw data into actionable growth strategies. Join over 2,000+ top stores today.
          </p>
          <div className="grid grid-cols-2 gap-6 pt-12">
            {[
              { icon: LayoutDashboard, label: 'Live Data Sync' },
              { icon: ShoppingBag, label: 'Sales Predictions' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm shadow-xl">
                <item.icon className="w-5 h-5 text-[#6366F1]" />
                <span className="font-black text-xs uppercase tracking-widest">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column - Auth Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-12 animate-in slide-in-from-right-10 duration-1000">
          <div className="text-center lg:text-left space-y-4">
             <div className="lg:hidden flex justify-center mb-6">
               <div className="w-12 h-12 bg-[#6366F1] rounded-xl flex items-center justify-center shadow-lg">
                 <Sparkles className="w-6 h-6 text-white" />
               </div>
             </div>
             <h2 className="text-5xl font-black text-[#111827] tracking-tighter">
               {isLogin ? 'Welcome Back' : 'Get Started'}
             </h2>
             <p className="text-[#6B7280] font-bold text-lg">
               {isLogin ? 'Enter your details to access your dashboard' : 'Create your account to start growing with AI'}
             </p>
          </div>

          <div className="space-y-8">
            {/* Login / SignUp Toggle */}
            <div className="p-1 bg-[#F3F4F6] rounded-2xl flex gap-1">
              <button 
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-3 font-black text-xs uppercase tracking-widest rounded-xl transition-all ${isLogin ? 'bg-white text-[#111827] shadow-lg' : 'text-[#9CA3AF] hover:text-[#111827]'}`}
              >
                Login
              </button>
              <button 
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-3 font-black text-xs uppercase tracking-widest rounded-xl transition-all ${!isLogin ? 'bg-white text-[#111827] shadow-lg' : 'text-[#9CA3AF] hover:text-[#111827]'}`}
              >
                Sign Up
              </button>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label className="text-sm font-black text-[#111827] uppercase tracking-wider">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9CA3AF]" />
                  <Input 
                    type="email" 
                    placeholder="name@store.com" 
                    className="pl-12 h-14 border-[#E5E7EB] focus:ring-[#6366F1] text-lg font-bold rounded-xl shadow-sm"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label className="text-sm font-black text-[#111827] uppercase tracking-wider">Password</Label>
                  {isLogin && (
                    <button 
                      type="button" 
                      onClick={handleResetPassword}
                      className="text-sm font-black text-[#6366F1] hover:underline uppercase tracking-widest outline-none"
                    >
                      Forgot?
                    </button>
                  )}
                </div>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9CA3AF]" />
                  <Input 
                    type="password" 
                    placeholder="••••••••" 
                    className="pl-12 h-14 border-[#E5E7EB] rounded-xl text-lg font-bold shadow-sm"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4 pt-2">
                <Button 
                  type="submit" 
                  disabled={loading}
                  className="w-full h-14 bg-[#111827] hover:bg-[#6366F1] text-white font-black text-xl rounded-xl shadow-xl hover:shadow-2xl transition-all gap-3 overflow-hidden group border-none"
                >
                  {loading ? (
                    <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <LogIn className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                      {isLogin ? 'Sign In' : 'Create Account'}
                    </>
                  )}
                </Button>

                <Button 
                  type="button"
                  variant="outline"
                  onClick={handleDemoAccess}
                  className="w-full h-14 border-2 border-[#E5E7EB] text-[#111827] font-black text-lg rounded-xl shadow-sm hover:bg-indigo-50 hover:border-indigo-200 hover:text-indigo-600 transition-all gap-3"
                >
                  Explore as Guest
                </Button>
              </div>
            </form>

            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#E5E7EB]" />
              </div>
              <div className="relative flex justify-center text-[10px] uppercase font-black text-[#9CA3AF] tracking-widest bg-[#F9FAFB] px-8">
                Or continue with
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <Button 
                variant="outline" 
                className="h-14 font-black rounded-xl gap-3 border-[#E5E7EB] bg-white text-[#111827] hover:bg-[#F9FAFB] shadow-sm text-sm uppercase tracking-widest"
                onClick={() => handleSocialLogin('google')}
                disabled={loading}
              >
                <Chrome className="w-5 h-5 text-red-500" />
                Google Account
              </Button>
            </div>
          </div>

          <p className="text-center text-[#6B7280] font-black text-xs uppercase tracking-widest">
            {isLogin ? "Don't have an account?" : "Already have an account?"} {' '}
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="text-[#6366F1] hover:underline cursor-pointer font-black"
            >
              {isLogin ? 'Sign Up Now' : 'Sign In instead'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
