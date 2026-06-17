// import React from "react";
// import { NavLink, Outlet } from "react-router-dom";

// export default function Dashboard() {
//   return (
//     <div>
//       <h1>Dashboard</h1>

//       <NavLink to="/dashboard/admin">Admin Dashboard</NavLink>
//       <br />

//       <NavLink to="/dashboard/user">User Dashboard</NavLink>

//       <hr />

//       <Outlet />
//     </div>
//   );
// }
import React from 'react'
import { NavLink, Outlet ,useNavigate} from 'react-router-dom'
 
export default function Dashboard() {
  const n=useNavigate()
  return (
    <div>
      <h1>Dashboard</h1>
         <Outlet />
         <hr />
      <NavLink to='/dashboard/admin'>Admin kkk Dashboard</NavLink> <br />
      <NavLink to='/dashboard/user'>User Dashboard</NavLink> <br />
      <button onClick={() => n("/")}>Back</button>
    </div>
  )
}