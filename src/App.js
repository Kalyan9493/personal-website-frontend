import './App.css';
import Header from "./components/Header"
import Login from "./pages/Login"
import Registration from "./pages/Registration"
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
        <Header />
        <div id="name">
          <h2 id="name"> Kalyan Kumar Reddy</h2>
          <h3 id="designation"> Software Engineer</h3>
        </div>
        <Route path="/login" component={Login} ></Route>
        <Route path="/register" component={Registration} ></Route>
    </Router>
  );
}

export default App;
