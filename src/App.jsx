import Counter from './Counter';
import Users from './Users'

export default function App() {
  return (
    <div>
      <Counter initialValue={5} step={2} />
      <div>
        <Users />
      </div>
    </div>
  );
}