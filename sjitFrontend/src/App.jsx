
import ClassCompEg from './components/ClassComponents/ClassComponent';
import About from './components/Functionalcomponents/About';
import Contact from './components/Functionalcomponents/Contact';
import Gallery from './components/Functionalcomponents/Gallery';
import Home from './components/Functionalcomponents/Home';
import Signup from './components/Functionalcomponents/Signup';
import Navbar from './components/Functionalcomponents/Navbar';
import './components/CSS/Navbar.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function home(){
  return(
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/Home' element = {<Home properties="Hello" sjit = "SJIT"/>}></Route>
          <Route path='/About' element = {<About/>}></Route>
          <Route path='/Contact' element = {<Contact/>}></Route>
          <Route path='/Signup' element = {<Signup/>}></Route>
          <Route path='/Gallery' element = {<Gallery/>}></Route>
        </Routes>
      </BrowserRouter>

  )
}
export default home;
