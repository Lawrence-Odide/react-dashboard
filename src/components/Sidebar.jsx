import { NavLink } from "react-router-dom";
function Sidebar() {
    return (
        <div>
            <h2>Menu</h2>
            <ul>
                <li><NavLink to="/">Dashboard</NavLink></li>
                <li><NavLink to="/users">Users</NavLink></li>
                </ul>
                </div>
    );
}
export default Sidebar;