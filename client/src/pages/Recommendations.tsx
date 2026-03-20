import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation, Link } from 'react-router-dom';
import { cn } from '../lib/utils';
import { Sparkles, ArrowRight, Share2, Heart, ShoppingBag, Eye, RefreshCw } from 'lucide-react';
import { api } from '../lib/api';
import { useCart } from '../context/CartContext';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Skeleton } from '../components/ui/skeleton';
import { toast } from 'react-hot-toast';

export default function Recommendations() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const { addItem } = useCart();

  const fetchRecommendations = async () => {
    try {
      const response = await api.get('/recommendations');
      if (response.success) {
        setData(response.data);
      } else {
        toast.error(response.error || 'Failed to fetch recommendations');
      }
    } catch (err) {
      toast.error('Network error - check proxy config');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchRecommendations();
  }, []);

  const handleRefresh = () => {
    setRefreshing(true);
    fetchRecommendations();
  };

  if (loading) {
    return <RecommendationsSkeleton />;
  }

  const recommendations = data?.recommendations || [];

  return (
    <div className="space-y-12 animate-in fade-in zoom-in-95 duration-500 max-w-7xl mx-auto">
      <div className="text-center space-y-4">
        <Badge variant="secondary" className="bg-[#EEF2FF] text-[#6366F1] px-4 py-1.5 rounded-full font-bold border-none shadow-sm">
          🔥 Powered by ShopifyAI
        </Badge>
        <h1 className="text-5xl font-black text-[#111827] tracking-tight">Personalized for You</h1>
        <p className="text-xl text-[#6B7280] font-medium max-w-2xl mx-auto">
          Our advanced algorithms analyzed your store's purchase patterns to suggest high-converting product pairs.
        </p>
        <div className="flex justify-center pt-4">
           <Button 
            onClick={handleRefresh} 
            disabled={refreshing}
            className="rounded-full bg-[#111827] hover:bg-[#1F2937] text-white px-8 py-6 text-lg font-bold gap-3 shadow-xl hover:shadow-2xl transition-all"
           >
            <RefreshCw className={cn("w-5 h-5", refreshing && "animate-spin")} />
            Refresh Recommendations
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {recommendations.map((product: any, i: number) => (
          <Card key={product.id || i} className="group border-none shadow-none bg-transparent h-full flex flex-col">
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-white mb-4 border border-[#F3F4F6] shadow-sm group-hover:shadow-2xl transition-all duration-700">
              <img 
                src={product.image || 'https://via.placeholder.com/400x500?text=Premium+Product'} 
                alt={product.title}
                className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              
              <div className="absolute bottom-6 left-6 right-6 translate-y-8 group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100">
                <div className="flex gap-2">
                  <Button 
                    onClick={() => addItem({
                      id: product.id,
                      title: product.title,
                      price: product.price,
                      image: product.image
                    })}
                    className="flex-1 bg-white hover:bg-[#F3F4F6] text-[#111827] font-black rounded-xl py-6 gap-2 border-none"
                  >
                    <ShoppingBag className="w-5 h-5" />
                    Quick Buy
                  </Button>
                  <Button size="icon" className="bg-white/20 backdrop-blur-md hover:bg-white/40 text-white rounded-xl py-6 p-4 border-none">
                     <Eye className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              <div className="absolute top-6 left-6">
                <Badge className="bg-[#6366F1] text-white border-none font-black px-4 py-2 rounded-xl text-xs uppercase tracking-widest shadow-lg">
                  Top Recommended
                </Badge>
              </div>
              
              <button className="absolute top-6 right-6 p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-red-500 transition-colors">
                <Heart className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-8 space-y-2 text-center flex-1">
              <div className="flex items-center justify-center gap-2 mb-1">
                 <span className="text-xs font-black text-[#6366F1] uppercase tracking-widest">New Arrival</span>
                 <div className="w-1 h-1 rounded-full bg-[#D1D5DB]" />
                 <span className="text-xs font-bold text-[#6B7280]">Limited Collection</span>
              </div>
              <h3 className="text-2xl font-black text-[#111827] leading-tight group-hover:text-[#6366F1] transition-colors">
                {product.title}
              </h3>
              <div className="flex items-center justify-center gap-4 mt-2">
                <span className="text-2xl font-black text-[#111827]">${product.price}</span>
                <span className="text-sm font-bold text-[#9CA3AF] line-through">${(product.price * 1.5).toFixed(0)}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="bg-gradient-to-r from-[#6366F1] to-[#A855F7] border-none rounded-[3rem] p-12 text-white shadow-2xl overflow-hidden relative group">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-1000" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-black/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-1000" />
        
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="max-w-xl space-y-4">
            <h2 className="text-4xl font-black leading-tight italic">Unlock your store's full potential with Intelligent Upselling.</h2>
            <p className="text-lg font-medium text-white/80">
              Users who followed these recommendations saw a 34% increase in Average Order Value (AOV) last month.
            </p>
          </div>
          <Link to="/plans">
            <Button size="lg" className="bg-white hover:bg-[#F3F4F6] text-[#6366F1] font-black rounded-full px-10 py-8 text-xl group/btn shadow-2xl border-none">
              Upgrade to Pro
              <ArrowRight className="ml-3 group-hover/btn:translate-x-2 transition-transform w-6 h-6" />
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
}

function RecommendationsSkeleton() {
  return (
    <div className="space-y-12 animate-pulse max-w-7xl mx-auto">
      <div className="text-center space-y-4">
        <div className="flex justify-center"><Skeleton className="h-8 w-40 rounded-full" /></div>
        <Skeleton className="h-16 w-3/4 mx-auto" />
        <Skeleton className="h-8 w-1/2 mx-auto" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {[1,2,3].map(i => (
          <div key={i} className="space-y-6">
            <Skeleton className="aspect-[4/5] w-full rounded-[2rem]" />
            <Skeleton className="h-8 w-3/4 mx-auto" />
            <Skeleton className="h-6 w-1/4 mx-auto" />
          </div>
        ))}
      </div>
    </div>
  );
}

