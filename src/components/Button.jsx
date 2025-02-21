export default function Button({text, onClick, className}) {
    return (
        <button onClick={onClick} className={`carousel-btn ${className}`}>
            {text}
        </button>
    )
}