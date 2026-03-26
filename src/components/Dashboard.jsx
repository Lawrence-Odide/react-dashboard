import Card from "./Card";
function Dashboard() {
    const cards = [
        "Users",
        "Revenue",
        "Orders",
        "Messages",
    ];
    return (
        <div className="dashboard">
            <div style={{ padding: "20px", width: "100%" }}>
            <h1>Dashboard</h1>
            <div style={{ display: "flex", gap: "20px", 
                marginBotton: "30px" }}>
            {cards.map((item, index) => (
                <Card key={index} titlle={item}
                />
            ))}
            </div>
            </div>
            </div>
    );
}
export default Dashboard;