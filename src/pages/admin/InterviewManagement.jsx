import { TabLayout } from '../../components/TabLayout';

export const InterviewManagement = () => {
  const tabs = [
    {
      id: 'questions',
      label: 'Question Bank',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      content: <QuestionBankTab />
    },
    {
      id: 'ai',
      label: 'AI Configuration',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      content: <AIConfigTab />
    },
    {
      id: 'sessions',
      label: 'Session Management',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      content: <SessionsTab />
    }
  ];

  const actions = (
    <button className="px-4 py-2 bg-gradient-to-r from-[#8c36ea] to-[#6f65ff] text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2">
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
      </svg>
      Add Question
    </button>
  );

  return (
    <TabLayout
      title="Interview & Content Management"
      subtitle="Manage questions, AI models, and sessions"
      tabs={tabs}
      actions={actions}
    />
  );
};

const QuestionBankTab = () => {
  const questions = [
    { id: 1, question: 'Explain object-oriented programming', role: 'Software Engineer', difficulty: 'Medium', type: 'Technical', uses: 245 },
    { id: 2, question: 'Describe your leadership style', role: 'Product Manager', difficulty: 'Easy', type: 'Behavioral', uses: 189 },
    { id: 3, question: 'How would you optimize database queries?', role: 'Backend Engineer', difficulty: 'Hard', type: 'Technical', uses: 342 },
  ];

  return (
    <div className="space-y-4">
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Search questions..."
          className="flex-1 bg-[#1e2533] border border-white/10 rounded-lg px-4 py-2 text-white placeholder-white/40 focus:outline-none focus:border-[#8c36ea]"
        />
        <select className="bg-[#1e2533] border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#8c36ea]">
          <option>All Types</option>
          <option>Technical</option>
          <option>Behavioral</option>
          <option>Situational</option>
        </select>
        <select className="bg-[#1e2533] border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#8c36ea]">
          <option>All Difficulty</option>
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>
      </div>

      <div className="space-y-3">
        {questions.map((q) => (
          <div key={q.id} className="bg-[#1e2533] border border-white/10 rounded-xl p-6 hover:border-[#8c36ea]/30 transition-colors">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="text-white text-lg font-medium mb-2">{q.question}</h3>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 bg-[#8c36ea]/20 text-[#8c36ea] rounded text-xs font-medium">{q.role}</span>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    q.difficulty === 'Easy' ? 'bg-green-500/20 text-green-400' :
                    q.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>{q.difficulty}</span>
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs font-medium">{q.type}</span>
                  <span className="text-white/60 text-xs ml-2">{q.uses} uses</span>
                </div>
              </div>
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const AIConfigTab = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#1e2533] border border-white/10 rounded-xl p-6">
          <h3 className="text-white text-lg font-semibold mb-4">Model Version</h3>
          <select className="w-full bg-[#0f1419] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#8c36ea]">
            <option>GPT-4 Turbo (Current)</option>
            <option>GPT-4</option>
            <option>GPT-3.5 Turbo</option>
          </select>
        </div>

        <div className="bg-[#1e2533] border border-white/10 rounded-xl p-6">
          <h3 className="text-white text-lg font-semibold mb-4">Scoring Parameters</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-white/60 text-sm">Fluency Weight</span>
              <span className="text-white font-medium">30%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-white/60 text-sm">Confidence Weight</span>
              <span className="text-white font-medium">25%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-white/60 text-sm">Relevance Weight</span>
              <span className="text-white font-medium">45%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#1e2533] border border-white/10 rounded-xl p-6">
        <h3 className="text-white text-lg font-semibold mb-4">Prompt Templates</h3>
        <textarea
          rows={8}
          placeholder="Enter AI prompt template..."
          className="w-full bg-[#0f1419] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#8c36ea] font-mono text-sm"
          defaultValue="Analyze the candidate's response for a [ROLE] position interview..."
        />
        <div className="flex justify-end gap-2 mt-4">
          <button className="px-4 py-2 bg-white/5 text-white text-sm font-medium rounded-lg hover:bg-white/10 transition-colors">
            Reset
          </button>
          <button className="px-4 py-2 bg-gradient-to-r from-[#8c36ea] to-[#6f65ff] text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity">
            Save Template
          </button>
        </div>
      </div>
    </div>
  );
};

const SessionsTab = () => {
  const sessions = [
    { id: 1, user: 'john@example.com', role: 'Software Engineer', status: 'Completed', score: 8.5, date: '2024-11-08', duration: '45 min' },
    { id: 2, user: 'jane@example.com', role: 'Product Manager', status: 'In Progress', score: 0, date: '2024-11-10', duration: '12 min' },
    { id: 3, user: 'bob@example.com', role: 'Data Scientist', status: 'Completed', score: 7.2, date: '2024-11-09', duration: '38 min' },
  ];

  return (
    <div className="space-y-4">
      <div className="bg-[#1e2533] border border-white/10 rounded-xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-[#0f1419] border-b border-white/10">
            <tr>
              <th className="text-left text-white/60 text-sm font-medium px-6 py-3">User</th>
              <th className="text-left text-white/60 text-sm font-medium px-6 py-3">Role</th>
              <th className="text-left text-white/60 text-sm font-medium px-6 py-3">Status</th>
              <th className="text-left text-white/60 text-sm font-medium px-6 py-3">Score</th>
              <th className="text-left text-white/60 text-sm font-medium px-6 py-3">Duration</th>
              <th className="text-left text-white/60 text-sm font-medium px-6 py-3">Date</th>
              <th className="text-left text-white/60 text-sm font-medium px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sessions.map((session) => (
              <tr key={session.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="px-6 py-4 text-white font-medium">{session.user}</td>
                <td className="px-6 py-4 text-white/60 text-sm">{session.role}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    session.status === 'Completed' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {session.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={`font-medium ${session.score > 0 ? 'text-white' : 'text-white/40'}`}>
                    {session.score > 0 ? session.score.toFixed(1) : 'N/A'}
                  </span>
                </td>
                <td className="px-6 py-4 text-white/60 text-sm">{session.duration}</td>
                <td className="px-6 py-4 text-white/60 text-sm">{session.date}</td>
                <td className="px-6 py-4">
                  <button className="text-[#8c36ea] hover:text-[#6f65ff] text-sm font-medium">
                    View Details
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
