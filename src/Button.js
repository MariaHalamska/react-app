function Button() {
  const handleClick = (e) => (
    (e.target.style.backgroundColor = "orange"),
    (e.target.style.color = "white")
  );

  return (
    <button onDoubleClick={(e) => handleClick(e)} className="button">
      Click me
    </button>
  );
}
export default Button;
