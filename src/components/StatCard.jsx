export const StatCard = ({ title, value, change, icon, trend = 'up' }) => {
  return (
    <div className="bg-[#1e2533] border border-white/10 rounded-xl p-6 hover:border-[#8c36ea]/30 transition-colors">
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 bg-gradient-to-r from-[#8c36ea]/20 to-[#6f65ff]/20 rounded-lg flex items-center justify-center">
          {icon}
        </div>
        {change && (
          <div className={`flex items-center gap-1 text-sm font-medium ${
            trend === 'up' ? 'text-green-500' : 'text-red-400'
          }`}>
            {trend === 'up' ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            )}
            {change}
          </div>
        )}
      </div>
      <h3 className="text-white/60 text-sm font-medium mb-1">{title}</h3>
      <p className="text-white text-3xl font-bold">{value}</p>
    </div>
  );
};
