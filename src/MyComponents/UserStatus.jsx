import useToggle from "./useToggle";

function UserStatus() {
  const [isOnline, toggleStatus] = useToggle(false);

  return (
    <div>
      <h2>
        Status: {isOnline ? "🟢 Online" : "🔴 Offline"}
      </h2>

      <button onClick={toggleStatus}>
        Change Status
      </button>
    </div>
  );
}

export default UserStatus;