import { TabLayout } from '../../components/TabLayout';

export const CoachManagement = () => {
  const tabs = [
    {
      id: 'directory',
      label: 'Coach Directory',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      content: <CoachDirectoryTab />
    },
    {
      id: 'performance',
      label: 'Performance Dashboard',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      content: <PerformanceTab />
    },
    {
      id: 'partners',
      label: 'Partner Management',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      content: <PartnersTab />
    }
  ];

  const actions = (
    <>
      <button className="px-4 py-2 bg-white/5 text-white text-sm font-medium rounded-lg hover:bg-white/10 transition-colors">
        Pending Approvals (5)
      </button>
      <button className="px-4 py-2 bg-gradient-to-r from-[#8c36ea] to-[#6f65ff] text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
        Add Coach
      </button>
    </>
  );

  return (
    <TabLayout
      title="Coach & Partner Management"
      subtitle="Manage coaches, partners, and their performance"
      tabs={tabs}
      actions={actions}
    />
  );
};

const CoachDirectoryTab = () => {
  const coaches = [
    { id: 1, name: 'Sarah Johnson', expertise: 'Software Engineering', status: 'Approved', rating: 4.8, sessions: 145, revenue: '$12,450' },
    { id: 2, name: 'Michael Chen', expertise: 'Product Management', status: 'Approved', rating: 4.9, sessions: 203, revenue: '$18,720' },
    { id: 3, name: 'Emily Davis', expertise: 'Data Science', status: 'Pending', rating: 0, sessions: 0, revenue: '$0' },
  ];

  return (
    <div className="space-y-4">
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Search coaches..."
          className="flex-1 bg-[#1e2533] border border-white/10 rounded-lg px-4 py-2 text-white placeholder-white/40 focus:outline-none focus:border-[#8c36ea]"
        />
        <select className="bg-[#1e2533] border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#8c36ea]">
          <option>All Status</option>
          <option>Approved</option>
          <option>Pending</option>
          <option>Rejected</option>
        </select>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {coaches.map((coach) => (
          <div key={coach.id} className="bg-[#1e2533] border border-white/10 rounded-xl p-6 hover:border-[#8c36ea]/30 transition-colors">
            <div className="flex items-start justify-between">
              <div className="flex gap-4">
                <div className="w-16 h-16 bg-gradient-to-r from-[#8c36ea]/20 to-[#6f65ff]/20 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#8c36ea]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white text-lg font-semibold">{coach.name}</h3>
                  <p className="text-white/60 text-sm">{coach.expertise}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      coach.status === 'Approved' ? 'bg-green-500/20 text-green-400' :
                      coach.status === 'Pending' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {coach.status}
                    </span>
                    {coach.rating > 0 && (
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-white text-sm font-medium">{coach.rating}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-white/5 text-white text-sm font-medium rounded-lg hover:bg-white/10 transition-colors">
                  View Profile
                </button>
                <button className="px-4 py-2 bg-gradient-to-r from-[#8c36ea] to-[#6f65ff] text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity">
                  Manage
                </button>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-white/10">
              <div>
                <p className="text-white/60 text-xs">Sessions</p>
                <p className="text-white text-lg font-semibold">{coach.sessions}</p>
              </div>
              <div>
                <p className="text-white/60 text-xs">Revenue</p>
                <p className="text-white text-lg font-semibold">{coach.revenue}</p>
              </div>
              <div>
                <p className="text-white/60 text-xs">Rating</p>
                <p className="text-white text-lg font-semibold">{coach.rating || 'N/A'}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const PerformanceTab = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-[#1e2533] border border-white/10 rounded-xl p-6">
          <h3 className="text-white/60 text-sm font-medium mb-2">Top Performer</h3>
          <p className="text-white text-xl font-bold">Michael Chen</p>
          <p className="text-[#8c36ea] text-sm mt-1">4.9 ★ rating</p>
        </div>
        <div className="bg-[#1e2533] border border-white/10 rounded-xl p-6">
          <h3 className="text-white/60 text-sm font-medium mb-2">Avg Session Rating</h3>
          <p className="text-white text-3xl font-bold">4.7</p>
        </div>
        <div className="bg-[#1e2533] border border-white/10 rounded-xl p-6">
          <h3 className="text-white/60 text-sm font-medium mb-2">Total Sessions</h3>
          <p className="text-white text-3xl font-bold">2,847</p>
        </div>
        <div className="bg-[#1e2533] border border-white/10 rounded-xl p-6">
          <h3 className="text-white/60 text-sm font-medium mb-2">Total Revenue</h3>
          <p className="text-white text-3xl font-bold">$142K</p>
        </div>
      </div>

      <div className="bg-[#1e2533] border border-white/10 rounded-xl p-6">
        <h2 className="text-white text-lg font-semibold mb-4">Coach Utilization Rate</h2>
        <div className="h-64 flex items-center justify-center text-white/40">
          Chart will be integrated here
        </div>
      </div>
    </div>
  );
};

const PartnersTab = () => {
  const partners = [
    { id: 1, name: 'Stanford University', type: 'University', users: 847, plan: 'Enterprise' },
    { id: 2, name: 'Google Inc.', type: 'Corporate', users: 1250, plan: 'Custom' },
    { id: 3, name: 'MIT', type: 'University', users: 623, plan: 'Enterprise' },
  ];

  return (
    <div className="grid grid-cols-1 gap-4">
      {partners.map((partner) => (
        <div key={partner.id} className="bg-[#1e2533] border border-white/10 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-white text-lg font-semibold">{partner.name}</h3>
              <p className="text-white/60 text-sm">{partner.type}</p>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-white/5 text-white text-sm font-medium rounded-lg hover:bg-white/10 transition-colors">
                View Report
              </button>
              <button className="px-4 py-2 bg-gradient-to-r from-[#8c36ea] to-[#6f65ff] text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity">
                Configure
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-white/10">
            <div>
              <p className="text-white/60 text-xs">Active Users</p>
              <p className="text-white text-lg font-semibold">{partner.users}</p>
            </div>
            <div>
              <p className="text-white/60 text-xs">Plan Type</p>
              <p className="text-white text-lg font-semibold">{partner.plan}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
