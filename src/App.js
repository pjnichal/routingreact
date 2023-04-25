import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
const USER_TYEPES = {
  PUBLIC: "PUBLIC",
  USER: "USER",
  ADMIN: "ADMIN",
};
const CURR_USER = USER_TYEPES.ADMIN;
function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <PublicElement>
              <Home />
            </PublicElement>
          }
        ></Route>

        <Route
          path="/user"
          element={
            <UserElement>
              <User />
            </UserElement>
          }
        ></Route>

        <Route
          path="/admin"
          element={
            <AdminElement>
              <Admin />
            </AdminElement>
          }
        ></Route>

        <Route path="*" element={<div>Page Not Found</div>}></Route>
      </Routes>
    </div>
  );
}

function Home() {
  return <div>Home</div>;
}
function User() {
  return <div>User</div>;
}
function Admin() {
  return <div>admin</div>;
}
function PublicElement({ children }) {
  return children;
}
function UserElement({ children }) {
  if (CURR_USER === USER_TYEPES.USER) {
    return children;
  } else {
    return <div>NO ACCESS TO USER ROUTES</div>;
  }
}
function AdminElement({ children }) {
  if (CURR_USER === USER_TYEPES.ADMIN) {
    return children;
  } else {
    return <Navigate to={"/"}></Navigate>;
  }
}
export default App;
