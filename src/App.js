import Login from "./components/Login.jsx";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          {/* <Route
            exact
            path="/"
            render={() => {
              return <Redirect to="/" />;
            }}
          /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
