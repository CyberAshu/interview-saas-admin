import { StatCard } from '../components/StatCard';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const userGrowthData = [
  { month: 'Jan', users: 8500 },
  { month: 'Feb', users: 9200 },
  { month: 'Mar', users: 9800 },
  { month: 'Apr', users: 10500 },
  { month: 'May', users: 11200 },
  { month: 'Jun', users: 12547 },
];

const sessionsByRoleData = [
  { role: 'Software Eng', sessions: 2847 },
  { role: 'Product Mgr', sessions: 1923 },
  { role: 'Data Scientist', sessions: 1564 },
  { role: 'Designer', sessions: 1245 },
  { role: 'DevOps', sessions: 655 },
];

export const Dashboard = () => {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-white text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-white/60">Platform overview and key metrics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Total Users"
          value="12,547"
          change="+12.5%"
          trend="up"
          icon={
            <svg className="w-6 h-6 text-[#8c36ea]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          }
        />
        <StatCard 
          title="Mock Interviews"
          value="8,234"
          change="+8.2%"
          trend="up"
          icon={
            <svg className="w-6 h-6 text-[#6f65ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          }
        />
        <StatCard 
          title="Active Coaches"
          value="342"
          change="+5.1%"
          trend="up"
          icon={
            <svg className="w-6 h-6 text-[#8c36ea]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          }
        />
        <StatCard 
          title="Total Revenue"
          value="$54,290"
          change="+18.7%"
          trend="up"
          icon={
            <svg className="w-6 h-6 text-[#6f65ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-[#1e2533] border border-white/10 rounded-xl p-6">
          <h2 className="text-white text-lg font-semibold mb-4">User Growth Trend</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={userGrowthData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="month" stroke="rgba(255,255,255,0.6)" />
                <YAxis stroke="rgba(255,255,255,0.6)" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1e2533', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                  labelStyle={{ color: 'white' }}
                />
                <Line type="monotone" dataKey="users" stroke="#8c36ea" strokeWidth={2} dot={{ fill: '#8c36ea', r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-[#1e2533] border border-white/10 rounded-xl p-6">
          <h2 className="text-white text-lg font-semibold mb-4">Interview Sessions by Role</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={sessionsByRoleData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="role" stroke="rgba(255,255,255,0.6)" angle={-45} textAnchor="end" height={80} />
                <YAxis stroke="rgba(255,255,255,0.6)" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1e2533', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                  labelStyle={{ color: 'white' }}
                />
                <Bar dataKey="sessions" fill="#6f65ff" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="bg-[#1e2533] border border-white/10 rounded-xl p-6">
        <h2 className="text-white text-lg font-semibold mb-4">Recent Activities</h2>
        <div className="space-y-3">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex items-center gap-4 p-3 bg-[#0f1419] rounded-lg">
              <div className="w-10 h-10 bg-gradient-to-r from-[#8c36ea]/20 to-[#6f65ff]/20 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-[#8c36ea]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-white text-sm font-medium">New user registration</p>
                <p className="text-white/60 text-xs">john.doe@example.com joined the platform</p>
              </div>
              <span className="text-white/40 text-xs">2 min ago</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
