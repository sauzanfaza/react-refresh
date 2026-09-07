export default function CounterButton({ children, onClick, disabled }) {
    return (
      <button 
      className="p-4 border border-slate-400 rounded-md shadow-md"
      onClick={onClick} disabled={disabled}>
        {children}
      </button>
    );
  }