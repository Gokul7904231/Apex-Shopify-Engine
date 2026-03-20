import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight, CreditCard, Loader2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { cn } from '../lib/utils';
import { api } from '../lib/api';
import { toast } from 'react-hot-toast';

export default function CartDrawer() {
  const { items, removeItem, updateQuantity, total, isOpen, setIsOpen, clearCart } = useCart();
  const [checkingOut, setCheckingOut] = useState(false);

  const handleCheckout = async () => {
    if (items.length === 0) return;
    setCheckingOut(true);
    try {
      // Use the Stripe checkout API
      const response = await api.post('/stripe/create-checkout-session', { 
        items,
        // mode: 'payment' for products, already handled by backend? 
        // No, I'll need to update backend to handle products.
      });

      if (response.success && response.data?.url) {
        window.location.href = response.data.url;
      } else {
        toast.error(response.error || 'Failed to initialize payment');
      }
    } catch (err) {
      toast.error('Network error during checkout');
    } finally {
      setCheckingOut(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-[101] flex flex-col"
          >
            <div className="p-6 flex items-center justify-between border-b border-[#E5E7EB]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#F3F4F6] rounded-xl flex items-center justify-center">
                  <ShoppingBag className="w-5 h-5 text-[#6366F1]" />
                </div>
                <div>
                  <h2 className="text-xl font-black text-[#111827]">Your Cart</h2>
                  <p className="text-xs font-bold text-[#9CA3AF] uppercase tracking-wider">
                    {items.length} {items.length === 1 ? 'Item' : 'Items'} selected
                  </p>
                </div>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full hover:bg-[#F3F4F6]"
                onClick={() => setIsOpen(false)}
              >
                <X className="w-5 h-5 text-[#6B7280]" />
              </Button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-60">
                  <div className="w-20 h-20 bg-[#F9FAFB] rounded-full flex items-center justify-center">
                    <ShoppingBag className="w-10 h-10 text-[#D1D5DB]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#111827]">Empty Cart</h3>
                  <p className="text-sm text-[#6B7280]">Your shopping cart is waiting for some amazing products!</p>
                  <Button 
                    variant="link" 
                    className="text-[#6366F1] font-bold"
                    onClick={() => setIsOpen(false)}
                  >
                    Continue Shopping
                  </Button>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-4 group">
                    <div className="w-24 h-24 bg-[#F9FAFB] rounded-2xl overflow-hidden flex-shrink-0 border border-[#F3F4F6]">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <h4 className="font-bold text-[#111827] text-sm line-clamp-1 group-hover:text-[#6366F1] transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-[#6366F1] font-black text-sm mt-1">${item.price}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 bg-[#F3F4F6] rounded-lg p-1">
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="w-7 h-7 hove:bg-white transition-all text-[#111827]"
                            onClick={() => updateQuantity(item.id, -1)}
                          >
                            <Minus className="w-3 h-3" />
                          </Button>
                          <span className="w-8 text-center text-xs font-black">{item.quantity}</span>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="w-7 h-7 hover:bg-white transition-all text-[#111827]"
                            onClick={() => updateQuantity(item.id, 1)}
                          >
                            <Plus className="w-3 h-3" />
                          </Button>
                        </div>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="w-8 h-8 text-[#9CA3AF] hover:text-[#EF4444] transition-colors"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="p-8 border-t border-[#E5E7EB] bg-white space-y-6">
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-[#6B7280]">Subtotal</span>
                    <span className="font-bold text-[#111827]">${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-[#6B7280]">Taxes (approx)</span>
                    <span className="font-bold text-[#111827]">${(total * 0.1).toFixed(2)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg">
                    <span className="font-black text-[#111827]">Order Total</span>
                    <span className="font-black text-[#6366F1]">${(total * 1.1).toFixed(2)}</span>
                  </div>
                </div>

                <Button 
                  disabled={checkingOut}
                  onClick={handleCheckout}
                  className="w-full h-14 bg-[#111827] hover:bg-[#6366F1] text-white font-black text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all gap-3 overflow-hidden group"
                >
                  {checkingOut ? (
                    <Loader2 className="w-6 h-6 animate-spin text-white" />
                  ) : (
                    <>
                      <CreditCard className="w-5 h-5 group-hover:-translate-y-1 group-hover:scale-110 transition-transform" />
                      Checkout Now
                      <ArrowRight className="w-5 h-5 ml-auto opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </>
                  )}
                </Button>
                
                <p className="text-[10px] text-center text-[#9CA3AF] font-bold uppercase tracking-widest">
                  Secure checkout powered by Stripe
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
