import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Sparkles } from 'lucide-react';

export default function ProtectedRoute() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#F9FAFB] text-[#111827]">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-[#F3F4F6] border-t-[#6366F1] rounded-full animate-spin" />
          <div className="absolute inset-0 flex items-center justify-center">
             <Sparkles className="w-6 h-6 text-[#6366F1] animate-pulse" />
          </div>
        </div>
        <p className="mt-6 font-black text-xl tracking-tight">Authenticating...</p>
        <p className="mt-2 text-[#6B7280] font-medium">Please wait while we secure your store dashboard.</p>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
