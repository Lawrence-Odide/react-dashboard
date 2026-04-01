function Card({ title }) {
    return (
        <div style={{
            background: "#2563eb",
            color: "white",
            padding: "30px",
            borderRadius: "8px",
            minWidth: "120px",
            textAlign: "center",
            fontWeight: "bold"
        }}>
            <h3>{title}</h3>
            </div>
    );
}
export default Card;