import "../../styles/container/Exercice.css";

export default function Exercice({ children, id, className }) {
  return (
    <div className={`exercice ${className}`} id={id}>
      {children}
    </div>
  );
}