import React, { useState, useEffect } from 'react';
import {
  TrendingUp,
  Users,
  ShoppingBag,
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
  MoreVertical,
  Calendar,
  Download
} from 'lucide-react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { api } from '../lib/api';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Skeleton } from '../components/ui/skeleton';
import { toast } from 'react-hot-toast';

export default function Dashboard() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await api.get('/analytics');
        if (response.success) {
          setData(response.data);
        } else {
          toast.error(response.error || 'Failed to fetch dashboard stats');
        }
      } catch (err) {
        toast.error('Network error - check proxy config');
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  if (loading) {
    return <DashboardSkeleton />;
  }

  const {
    stats,
    revenueTrend = [],
    topProducts = []
  } = data || {};

  const formatCurrency = (val: number | undefined) =>
    typeof val === 'number' ? `$${val.toLocaleString()}` : '$0';

  const formatPercentage = (val: number | undefined) =>
    typeof val === 'number' ? `${val}%` : '0%';

  const formatNumber = (val: number | undefined) =>
    typeof val === 'number' ? val.toLocaleString() : '0';

  const statCards = [
    {
      label: 'Total Revenue',
      value: formatCurrency(stats?.totalRevenue30d),
      change: '+12.5%',
      icon: DollarSign,
      positive: true
    },
    {
      label: 'Total Orders',
      value: formatNumber(stats?.totalOrders),
      change: '+5.2%',
      icon: ShoppingBag,
      positive: true
    },
    {
      label: 'Conversion Rate',
      value: formatPercentage(stats?.conversionRate),
      change: '-1.4%',
      icon: TrendingUp,
      positive: false
    },
    {
      label: 'Avg Order Value',
      value: stats?.averageOrderValue ? `$${stats.averageOrderValue.toFixed(2)}` : '$0.00',
      change: '+2.1%',
      icon: Users,
      positive: true
    },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-extrabold text-[#111827]">Dashboard Overview</h1>
          <p className="text-[#6B7280] font-medium mt-1">Real-time store performance and analytics</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="flex gap-2">
            <Calendar className="w-4 h-4" />
            Last 30 Days
          </Button>
          <Button className="flex gap-2 bg-[#6366F1] hover:bg-[#4F46E5] text-white">
            <Download className="w-4 h-4" />
            Export Data
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, i) => (
          <Card key={i} className="border-none shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className="p-2 bg-[#F3F4F6] rounded-lg">
                  <stat.icon className="w-5 h-5 text-[#6366F1]" />
                </div>
                {stat.positive ? (
                  <Badge variant="secondary" className="bg-[#ECFDF5] text-[#10B981] flex gap-1 border-none font-bold">
                    <ArrowUpRight className="w-3 h-3" />
                    {stat.change}
                  </Badge>
                ) : (
                  <Badge variant="secondary" className="bg-[#FEF2F2] text-[#EF4444] flex gap-1 border-none font-bold">
                    <ArrowDownRight className="w-3 h-3" />
                    {stat.change}
                  </Badge>
                )}
              </div>
              <div className="mt-4">
                <p className="text-sm font-semibold text-[#6B7280]">{stat.label}</p>
                <p className="text-2xl font-black text-[#111827] mt-1">{stat.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Charts & Table */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 border-none shadow-sm h-[450px]">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle className="text-xl font-bold">Revenue Trend</CardTitle>
              <CardDescription className="font-medium">Daily revenue breakdown</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="h-[350px] mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueTrend}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366F1" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#6366F1" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f1f1" />
                <XAxis
                  dataKey="date"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#9CA3AF', fontSize: 12 }}
                  tickFormatter={(val) => val.split('-').slice(1).join('/')}
                />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF', fontSize: 12 }} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#fff', borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  itemStyle={{ fontWeight: 600, color: '#6366F1' }}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#6366F1"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorValue)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Top Products Table */}
        <Card className="border-none shadow-sm h-[450px]">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl font-bold">Top Products</CardTitle>
            <CardDescription className="font-medium">Best performing items this month</CardDescription>
          </CardHeader>
          <CardContent className="p-0 overflow-y-auto max-h-[350px]">
            <table className="w-full text-left">
              <thead className="bg-[#F9FAFB] text-[#6B7280] text-xs font-bold uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-4">Product</th>
                  <th className="px-6 py-4 text-right">Sales</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F3F4F6]">
                {topProducts?.map((product: any, i: number) => (
                  <tr key={i} className="hover:bg-[#F9FAFB] transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg overflow-hidden bg-white flex-shrink-0 shadow-sm border border-[#F3F4F6]">
                          <img
                            src={product.image || 'https://via.placeholder.com/40x40?text=P'}
                            alt={product.title}
                            className="w-full h-full object-contain p-1 group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <p className="text-sm font-bold text-[#111827] group-hover:text-[#6366F1] transition-colors">{product.title}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <p className="text-sm font-black text-[#111827]">{product.sales}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function DashboardSkeleton() {
  return (
    <div className="space-y-8 animate-pulse">
      <div className="flex justify-between items-center">
        <div className="space-y-2">
          <Skeleton className="h-10 w-64" />
          <Skeleton className="h-4 w-48" />
        </div>
        <Skeleton className="h-10 w-32" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map(i => <Skeleton key={i} className="h-32 w-full rounded-xl" />)}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Skeleton className="lg:col-span-2 h-[450px] rounded-xl" />
        <Skeleton className="h-[450px] rounded-xl" />
      </div>
    </div>
  );
}
