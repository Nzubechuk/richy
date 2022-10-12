import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Cart from "./pages/Cart";
import CategoryPage from "./pages/CategoryPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductPage from "./pages/ProductPage";
import Register from "./pages/Register";


function App() {
  return (
    <Router>
    <div className="App">
      <div className="home">
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      <div className="cart">
        <Switch>
          <Route path="/Cart">
            <Cart />
          </Route>
        </Switch>
      </div>
      <div className="register">
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
