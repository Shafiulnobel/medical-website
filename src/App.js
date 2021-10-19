import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Services from './Components/Home/Services/Services';
import Header from './Components/Shared/Header/Header';
import Footer from './Components/Shared/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';
import Detail from './Components/Detail/Detail';
import About from './Components/About/About/About';
import Login from './Components/Login/Login/Login';
import AuthProvider from './Contexts/AuthProvider';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import Register from './Components/Login/Register/Register';
import Appointment from './Components/Appointment/Appointment';
import Doctors from './Components/Doctors/Doctors/Doctors';
function App() {
  return (
    <div className="App">
      
       <Router>
       <AuthProvider>
         <Header></Header>
      <Switch>
        <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/doctors">
            <Doctors />
          </Route>
          <Route path="/appointment">
            <Appointment />
          </Route>
          <PrivateRoute path="/detail/:serviceId">
              <Detail></Detail>
            </PrivateRoute>
          <Route path="*">
            <NotFound />
          </Route>
          
          
        </Switch>
      <Footer></Footer>
      </AuthProvider>
    </Router>
      
    </div>
  );
}

export default App;
