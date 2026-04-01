import Card from "../components/Card";
function Dashboard() {
return (
    <div>
        <h1>Dashboard</h1>
        <div
        style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
            <Card title="Users" />
            <Card title="Revenue" />
            <Card title="Order" />
            <Card title="Messages" />
            </div>
            </div>
        );
    }
    export default Dashboard;