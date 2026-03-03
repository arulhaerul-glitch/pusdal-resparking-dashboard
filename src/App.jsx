import React, { useState } from 'react';
import { LogOut, Lock, Users } from 'lucide-react';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  if (!user) return <LoginScreen onLogin={setUser} />;

  return <Dashboard user={user} onLogout={() => setUser(null)} />;
}

function LoginScreen({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const users = {
      'master': 'R3gional2BD!',
      'OPS': '123RMUops',
      'MTC': '123RMUmtc'
    };

    if (users[username] === password) {
      onLogin({ username, fullName: username === 'master' ? 'Administrator' : 'Tim ' + username });
    } else {
      setError('Username atau password salah!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl p-8">
        <div className="text-center mb-8">
          <div className="text-5xl mb-4">🅿️</div>
          <h1 className="text-3xl font-bold text-white mb-2">Pusdal Resparking</h1>
          <p className="text-slate-400">Regional 2 Bandung</p>
        </div>
        {error && <div className="bg-red-500/20 border border-red-500/50 text-red-300 p-3 rounded-lg mb-6">{error}</div>}
        <form onSubmit={handleLogin} className="space-y-4">
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500" placeholder="Username" />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500" placeholder="Password" />
          <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2"><Lock size={20} /> Login</button>
        </form>
        <div className="relative my-6"><div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-600"></div></div><span className="relative flex justify-center text-xs px-2 bg-slate-800 text-slate-400">ATAU</span></div>
        <button onClick={() => onLogin({ username: 'Visitor', fullName: 'Pengunjung' })} className="w-full bg-slate-700 hover:bg-slate-600 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2"><Users size={20} /> Visitor</button>
      </div>
    </div>
  );
}

function Dashboard({ user, onLogout }) {
  const [page, setPage] = useState('home');

  return (
    <div className="min-h-screen bg-slate-900 flex">
      <div className="w-64 bg-slate-800 border-r border-slate-700 p-6 flex flex-col">
        <h2 className="text-2xl font-bold text-white mb-8">🅿️ Pusdal</h2>
        <p className="text-emerald-400 font-semibold mb-8">{user.fullName}</p>
        <nav className="space-y-2 flex-1">
          {['home', 'analytics', 'reports', 'settings'].map(p => (
            <button key={p} onClick={() => setPage(p)} className={`w-full text-left px-4 py-2 rounded-lg ${page === p ? 'bg-emerald-600 text-white' : 'text-slate-300 hover:bg-slate-700'}`}> 
              {p === 'home' && '📊 Dashboard'}
              {p === 'analytics' && '📈 Analytics'}
              {p === 'reports' && '📋 Laporan'}
              {p === 'settings' && '⚙️ Pengaturan'}
            </button>
          ))}
        </nav>
        <button onClick={onLogout} className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg flex items-center justify-center gap-2"><LogOut size={18} /> Logout</button>
      </div>
      <div className="flex-1 overflow-auto p-8">
        <h1 className="text-4xl font-bold text-white mb-8">Dashboard Utama</h1>
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg p-6 text-white"><p className="text-sm opacity-90">💰 Total Pendapatan</p><p className="text-3xl font-bold mt-2">Rp 0</p></div>
          <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-lg p-6 text-white"><p className="text-sm opacity-90">🚗 Volume Kendaraan</p><p className="text-3xl font-bold mt-2">0 Unit</p></div>
          <div className="bg-gradient-to-br from-orange-600 to-orange-700 rounded-lg p-6 text-white"><p className="text-sm opacity-90">📦 Stock Peralatan</p><p className="text-3xl font-bold mt-2">0 Item</p></div>
        </div>
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 text-white"> 
          <h2 className="text-xl font-bold mb-4">✅ Status Sistem</h2>
          <p className="text-emerald-300">✓ Sistem berjalan normal</p>
          <p className="text-slate-400 text-sm mt-4">Update: {new Date().toLocaleString('id-ID')}</p>
        </div>
      </div>
    </div>
  );
}

export default App;