import React, { createContext, useContext, useEffect, useState } from 'react';
import { 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  signOut, 
  User,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  sendPasswordResetEmail
} from 'firebase/auth';
import { auth } from '../lib/firebase';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  testMode: boolean;
  setTestMode: (val: boolean) => void;
  syncStatus: 'synced' | 'unsynced';
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  loginWithGithub: () => Promise<void>;
  loginAnonymously: () => Promise<void>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [testMode, setTestModeState] = useState(() => localStorage.getItem('testMode') === 'true');
  const [syncStatus, setSyncStatus] = useState<'synced' | 'unsynced'>('synced');

  const setTestMode = (val: boolean) => {
    localStorage.setItem('testMode', String(val));
    setTestModeState(val);
    window.location.reload(); // Force reload to clear caches and trigger new fetches
  };

  useEffect(() => {
    // 1. Check for redirect result with safety catches
    const checkRedirect = async () => {
      try {
        const result = await getRedirectResult(auth);
        if (result) {
          console.log("Redirect login successful:", result.user.email);
          setUser(result.user);
        }
      } catch (error: any) {
        console.error("Redirect hand-off error:", error.code, error.message);
      } finally {
        // Even if redirect check fails, allow the app to finish loading
        setLoading(false);
      }
    };

    checkRedirect();

    // 2. Auth state change listener
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("Auth State Changed - Current User:", user?.email || "None");
      setUser(user);
      setLoading(false); // <--- Ensure loading is finished on state change
    });

    return unsubscribe;
  }, []);

  const login = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const signup = async (email: string, password: string) => {
    const { createUserWithEmailAndPassword } = await import('firebase/auth');
    await createUserWithEmailAndPassword(auth, email, password);
  };

  const loginAnonymously = async () => {
    const { signInAnonymously } = await import('firebase/auth');
    await signInAnonymously(auth);
  };

  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithRedirect(auth, provider);
  };

  const loginWithGithub = async () => {
    const provider = new GithubAuthProvider();
    await signInWithRedirect(auth, provider);
  };

  const resetPassword = async (email: string) => {
    await sendPasswordResetEmail(auth, email);
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      loading, 
      testMode, 
      setTestMode, 
      syncStatus, 
      login, 
      signup,
      loginWithGoogle, 
      loginWithGithub, 
      loginAnonymously,
      logout, 
      resetPassword 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
