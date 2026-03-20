import { useState, useEffect } from "react";
import { cn } from "../lib/utils";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  LineChart, 
  Line,
  PieChart,
  Pie,
  Cell
} from "recharts";
import { 
  TrendingUp, 
  TrendingDown, 
  Calendar,
  Filter,
  Download,
  Info,
  Layers,
  MousePointer2,
  Clock,
  ArrowRight,
  Users,
  ShoppingBag
} from "lucide-react";
import { api } from "../lib/api";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Skeleton } from "../components/ui/skeleton";
import { toast } from "react-hot-toast";

const COLORS = ['#6366F1', '#A855F7', '#EC4899', '#F59E0B', '#10B981'];

export default function Analytics() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await api.get('/analytics');
        if (response.success) {
          setData(response.data);
        } else {
          toast.error(response.error || 'Failed to fetch analytics');
        }
      } catch (err) {
        toast.error('Network error - check proxy config');
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  if (loading) return <AnalyticsSkeleton />;

  const { stats, revenueTrend, topProducts } = data || {};

  const pieData = topProducts?.map((p: any) => ({ name: p.title.slice(0, 15), value: p.sales })) || [];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-top-4 duration-700">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-black text-[#111827] tracking-tight">Advanced Analytics</h1>
          <p className="text-[#6B7280] font-semibold mt-1">Deep dive into your store's performance metrics</p>
        </div>
        <div className="flex items-center gap-3">
           <Badge className="bg-[#111827] text-white px-4 py-2 font-bold rounded-xl border-none shadow-lg gap-2">
             <Clock className="w-4 h-4 text-[#A855F7]" />
             Real-time Monitoring
           </Badge>
           <Button variant="outline" size="icon" className="h-10 w-10 border-[#E5E7EB] rounded-xl">
             <Filter className="w-4 h-4" />
           </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 border-none shadow-sm rounded-3xl overflow-hidden bg-white">
           <CardHeader className="flex flex-row items-center justify-between p-8">
             <div>
                <CardTitle className="text-2xl font-black italic">Revenue Growth</CardTitle>
                <CardDescription className="font-bold flex gap-2 items-center">
                   <TrendingUp className="w-4 h-4 text-[#10B981]" />
                   +24% vs last period
                </CardDescription>
             </div>
             <div className="flex gap-2">
                {['D', 'W', 'M', 'Y'].map(t => (
                  <Button key={t} variant="ghost" size="sm" className={cn("rounded-lg font-bold h-8 w-8", t === 'M' ? "bg-[#F3F4F6] text-[#111827]" : "text-[#9CA3AF]")}>{t}</Button>
                ))}
             </div>
           </CardHeader>
           <CardContent className="h-[400px] px-4 pb-12">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={revenueTrend}>
                   <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F3F4F6" />
                   <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#9CA3AF', fontWeight: 600}} />
                   <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#9CA3AF', fontWeight: 600}} />
                   <Tooltip 
                     contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)', fontWeight: 800 }}
                   />
                   <Line 
                    type="step" 
                    dataKey="value" 
                    stroke="#111827" 
                    strokeWidth={4} 
                    dot={{fill: '#6366F1', r: 4, strokeWidth: 0}} 
                    activeDot={{ r: 8, strokeWidth: 0 }}
                   />
                </LineChart>
              </ResponsiveContainer>
           </CardContent>
        </Card>

        <div className="space-y-8">
           <Card className="border-none shadow-sm rounded-3xl bg-[#6366F1] text-white p-8 relative overflow-hidden group">
              <div className="relative z-10 space-y-4">
                 <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md mb-4 group-hover:bg-white/20 transition-colors">
                    <MousePointer2 className="w-6 h-6 text-white" />
                 </div>
                 <h3 className="text-3xl font-black">Conversion Optimizer</h3>
                 <p className="font-bold text-white/70">Your store's current conversion rate is {stats.conversionRate}%, which is higher than 84% of similar stores.</p>
                 <Button className="w-full bg-white text-[#6366F1] hover:bg-white/90 font-black rounded-2xl py-6 border-none shadow-xl mt-4">
                    See Optimization Tips
                 </Button>
              </div>
              <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-white/5 rounded-full blur-xl group-hover:scale-150 transition-transform duration-1000" />
           </Card>

           <Card className="border-none shadow-sm rounded-3xl bg-white p-8">
              <h3 className="text-xl font-black text-[#111827] mb-6">Product Share</h3>
              <div className="h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                   <PieChart>
                      <Pie data={pieData} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                         {pieData.map((entry: any, index: number) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                         ))}
                      </Pie>
                      <Tooltip />
                   </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-6">
                 {pieData.slice(0, 4).map((entry: any, i: number) => (
                    <div key={i} className="flex items-center gap-2">
                       <div className="w-3 h-3 rounded-full" style={{backgroundColor: COLORS[i % COLORS.length]}} />
                       <span className="text-xs font-bold text-[#6B7280] truncate">{entry.name}</span>
                    </div>
                 ))}
              </div>
           </Card>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         {[
           { label: 'Avg Session Duration', value: '4m 32s', icon: Clock, color: '#F59E0B' },
           { label: 'Active Visitors', value: '1,284', icon: Users, color: '#10B981' },
           { label: 'Abandoned Carts', value: '12%', icon: ShoppingBag, color: '#EF4444' },
           { label: 'API Health Status', value: 'Optimal', icon: Layers, color: '#6366F1' },
         ].map((m, i) => (
           <Card key={i} className="border-none shadow-sm rounded-3xl bg-white p-6 hover:shadow-lg transition-all group">
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform" style={{backgroundColor: `${m.color}15`}}>
                    <m.icon className="w-6 h-6" style={{color: m.color}} />
                 </div>
                 <div>
                    <h4 className="text-sm font-bold text-[#6B7280]">{m.label}</h4>
                    <p className="text-xl font-black text-[#111827] mt-1">{m.value}</p>
                 </div>
              </div>
           </Card>
         ))}
      </div>
    </div>
  );
}

function AnalyticsSkeleton() {
  return (
    <div className="space-y-8 animate-pulse">
      <div className="flex justify-between items-end">
        <div className="space-y-2">
           <Skeleton className="h-10 w-64 rounded-xl" />
           <Skeleton className="h-4 w-48 rounded-md" />
        </div>
        <Skeleton className="h-10 w-40 rounded-xl" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         <Skeleton className="lg:col-span-2 h-[500px] rounded-[3rem]" />
         <div className="space-y-8">
            <Skeleton className="h-[230px] rounded-[3rem]" />
            <Skeleton className="h-[230px] rounded-[3rem]" />
         </div>
      </div>
    </div>
  );
}

