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
            <h1>Dashboard</h1>
            {cards.map((item, index) => (
                <Card key={index} titlle={item}
                />
            ))}
            <p>Welcome To My dashboard</p>
            </div>
    );
}
export default Dashboard;