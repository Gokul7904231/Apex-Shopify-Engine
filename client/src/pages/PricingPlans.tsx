import React, { useState } from 'react';
import { Check, ArrowRight, Zap, Shield, Sparkles, Loader2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { useNavigate, Link } from 'react-router-dom';
import { api } from '../lib/api';
import { toast } from 'react-hot-toast';

export default function PricingPlans() {
  const navigate = useNavigate();
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      price: '0',
      description: 'Ideal for new stores exploring AI-driven growth.',
      features: ['Up to 50 products', 'Basic Analytics', 'Standard Support', '5 AI Recommendations/day'],
      cta: 'Get Started',
      popular: false
    },
    {
      id: 'growth',
      name: 'Growth',
      price: '49',
      description: 'Perfect for established stores scaling operations.',
      features: ['Unlimited products', 'Advanced Analytics', 'Priority Support', 'Unlimited AI Recommendations', 'Custom Dashboards'],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      id: 'power',
      name: 'Power',
      price: '199',
      description: 'For enterprise stores with massive inventories.',
      features: ['Full API Access', 'Design Consultation', 'Dedicated Manager', 'Custom ML Models', 'White-labeling'],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const handlePlanClick = async (plan: any) => {
    if (plan.id === 'starter') {
      navigate('/');
      return;
    }

    if (plan.id === 'power') {
      navigate('/contact');
      return;
    }

    setLoadingPlan(plan.id);
    try {
      const response = await api.post('/stripe/create-checkout-session', { 
        isTrial: plan.id === 'growth' 
      });
      
      if (response.success && response.data?.url) {
        window.location.href = response.data.url;
      } else {
        toast.error(response.error || 'Checkout failed. Please check stripe config.');
      }
    } catch (err) {
      toast.error('Network error during checkout initialization.');
    } finally {
      setLoadingPlan(null);
    }
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] py-20 px-4 animate-in fade-in duration-700">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <Badge className="bg-indigo-50 text-indigo-600 border-indigo-100 font-black px-4 py-2 rounded-full uppercase tracking-widest text-[10px]">
            Pricing Plans
          </Badge>
          <h1 className="text-5xl md:text-6xl font-black text-[#111827] tracking-tighter">Choose Your Path to Growth</h1>
          <p className="text-xl text-[#6B7280] font-medium max-w-2xl mx-auto">
            Scale your store with precision. No hidden fees. <span className="text-indigo-600">30-day free trial</span> on Growth plan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, i) => (
            <Card 
              key={i} 
              className={cn(
                "relative border-none flex flex-col transition-all duration-500 overflow-hidden",
                plan.popular ? "shadow-2xl scale-105 z-10 bg-[#111827] text-white" : "shadow-sm hover:shadow-xl bg-white text-[#111827]"
              )}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-l from-indigo-500 to-purple-600 text-white px-6 py-1.5 rounded-bl-2xl font-black text-xs uppercase tracking-widest">
                   Most Popular
                </div>
              )}

              <CardHeader className="p-10 pb-0">
                <div className={cn(
                  "w-12 h-12 rounded-2xl flex items-center justify-center mb-6",
                  plan.popular ? "bg-white/10" : "bg-[#F3F4F6]"
                )}>
                  {i === 0 ? <Zap className="w-6 h-6 text-indigo-500" /> : i === 1 ? <Sparkles className="w-6 h-6 text-purple-500" /> : <Shield className="w-6 h-6 text-emerald-500" />}
                </div>
                <CardTitle className="text-2xl font-black">{plan.name}</CardTitle>
                <CardDescription className={cn("font-medium mt-2", plan.popular ? "text-white/60" : "text-[#6B7280]")}>
                  {plan.description}
                </CardDescription>
                <div className="pt-8 flex items-baseline gap-1">
                  <span className="text-5xl font-black">${plan.price}</span>
                  <span className={cn("font-bold text-lg", plan.popular ? "text-white/40" : "text-[#9CA3AF]")}>/mo</span>
                </div>
              </CardHeader>

              <CardContent className="p-10 flex-1">
                <div className="space-y-4">
                  {plan.features.map((feature, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <div className={cn(
                        "w-5 h-5 rounded-full flex items-center justify-center",
                        plan.popular ? "bg-indigo-500" : "bg-emerald-50 text-emerald-600"
                      )}>
                        <Check className={cn("w-3 h-3", plan.popular ? "text-white" : "text-emerald-600")} />
                      </div>
                      <span className="font-bold text-sm tracking-tight">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="p-10 pt-0">
                <Button 
                  onClick={() => handlePlanClick(plan)}
                  disabled={loadingPlan === plan.id}
                  className={cn(
                    "w-full h-14 rounded-xl font-black text-lg gap-2 shadow-xl hover:shadow-2xl transition-all group",
                    plan.popular ? "bg-white text-[#111827] hover:bg-[#F3F4F6]" : "bg-[#111827] text-white hover:bg-[#1F2937]"
                  )}
                >
                  {loadingPlan === plan.id && <Loader2 className="w-5 h-5 animate-spin" />}
                  {plan.cta}
                  <ArrowRight className="w-5 h-5 ml-auto opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
           <p className="text-[#6B7280] font-bold text-sm">Need a custom enterprise solution? <Link to="/contact" className="text-indigo-600 cursor-pointer hover:underline">Speak with an expert</Link></p>
        </div>
      </div>
    </div>
  );
}

// Minimal cn utility if not available in context
function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
