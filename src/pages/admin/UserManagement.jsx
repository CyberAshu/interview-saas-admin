import { TabLayout } from '../../components/TabLayout';

export const UserManagement = () => {
  const tabs = [
    {
      id: 'directory',
      label: 'User Directory',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      content: <UserDirectoryTab />
    },
    {
      id: 'roles',
      label: 'Roles & Permissions',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      content: <RolesTab />
    },
    {
      id: 'activity',
      label: 'Activity Tracking',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      content: <ActivityTrackingTab />
    }
  ];

  const actions = (
    <>
      <button className="px-4 py-2 bg-white/5 text-white text-sm font-medium rounded-lg hover:bg-white/10 transition-colors flex items-center gap-2">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        Export CSV
      </button>
      <button className="px-4 py-2 bg-gradient-to-r from-[#8c36ea] to-[#6f65ff] text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
        Add User
      </button>
    </>
  );

  return (
    <TabLayout
      title="User Management"
      subtitle="Manage users, roles, and permissions"
      tabs={tabs}
      actions={actions}
    />
  );
};

const UserDirectoryTab = () => {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', plan: 'Premium', status: 'Active', joined: '2024-01-15', sessions: 12 },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', plan: 'Free', status: 'Active', joined: '2024-02-20', sessions: 3 },
    { id: 3, name: 'Bob Wilson', email: 'bob@example.com', plan: 'Trial', status: 'Inactive', joined: '2024-03-10', sessions: 0 },
  ];

  return (
    <div className="space-y-4">
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Search users..."
          className="flex-1 bg-[#1e2533] border border-white/10 rounded-lg px-4 py-2 text-white placeholder-white/40 focus:outline-none focus:border-[#8c36ea]"
        />
        <select className="bg-[#1e2533] border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#8c36ea]">
          <option>All Status</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>
        <select className="bg-[#1e2533] border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#8c36ea]">
          <option>All Plans</option>
          <option>Premium</option>
          <option>Free</option>
          <option>Trial</option>
        </select>
      </div>

      <div className="bg-[#1e2533] border border-white/10 rounded-xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-[#0f1419] border-b border-white/10">
            <tr>
              <th className="text-left text-white/60 text-sm font-medium px-6 py-3">User</th>
              <th className="text-left text-white/60 text-sm font-medium px-6 py-3">Plan</th>
              <th className="text-left text-white/60 text-sm font-medium px-6 py-3">Status</th>
              <th className="text-left text-white/60 text-sm font-medium px-6 py-3">Joined</th>
              <th className="text-left text-white/60 text-sm font-medium px-6 py-3">Sessions</th>
              <th className="text-left text-white/60 text-sm font-medium px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="px-6 py-4">
                  <div>
                    <p className="text-white font-medium">{user.name}</p>
                    <p className="text-white/60 text-sm">{user.email}</p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    user.plan === 'Premium' ? 'bg-[#8c36ea]/20 text-[#8c36ea]' :
                    user.plan === 'Free' ? 'bg-blue-500/20 text-blue-400' :
                    'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {user.plan}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    user.status === 'Active' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                  }`}>
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-white/60 text-sm">{user.joined}</td>
                <td className="px-6 py-4 text-white font-medium">{user.sessions}</td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <button className="text-white/60 hover:text-white">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                    </button>
                    <button className="text-red-400 hover:text-red-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const RolesTab = () => {
  const roles = [
    { id: 1, name: 'Admin', users: 5, permissions: 'Full access to all features' },
    { id: 2, name: 'Coach', users: 342, permissions: 'Manage sessions, view reports' },
    { id: 3, name: 'User', users: 12540, permissions: 'Basic platform access' },
    { id: 4, name: 'Partner', users: 28, permissions: 'Custom partner features' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {roles.map((role) => (
        <div key={role.id} className="bg-[#1e2533] border border-white/10 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white text-lg font-semibold">{role.name}</h3>
            <span className="px-3 py-1 bg-[#8c36ea]/20 text-[#8c36ea] rounded-full text-sm font-medium">
              {role.users} users
            </span>
          </div>
          <p className="text-white/60 text-sm mb-4">{role.permissions}</p>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-white/5 text-white text-sm font-medium rounded-lg hover:bg-white/10 transition-colors">
              Edit Role
            </button>
            <button className="px-4 py-2 bg-gradient-to-r from-[#8c36ea] to-[#6f65ff] text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity">
              Manage Permissions
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

const ActivityTrackingTab = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#1e2533] border border-white/10 rounded-xl p-6">
          <h3 className="text-white/60 text-sm font-medium mb-2">High Engagement Users</h3>
          <p className="text-white text-3xl font-bold">847</p>
          <p className="text-green-500 text-sm mt-2">+12.5% from last month</p>
        </div>
        <div className="bg-[#1e2533] border border-white/10 rounded-xl p-6">
          <h3 className="text-white/60 text-sm font-medium mb-2">Inactive Users</h3>
          <p className="text-white text-3xl font-bold">1,234</p>
          <p className="text-red-400 text-sm mt-2">+5.2% from last month</p>
        </div>
        <div className="bg-[#1e2533] border border-white/10 rounded-xl p-6">
          <h3 className="text-white/60 text-sm font-medium mb-2">Avg Session Feedback</h3>
          <p className="text-white text-3xl font-bold">4.6/5</p>
          <p className="text-green-500 text-sm mt-2">+0.3 from last month</p>
        </div>
      </div>

      <div className="bg-[#1e2533] border border-white/10 rounded-xl p-6">
        <h2 className="text-white text-lg font-semibold mb-4">Recent User Activity</h2>
        <div className="space-y-3">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex items-center gap-4 p-3 bg-[#0f1419] rounded-lg">
              <div className="w-10 h-10 bg-gradient-to-r from-[#8c36ea]/20 to-[#6f65ff]/20 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-[#8c36ea]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-white text-sm font-medium">john.doe@example.com</p>
                <p className="text-white/60 text-xs">Completed mock interview - Software Engineer role</p>
              </div>
              <span className="text-white/40 text-xs">2 hours ago</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
