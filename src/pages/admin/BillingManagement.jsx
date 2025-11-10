import { TabLayout } from '../../components/TabLayout';

export const BillingManagement = () => {
  const tabs = [
    {
      id: 'pricing',
      label: 'Pricing Configuration',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      content: <PricingTab />
    },
    {
      id: 'transactions',
      label: 'Payment Monitoring',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      content: <TransactionsTab />
    },
    {
      id: 'entitlements',
      label: 'Entitlement Management',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      content: <EntitlementsTab />
    }
  ];

  const actions = (
    <>
      <button className="px-4 py-2 bg-white/5 text-white text-sm font-medium rounded-lg hover:bg-white/10 transition-colors">
        Generate Report
      </button>
      <button className="px-4 py-2 bg-gradient-to-r from-[#8c36ea] to-[#6f65ff] text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
        Create Package
      </button>
    </>
  );

  return (
    <TabLayout
      title="Subscription & Billing"
      subtitle="Manage pricing, payments, and entitlements"
      tabs={tabs}
      actions={actions}
    />
  );
};

const PricingTab = () => {
  const packages = [
    { id: 1, name: 'Single Session', price: '$29', type: 'One-time', users: 3247, active: true },
    { id: 2, name: 'Multi-Session (5)', price: '$119', type: 'Package', users: 1854, active: true },
    { id: 3, name: 'Enterprise', price: '$499', type: 'Monthly', users: 142, active: true },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {packages.map((pkg) => (
          <div key={pkg.id} className="bg-[#1e2533] border border-white/10 rounded-xl p-6 hover:border-[#8c36ea]/30 transition-colors">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-white text-lg font-semibold">{pkg.name}</h3>
                <p className="text-white/60 text-sm">{pkg.type}</p>
              </div>
              <span className={`px-2 py-1 rounded text-xs font-medium ${
                pkg.active ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
              }`}>
                {pkg.active ? 'Active' : 'Inactive'}
              </span>
            </div>
            <p className="text-white text-3xl font-bold mb-4">{pkg.price}</p>
            <div className="flex items-center justify-between text-sm mb-4">
              <span className="text-white/60">Active Users</span>
              <span className="text-white font-medium">{pkg.users}</span>
            </div>
            <div className="flex gap-2">
              <button className="flex-1 px-4 py-2 bg-white/5 text-white text-sm font-medium rounded-lg hover:bg-white/10 transition-colors">
                Edit
              </button>
              <button className="flex-1 px-4 py-2 bg-gradient-to-r from-[#8c36ea] to-[#6f65ff] text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity">
                Configure
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#1e2533] border border-white/10 rounded-xl p-6">
        <h2 className="text-white text-lg font-semibold mb-4">Promo Codes</h2>
        <div className="space-y-3">
          {[
            { code: 'WELCOME50', discount: '50%', uses: 234, expires: '2024-12-31' },
            { code: 'STUDENT20', discount: '20%', uses: 567, expires: '2024-11-30' },
          ].map((promo, i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-[#0f1419] rounded-lg">
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 bg-[#8c36ea]/20 text-[#8c36ea] rounded font-mono font-medium">{promo.code}</span>
                <span className="text-white font-medium">{promo.discount} off</span>
              </div>
              <div className="flex items-center gap-6 text-sm">
                <span className="text-white/60">{promo.uses} uses</span>
                <span className="text-white/60">Expires: {promo.expires}</span>
                <button className="text-[#8c36ea] hover:text-[#6f65ff] font-medium">Edit</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const TransactionsTab = () => {
  const transactions = [
    { id: 1, user: 'john@example.com', amount: '$29', package: 'Single Session', status: 'Completed', date: '2024-11-08' },
    { id: 2, user: 'jane@example.com', amount: '$119', package: 'Multi-Session', status: 'Completed', date: '2024-11-09' },
    { id: 3, user: 'bob@example.com', amount: '$29', package: 'Single Session', status: 'Failed', date: '2024-11-10' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-[#1e2533] border border-white/10 rounded-xl p-6">
          <h3 className="text-white/60 text-sm font-medium mb-2">Total Revenue</h3>
          <p className="text-white text-3xl font-bold">$54,290</p>
          <p className="text-green-500 text-sm mt-2">+18.7% this month</p>
        </div>
        <div className="bg-[#1e2533] border border-white/10 rounded-xl p-6">
          <h3 className="text-white/60 text-sm font-medium mb-2">Completed</h3>
          <p className="text-white text-3xl font-bold">2,847</p>
        </div>
        <div className="bg-[#1e2533] border border-white/10 rounded-xl p-6">
          <h3 className="text-white/60 text-sm font-medium mb-2">Failed</h3>
          <p className="text-white text-3xl font-bold">45</p>
          <p className="text-red-400 text-sm mt-2">1.5% failure rate</p>
        </div>
        <div className="bg-[#1e2533] border border-white/10 rounded-xl p-6">
          <h3 className="text-white/60 text-sm font-medium mb-2">Refunded</h3>
          <p className="text-white text-3xl font-bold">12</p>
        </div>
      </div>

      <div className="bg-[#1e2533] border border-white/10 rounded-xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-[#0f1419] border-b border-white/10">
            <tr>
              <th className="text-left text-white/60 text-sm font-medium px-6 py-3">User</th>
              <th className="text-left text-white/60 text-sm font-medium px-6 py-3">Package</th>
              <th className="text-left text-white/60 text-sm font-medium px-6 py-3">Amount</th>
              <th className="text-left text-white/60 text-sm font-medium px-6 py-3">Status</th>
              <th className="text-left text-white/60 text-sm font-medium px-6 py-3">Date</th>
              <th className="text-left text-white/60 text-sm font-medium px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx) => (
              <tr key={tx.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="px-6 py-4 text-white font-medium">{tx.user}</td>
                <td className="px-6 py-4 text-white/60 text-sm">{tx.package}</td>
                <td className="px-6 py-4 text-white font-medium">{tx.amount}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    tx.status === 'Completed' ? 'bg-green-500/20 text-green-400' :
                    tx.status === 'Failed' ? 'bg-red-500/20 text-red-400' :
                    'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {tx.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-white/60 text-sm">{tx.date}</td>
                <td className="px-6 py-4">
                  <button className="text-[#8c36ea] hover:text-[#6f65ff] text-sm font-medium">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const EntitlementsTab = () => {
  return (
    <div className="space-y-6">
      <div className="bg-[#1e2533] border border-white/10 rounded-xl p-6">
        <h2 className="text-white text-lg font-semibold mb-4">Manage User Credits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="email"
            placeholder="User email..."
            className="bg-[#0f1419] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#8c36ea]"
          />
          <div className="flex gap-2">
            <input
              type="number"
              placeholder="Credits"
              className="flex-1 bg-[#0f1419] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#8c36ea]"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-[#8c36ea] to-[#6f65ff] text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity">
              Update
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#1e2533] border border-white/10 rounded-xl p-6">
        <h2 className="text-white text-lg font-semibold mb-4">Pending Refund Requests</h2>
        <div className="space-y-3">
          {[1, 2].map((i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-[#0f1419] rounded-lg">
              <div>
                <p className="text-white font-medium">john.doe@example.com</p>
                <p className="text-white/60 text-sm">Requested refund for $29 purchase</p>
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-white/5 text-white text-sm font-medium rounded-lg hover:bg-white/10 transition-colors">
                  Reject
                </button>
                <button className="px-4 py-2 bg-green-500/20 text-green-400 text-sm font-medium rounded-lg hover:bg-green-500/30 transition-colors">
                  Approve
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
