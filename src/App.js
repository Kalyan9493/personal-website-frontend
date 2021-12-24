import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
// import Login from "./pages/Login"
// import Registration from "./pages/Registration"
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <div id="namediv">
          <h1 id="name"> Kalyan Kumar Reddy</h1>
          <h1 id="designation"> Software Engineer</h1>
        </div>

        {/* <Route path="/login" component={Login} ></Route>
        <Route path="/register" component={Registration} ></Route> */}
      </Router>
      <div id='footer'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
