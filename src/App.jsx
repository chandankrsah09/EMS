import React, { useContext, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext)
  console.log(authData);
  

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser('admin');
    } else if (email == "user@me.com" && password == "123") {
      setUser('user');
    } else {
      alert("Invalid Credentials");
    }
  };
  
  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? <AdminDashboard /> : <EmployeeDashboard />}
    </>
  );
};

export default App;
