import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import NavBar from "./NavBar"
import Regform from "./Regform"
import Home from "./Home"
import Login from "./Login"
import Contact from "./Contact"
import About  from "./About";   
import './App.css';
const App=()=>{
    return(
        <div>
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Regform" element={<Regform />} />
                    <Route path="/Home" element={<Home/>} />
                    <Route path="/Login" element={<Login />} />
                       <Route path="/Contact" element={<Contact />} />
                          <Route path="/About" element={<About />} />
                </Routes>
            </Router>
        </div>
    )
}
export default App;