import { useState } from 'react';

export const TabLayout = ({ title, subtitle, tabs, actions }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || '');
  const activeTabContent = tabs.find(tab => tab.id === activeTab);

  return (
    <div className="w-full h-full flex flex-col bg-[#0f1419]">
      <div className="flex-shrink-0 border-b border-white/10 bg-[#1e2533]">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-white text-2xl font-bold">{title}</h1>
              {subtitle && (
                <p className="text-white/60 text-sm mt-1">{subtitle}</p>
              )}
            </div>
            {actions && (
              <div className="flex items-center gap-3">
                {actions}
              </div>
            )}
          </div>

          <div className="flex items-center gap-2 overflow-x-auto custom-scrollbar pb-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-lg whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-[#8c36ea] to-[#6f65ff] text-white shadow-lg'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.icon && <span className="flex-shrink-0">{tab.icon}</span>}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6">
        {activeTabContent?.content}
      </div>
    </div>
  );
};
