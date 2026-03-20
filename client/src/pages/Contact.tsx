import React, { useState } from 'react';
import { Mail, Phone, Globe, Send, CheckCircle2, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { toast } from 'react-hot-toast';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast.success('Your enquiry has been sent safely!');
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#F9FAFB] flex items-center justify-center p-4">
        <Card className="max-w-md w-full border-none shadow-2xl p-8 text-center animate-in zoom-in duration-500">
          <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-emerald-500" />
          </div>
          <CardTitle className="text-3xl font-black text-slate-900">Enquiry Received!</CardTitle>
          <CardDescription className="text-lg font-medium mt-4 text-slate-500">
            One of our AI growth experts will contact you within 24 hours.
          </CardDescription>
          <Link to="/">
            <Button className="mt-8 w-full h-14 bg-indigo-600 hover:bg-indigo-700 text-white font-black text-lg rounded-2xl">
              Return to Dashboard
            </Button>
          </Link>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F9FAFB] py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Link to="/plans" className="inline-flex items-center gap-2 text-slate-500 hover:text-indigo-600 font-bold mb-12 transition-colors group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Pricing
        </Link>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl font-black text-slate-900 tracking-tighter leading-tight">
                Speak with an <span className="text-indigo-600">Expert</span>
              </h1>
              <p className="text-xl text-slate-500 font-medium">
                Custom solutions for high-volume enterprise stores. Let's design your growth strategy.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Email Us</p>
                  <p className="text-lg font-bold text-slate-900">experts@analytics-pro.com</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Call Sales</p>
                  <p className="text-lg font-bold text-slate-900">+1 (888) AI-GROWTH</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="border-none shadow-2xl overflow-hidden bg-white">
            <CardHeader className="bg-slate-900 text-white p-8">
              <CardTitle className="text-2xl font-black">Contact Form</CardTitle>
              <CardDescription className="text-slate-400 font-medium mt-2">Personalize your enterprise plan</CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-black text-slate-700">Full Name</label>
                    <Input required placeholder="Elon Musk" className="h-12 border-slate-200 rounded-xl focus:ring-indigo-600" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-black text-slate-700">Email Address</label>
                    <Input required type="email" placeholder="example@tesla.com" className="h-12 border-slate-200 rounded-xl" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-black text-slate-700">Phone</label>
                    <Input required type="tel" placeholder="+1 (555) 000-0000" className="h-12 border-slate-200 rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-black text-slate-700">Country</label>
                    <Input required placeholder="United States" className="h-12 border-slate-200 rounded-xl" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-black text-slate-700">Enquiry About</label>
                  <textarea 
                    required 
                    placeholder="Tell us about your store..."
                    className="w-full min-h-[120px] p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-600 outline-none transition-all font-medium text-slate-900 bg-white"
                  />
                </div>
                <Button 
                  disabled={loading}
                  type="submit" 
                  className="w-full h-14 bg-indigo-600 hover:bg-slate-900 text-white font-black text-lg gap-2 rounded-2xl shadow-xl hover:shadow-2xl transition-all"
                >
                  {loading ? 'Sending...' : 'Send Enquiry'}
                  <Send className="w-5 h-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
