// import { Provider } from "react-redux";
// import { store } from "./Task/store";
// import TicketList from "./Task/TicketList";
// import TicketDetails from "./Task/TicketDetails";
// import FilterPanel from "./Task/FilterPanel";
// import SummaryHeader from "./Task/SummaryHeader";
// import ActionPanel from "./Task/ActionPanel";

// export default function App() {
//   return (
//     <Provider store={store}>

//       <SummaryHeader />

//       <FilterPanel />

//       <TicketList />

//       <TicketDetails />

//       <ActionPanel />

//     </Provider>
//   );
// }



// import { useState } from "react";
// import EventDetails from "./Task-18-06-26/EventDetails";
// import FilterBar from "./Task-18-06-26/FilterBar";
// import Summary from "./Task-18-06-26/Summary";
// import EmployeeList from "./Task-18-06-26/EmployeeList";

// const initialEmployees = [
//   { id: 1, name: "Anu", team: "UI", status: "Pending" },
//   { id: 2, name: "Rahul", team: "Backend", status: "Pending" },
//   { id: 3, name: "Sneha", team: "QA", status: "Pending" },
//   { id: 4, name: "Kiran", team: "DevOps", status: "Pending" },
// ];

// export default function App() {
//   const [employees, setEmployees] = useState(initialEmployees);
//   const [filter, setFilter] = useState("All");

//   const handleStatusChange = (id, status) => {
//     setEmployees((prev) =>
//       prev.map((emp) =>
//         emp.id === id ? { ...emp, status } : emp
//       )
//     );
//   };

//   const handleReset = () => {
//     setEmployees(
//       initialEmployees.map((emp) => ({
//         ...emp, status: "Pending",
//       }))
//     );
//   };

//   const filteredEmployees =
//     filter === "All"
//       ? employees
//       : employees.filter((emp) => emp.status === filter);

//   return (
//     <div>
//       <h1>Team Lunch RSVP Planner</h1>

//       <button onClick={handleReset}>Reset All</button>

//       <EventDetails />

//       <FilterBar
//         filter={filter}
//         setFilter={setFilter}
//       />

//       <Summary employees={employees} />

//       <EmployeeList
//         employees={filteredEmployees}
//         onStatusChange={handleStatusChange}
//       />
//     </div>
//   );
// }







// //import VisitorForm from "./19-06-26/VisitorForm";
// import UserStatus from "./MyComponents/UserStatus";

// function App() {
//   return (
//     <div>
//       <UserStatus />
//     </div>
//   );
// }

// export default App;






import MyCounter from "./19-06-26/MyCounter";

function App() {
  return (
    <>
      <MyCounter />
    </>
  );
}

export default App;