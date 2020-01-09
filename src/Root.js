import React from "react";
import PropTypes from "prop-types";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PublicPage from "./pages/PublicPage";
import PrivatePage from "./pages/PrivatePage";
import Menu from "./Menu";
import Dropdown from "./components/DropdownMenu/Dropdown";

export default function Root({ store }) {
  return (
    <Router>
      <div>
        <Dropdown />

        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <PrivateRoute path="/system">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/protected">
            <PrivatePage />
          </PrivateRoute>
          <PrivateRoute path="/public">
            <PublicPage />
          </PrivateRoute>
        </Switch>
        
        <AuthButton />
      </div>
    </Router>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

function AuthButton() {
  let history = useHistory();

  return fakeAuth.isAuthenticated ? (
    <p>
      Welcome!{" "}
      <button
        onClick={() => {
          fakeAuth.signout(() => history.push("/"));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
}

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

function LoginPage() {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log in</button>
    </div>
  );
}

Root.propTypes = {
  store: PropTypes.object.isRequired
};
