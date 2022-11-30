import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import TicketList from "../pages/TicketList";
import NewRecipe from "../pages/NewTicket";
import "bootstrap/dist/css/bootstrap.min.css";
import AdminLoginForm from "./AdminLoginForm";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        <Switch>
          <Route path="/new">
            <NewRecipe user={user} />
          </Route>
          <Route path="/">
            <TicketList />
          </Route>
          <Route>
            <AdminLoginForm></AdminLoginForm>
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;