const Button = ({ text, color, children }) => {
    return (
        <button
            onClick={() => {
                console.log(text);
            }}
            style={{ color: color }}
        >
            {text} - {color.toUpperCase()}
            {children}
        </button>
    );
};

Button.defaultProps = {
    color: "white",
};

export default Button;
