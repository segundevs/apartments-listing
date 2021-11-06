import {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Buy from './pages/Buy/Buy';
import Sell from './pages/Sell/Sell';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import Details from './pages/Details/Details';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import Error from './pages/Error/Error';

import PrivateRoute from './components/PrivateRoute';

function App() {
  const [type, setType] = useState('all');
  const [price, setPrice] = useState('all');
  const [location, setLocation] = useState('');
  const [value, setValue] = useState('');


  return (
    <Router >
      <Header />
      <div className="app-container">
        <Switch>
          <Route path="/" exact>
            <Home 
            location={location} 
            setLocation={setLocation} 
            type={type} 
            setType={setType} 
            price={price} 
            setPrice={setPrice} />
          </Route>
          <Route path="/buy">
            <Buy 
            location={location} 
            setLocation={setLocation} 
            type={type} 
            setType={setType} 
            price={price} 
            value={value}
            setValue={setValue}
            setPrice={setPrice} />
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
          <Route>
            <ForgotPassword path="/forgotPassword"/>
          </Route>
          <Route path="/*">
            <Error />
          </Route>
        </Switch>
      </div>
   </Router>
  );
}

export default App;
 