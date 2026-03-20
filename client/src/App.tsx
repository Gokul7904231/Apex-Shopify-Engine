import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './layouts/Layout';
import Dashboard from './pages/Dashboard';
import ProductSearch from './pages/ProductSearch';
import Recommendations from './pages/Recommendations';
import Analytics from './pages/Analytics';
import LoginPage from './pages/LoginPage';

import PricingPlans from './pages/PricingPlans';
import Contact from './pages/Contact';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/plans" element={<PricingPlans />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<ProtectedRoute />}>
              <Route element={<Layout />}>
                <Route index element={<Dashboard />} />
                <Route path="search" element={<ProductSearch />} />
                <Route path="recommendations" element={<Recommendations />} />
                <Route path="analytics" element={<Analytics />} />
              </Route>
            </Route>
          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
