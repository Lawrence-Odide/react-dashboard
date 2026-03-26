import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUsers(data));
  }, []);
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <Dashboard />
    <div className="users-container">
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
      </div>
  );
}
export default App;