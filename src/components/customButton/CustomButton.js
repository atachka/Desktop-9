export function CustomButton({ styles, text, logo }) {
  return (
    <button
      style={{
        cursor: "pointer",
        height: "36px",
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        ...styles,
      }}
    >
      {logo ? <img src={logo} alt="button logo" /> : null}
      {text}
    </button>
  );
}
