import { NavLink } from "react-router-dom";
function Sidebar() {
    return (
        <div style={{ width: "200px", background: "black",
            color: "white", padding: "20px", minHeight: "100vh" }}>
            <h2>Menu</h2>
            <ul style={{ listStyle: "none", padding: 0 }}>
                <li><NavLink to="/">Dashboard</NavLink></li>
                <li><NavLink to="/users">Users</NavLink></li>
                <NavLink to="/settings">Setting</NavLink>
                </ul>
                </div>
    );
}
export default Sidebar;