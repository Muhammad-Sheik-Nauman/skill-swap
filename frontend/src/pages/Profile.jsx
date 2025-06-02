import { useEffect, useState } from 'react';
import axios
function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/me', {
      credentials: 'include', 
    })
      .then((res) => {
        if (!res.ok) throw new Error('Not authenticated');
        return res.json();
      })
      .then((data) => setUser(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!user) return <p>You are not logged in.</p>;

  return (
    <div>
      <h2>Welcome, {user.username}</h2>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default Profile;
