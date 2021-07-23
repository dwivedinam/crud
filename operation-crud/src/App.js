/* eslint-disable react/jsx-pascal-case */
/* eslint-disable no-unused-vars */
import "./App.css";
import "./index";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Pagenotfound from "./Components/Pagenotfound";
import AddUsers from "./Components/AddUsers";
import EditUSer from "./Components/EditUSer";
import View from "./Components/View";
import Faq from "./Components/Faq";
import QuestionList from "./Components/QuestionList";
import EditFaq from "./Components/EditFaq";
import EmployeList from "./Components/EmployeList";
import EmployeeContextProvider from './/context/Empcontext';
function App() {
  return (
    <div className="container-xl">
      <div className="table-responsive">
        <div className="table-wrapper">
        <EmployeeContextProvider>
            <EmployeList />
        </EmployeeContextProvider>
         
        </div>
      </div>
    </div>

    // <div className="App">
    // <Router>
    //      <Navbar />
    //     <Switch>
    //     <Route  exact path='/' component= {Home} />
    //     <Route  exact path='/about' component= {About}/>
    //     <Route  exact path='/contact' component= {Contact}/>
    //     <Route exact path ='/adduser/add' component = {AddUsers} />
    //     <Route exact path = "/users/edit/:id" component={EditUSer} />
    //     <Route exact path = "/users/faq/:id" component={EditFaq} />
    //     <Route exact path = "/users/:id" component={View} />
    //     <Route exact path ="/faq" component= {Faq} />
    //     <Route exact path ="/test" component= {QuestionList} />
    //     <Route  exact component = {Pagenotfound} />

    //     <About />
    //     <Contact />
    //     </Switch>

    // </Router>

    // </div>
  );
}

export default App;
