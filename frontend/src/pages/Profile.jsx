import { useEffect, useState } from 'react';
import axios from 'axios';

function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:3000/api/v1/me', { withCredentials: true })
      .then((res) => setUser(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!user || !user.username) return <p>You are not logged in.</p>;

  return (
    <div>
      <h2>Welcome, {user.username}</h2>
      {user.email && <p>Email: {user.email}</p>}
    </div>
  );
}

export default Profile;
