export default function CounterButton({ children, onClick, disabled }) {
    return (
      <button onClick={onClick} disabled={disabled}>
        {children}
      </button>
    );
  }