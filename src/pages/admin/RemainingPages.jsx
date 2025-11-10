export const CareerHub = () => (
  <div className="p-6">
    <h1 className="text-white text-3xl font-bold mb-2">Career Hub & Job Listings</h1>
    <p className="text-white/60 mb-6">Manage job listings and career content</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-[#1e2533] border border-white/10 rounded-xl p-6">
        <h3 className="text-white text-lg font-semibold mb-4">Job Listings</h3>
        <p className="text-white/60 text-sm mb-4">Add, edit, and manage job postings</p>
        <button className="px-4 py-2 bg-gradient-to-r from-[#8c36ea] to-[#6f65ff] text-white text-sm font-medium rounded-lg hover:opacity-90">
          Add Job Listing
        </button>
      </div>
      <div className="bg-[#1e2533] border border-white/10 rounded-xl p-6">
        <h3 className="text-white text-lg font-semibold mb-4">Content Management</h3>
        <p className="text-white/60 text-sm mb-4">Manage career articles and resources</p>
        <button className="px-4 py-2 bg-gradient-to-r from-[#8c36ea] to-[#6f65ff] text-white text-sm font-medium rounded-lg hover:opacity-90">
          Create Article
        </button>
      </div>
    </div>
  </div>
);

export const AnalyticsReports = () => (
  <div className="p-6">
    <h1 className="text-white text-3xl font-bold mb-2">Analytics & Reports</h1>
    <p className="text-white/60 mb-6">Track metrics, generate reports, and analyze data</p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      <div className="bg-[#1e2533] border border-white/10 rounded-xl p-6">
        <h3 className="text-white/60 text-sm font-medium mb-2">Total Sessions</h3>
        <p className="text-white text-3xl font-bold">8,234</p>
        <p className="text-green-500 text-sm mt-2">+8.2% from last month</p>
      </div>
      <div className="bg-[#1e2533] border border-white/10 rounded-xl p-6">
        <h3 className="text-white/60 text-sm font-medium mb-2">Avg Score</h3>
        <p className="text-white text-3xl font-bold">7.8/10</p>
        <p className="text-green-500 text-sm mt-2">+0.5 improvement</p>
      </div>
      <div className="bg-[#1e2533] border border-white/10 rounded-xl p-6">
        <h3 className="text-white/60 text-sm font-medium mb-2">Retention Rate</h3>
        <p className="text-white text-3xl font-bold">78%</p>
        <p className="text-green-500 text-sm mt-2">+3.2% from last month</p>
      </div>
    </div>
    <div className="bg-[#1e2533] border border-white/10 rounded-xl p-6">
      <h2 className="text-white text-lg font-semibold mb-4">Generate Reports</h2>
      <div className="flex gap-4">
        <button className="px-4 py-2 bg-white/5 text-white text-sm font-medium rounded-lg hover:bg-white/10">
          User Analytics
        </button>
        <button className="px-4 py-2 bg-white/5 text-white text-sm font-medium rounded-lg hover:bg-white/10">
          Financial Report
        </button>
        <button className="px-4 py-2 bg-white/5 text-white text-sm font-medium rounded-lg hover:bg-white/10">
          Performance Report
        </button>
      </div>
    </div>
  </div>
);

export const SupportFeedback = () => (
  <div className="p-6">
    <h1 className="text-white text-3xl font-bold mb-2">Support, Feedback & Compliance</h1>
    <p className="text-white/60 mb-6">Manage tickets, feedback, and compliance</p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      <div className="bg-[#1e2533] border border-white/10 rounded-xl p-6">
        <h3 className="text-white/60 text-sm font-medium mb-2">Open Tickets</h3>
        <p className="text-white text-3xl font-bold">23</p>
        <p className="text-red-400 text-sm mt-2">5 urgent</p>
      </div>
      <div className="bg-[#1e2533] border border-white/10 rounded-xl p-6">
        <h3 className="text-white/60 text-sm font-medium mb-2">Avg Response Time</h3>
        <p className="text-white text-3xl font-bold">2.4h</p>
        <p className="text-green-500 text-sm mt-2">-15% improvement</p>
      </div>
      <div className="bg-[#1e2533] border border-white/10 rounded-xl p-6">
        <h3 className="text-white/60 text-sm font-medium mb-2">Satisfaction Rate</h3>
        <p className="text-white text-3xl font-bold">94%</p>
        <p className="text-green-500 text-sm mt-2">+2% from last month</p>
      </div>
    </div>
    <div className="bg-[#1e2533] border border-white/10 rounded-xl p-6">
      <h2 className="text-white text-lg font-semibold mb-4">Recent Tickets</h2>
      <div className="space-y-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center justify-between p-4 bg-[#0f1419] rounded-lg">
            <div>
              <p className="text-white font-medium">Payment Issue - User unable to checkout</p>
              <p className="text-white/60 text-sm">Reported by: john@example.com</p>
            </div>
            <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded text-xs font-medium">
              Urgent
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const SystemSettings = () => (
  <div className="p-6">
    <h1 className="text-white text-3xl font-bold mb-2">System Administration</h1>
    <p className="text-white/60 mb-6">Configure platform settings and monitor system health</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-[#1e2533] border border-white/10 rounded-xl p-6">
        <h3 className="text-white text-lg font-semibold mb-4">Configuration Management</h3>
        <div className="space-y-3">
          <button className="w-full text-left px-4 py-3 bg-[#0f1419] text-white rounded-lg hover:bg-white/5">
            Platform Settings
          </button>
          <button className="w-full text-left px-4 py-3 bg-[#0f1419] text-white rounded-lg hover:bg-white/5">
            API Configuration
          </button>
          <button className="w-full text-left px-4 py-3 bg-[#0f1419] text-white rounded-lg hover:bg-white/5">
            Integration Settings
          </button>
        </div>
      </div>
      <div className="bg-[#1e2533] border border-white/10 rounded-xl p-6">
        <h3 className="text-white text-lg font-semibold mb-4">System Health</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-white/60">AI Model</span>
            <span className="flex items-center gap-2 text-green-400">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Operational
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-white/60">Database</span>
            <span className="flex items-center gap-2 text-green-400">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Operational
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-white/60">Payment Gateway</span>
            <span className="flex items-center gap-2 text-green-400">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Operational
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
);
