
import ClassCompEg from './components/ClassComponents/ClassComponent';
import About from './components/Functionalcomponents/About';
import Contact from './components/Functionalcomponents/Contact';
import Gallery from './components/Functionalcomponents/Gallery';
import Home from './components/Functionalcomponents/Home';
import Signup from './components/Functionalcomponents/Signup';
import Navbar from './components/Functionalcomponents/Navbar';
import './components/CSS/Navbar.css';
function home(){
  return(
    <main>
      <Navbar></Navbar>
      <Home prop="Hello" sjit="sjit"/><hr />
      <Contact/><hr />
      <About/><hr />
      <Gallery/><hr/>
      <Signup/><hr/>
    </main>

  )
}
export default home;
