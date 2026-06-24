export default function FilterBar({
  filter,
  setFilter,
}) {
  return (
    <div>
      <button onClick={() => setFilter("All")}>
        All
      </button>

      <button onClick={() => setFilter("Going")}>
        Going
      </button>

      <button onClick={() => setFilter("Not Going")}>
        Not Going
      </button>

      <button onClick={() => setFilter("Pending")}>
        Pending
      </button>
    </div>
  );
}