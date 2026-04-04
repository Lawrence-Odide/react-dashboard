import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
function Layout() {
    return (
        <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ padding: "20px" }}>
            <Outlet />
            </div>
        </div>
    );
}
export default Layout;