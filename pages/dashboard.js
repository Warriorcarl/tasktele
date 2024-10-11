import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Dashboard = () => {
  const [telegramChannel, setTelegramChannel] = useState('');
  const [telegramToken, setTelegramToken] = useState('');
  const [message, setMessage] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
    }

    fetch('/api/admin-data', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(res => res.json())
    .then(data => setMessage(data))
    .catch(() => router.push('/login'));
  }, []);

  const handleTelegramSettings = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    const res = await fetch('/api/telegram', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ channel: telegramChannel, token: telegramToken })
    });

    const result = await res.json();
    if (result.success) {
      alert('Telegram settings saved successfully!');
    } else {
      alert('Failed to save settings');
    }
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      {message ? <pre>{JSON.stringify(message, null, 2)}</pre> : <p>Loading...</p>}
      <form onSubmit={handleTelegramSettings}>
        <input
          type="text"
          placeholder="Telegram Channel ID"
          value={telegramChannel}
          onChange={(e) => setTelegramChannel(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Telegram Bot Token"
          value={telegramToken}
          onChange={(e) => setTelegramToken(e.target.value)}
          required
        />
        <button type="submit">Save Telegram Settings</button>
      </form>
    </div>
  );
};

export default Dashboard;
