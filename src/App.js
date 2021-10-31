import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Buy from './pages/Buy/Buy';
import Sell from './pages/Sell/Sell';
import Login from './pages/Login/Login';
import Details from './pages/Details/Details';
import Footer from './components/Footer/Footer';

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
          <Route path="/sell">
            <Sell />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/details/:id">
            <Details />
          </Route>
        </Switch>
        <Footer />
      </div>
   </Router>
  );
}

export default App;
 