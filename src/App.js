import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Buy from './pages/Buy/Buy';
import Sell from './pages/Sell/Sell';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import Details from './pages/Details/Details';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import Dashboard from './pages/Dashboard/Dashboard';
import Error from './pages/Error/Error';

import PrivateRoute from './components/PrivateRoute';

function App() {

  return (
    <Router >
      <Header />
      <div className="app-container">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/buy">
            <Buy />
          </Route>
          <PrivateRoute path="/sell">
            <Sell />
          </PrivateRoute>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/details/:id">
            <Details />
          </Route>
          <Route path="/password-reset">
            <ForgotPassword />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </div>
   </Router>
  );
}

export default App;
 