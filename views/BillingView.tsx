import React from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';
import { DollarSign, CreditCard, Activity } from 'lucide-react';
import GlassCard from '../components/UI/GlassCard';
import { Metric } from '../types';

const data = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 2000 },
  { name: 'Apr', value: 2780 },
  { name: 'May', value: 1890 },
  { name: 'Jun', value: 2390 },
  { name: 'Jul', value: 3490 },
  { name: 'Aug', value: 5200 },
  { name: 'Sep', value: 6100 },
  { name: 'Oct', value: 7800 },
];

const metrics: Metric[] = [
  { label: 'Recurring Revenue', value: '$84,320', trend: 12.5, positive: true },
  { label: 'Pending Payouts', value: '$12,450', trend: 2.1, positive: true },
  { label: 'Avg. Contract Value', value: '$2,850', trend: -0.4, positive: false },
];

const BillingView: React.FC = () => {
  return (
    <div className="p-4 md:p-8 h-full overflow-y-auto pb-24">
      <div className="mb-6 md:mb-8">
        <h1 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">Revenue Hub</h1>
        <p className="text-sm md:text-base text-gray-400">Financial overview and payment gateways.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {metrics.map((metric, i) => (
          <GlassCard key={i} delay={i * 0.1} className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                <DollarSign className="w-5 h-5 text-neon-green" />
              </div>
              <div className={`px-2 py-1 rounded text-xs font-bold ${metric.positive ? 'bg-neon-green/10 text-neon-green' : 'bg-red-500/10 text-red-400'}`}>
                {metric.positive ? '+' : ''}{metric.trend}%
              </div>
            </div>
            <div className="text-2xl md:text-3xl font-mono font-bold text-white mb-1">{metric.value}</div>
            <div className="text-sm text-gray-500">{metric.label}</div>
          </GlassCard>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <GlassCard className="lg:col-span-2 p-6 min-h-[300px] md:min-h-[400px] flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-base md:text-lg text-white">Revenue Growth</h3>
            <div className="flex gap-2">
               <span className="w-3 h-3 rounded-full bg-neon-blue"></span>
               <span className="text-xs text-gray-400">MRR</span>
            </div>
          </div>
          <div className="flex-1 w-full h-full min-h-[200px] md:min-h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00f3ff" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#00f3ff" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" stroke="rgba(255,255,255,0.2)" tick={{fill: 'rgba(255,255,255,0.4)', fontSize: 10}} />
                <YAxis stroke="rgba(255,255,255,0.2)" tick={{fill: 'rgba(255,255,255,0.4)', fontSize: 10}} tickFormatter={(value) => `$${value}`} />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', borderColor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', borderRadius: '8px' }}
                  itemStyle={{ color: '#00f3ff' }}
                />
                <Area type="monotone" dataKey="value" stroke="#00f3ff" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>

        <div className="space-y-6">
          <GlassCard className="p-6">
            <h3 className="font-bold text-base md:text-lg text-white mb-4">Payment Gateways</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                    <CreditCard className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm md:text-base">Stripe</div>
                    <div className="text-xs text-gray-400">Connected</div>
                  </div>
                </div>
                <div className="w-2 h-2 rounded-full bg-neon-green shadow-[0_0_10px_#0aff60]"></div>
              </div>

              <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                    <Activity className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm md:text-base">Airwallex</div>
                    <div className="text-xs text-gray-400">Setup Required</div>
                  </div>
                </div>
                <div className="w-2 h-2 rounded-full bg-yellow-500 shadow-[0_0_10px_orange]"></div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default BillingView;