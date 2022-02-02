import "./Button.scss";

export default function Button({ children, className, type }) {
  return (
    <button className={`button ${className}`} type={type}>
      {children}
    </button>
  );
}
