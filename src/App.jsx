import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import Card from "./components/Card";
import Settings from "./pages/Settings";
import Users from "./pages/Users";
import Dashboard from "./pages/Dashboard";
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
      <div style={{ padding: "20px", flex: 1 }}>
    <div style={{ flex: 1, padding: "20px" }}>
      <Routes>
     <Route path="/" element={<Dashboard />} />
    <Route path="/settings" element={<Settings />} />
    <Route path="/users" element={<Users users={users} />} />
      </Routes>
      </div>
      </div>
      </div>
      );
      }
export default App;