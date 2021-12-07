import './App.css';
import Dashboard from './components/Dashboard';
import NavbarDash from './components/NavbarDash';
import Login from './components/Login'
import Register from './components/Register'
import Cart from './components/Cart'
import Orderdata from './components/Orderdata';
import {  Route, Switch} from "react-router-dom";
import Success from './components/Success';
import Front from './components/Front';

function App() {
  return (
   <div>

  <Switch>
        <Route path="/" exact component={Front} />
        <Route path="/Login" exact component={Login} />
        <Route path="/Reg" exact component={Register} />
        <Route path="/Nav" exact component={NavbarDash} />
        <Route path="/Dash" exact component={Dashboard} />
        <Route path="/Dash/cart" exact component={Cart} />
        <Route path="/orders" exact component={Orderdata} />
        <Route path="/Dash/cart/Success" exact component={Success}/>
      </Switch>
   </div>
  );
}

export default App;
