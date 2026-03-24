import { useState, useEffect } from "react";
function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUsers(data));
  }, []);
  return (
    <div className="users-container">
      <h1>Dashboard</h1>
      <div className="users-container">
        {users.map(user => (
          <div className="user-card"
       key={user.id}>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      </div>
        ))}
      </div>
      </div>
  );
}
export default App;