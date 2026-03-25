function Card({ title }) {
    return (
        <div style={{
            background: "blue",
            color: "white",
            padding: "20px",
            margin: "10px",
            borderRadius: "8px"
        }}>
            <h3>{title}</h3>
            </div>
    );
}
export default Card;