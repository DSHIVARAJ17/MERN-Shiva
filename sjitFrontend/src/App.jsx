import Home from "./components/functionalComponents/Home";
import About from "./components/Functionalcomponents/About";
import Gallery from "./components/functionalComponents/Gallery";
import Contact from "./components/functionalComponents/Contact";
import SignUp from "./components/functionalComponents/SignUp";
import Navbar from "./components/functionalComponents/Navbar";
import UseEffect from "./components/functionalComponents/UseEffect";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import LoGin from "./components/functionalComponents/Login";
import UseState from "./components/functionalComponents/UseState";
import UseEffectAPI from "./components/functionalComponents/UseEffect";
import UseRef from "./components/functionalComponents/UseRef";
import UseMemo from "./components/functionalComponents/UseMemo";
import UseCallback from "./components/functionalComponents/USeCallback";
import UsecustomHook from "./components/functionalComponents/UsecustomHook";
function App(){

  return(
    <main>
      
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Gallery" element={<Gallery/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
        <Route path="/SignUp"  element={<SignUp/>}></Route>
        <Route path="/UseEffect" element={<UseEffect/>}></Route>
        <Route path="/loGin" element={<LoGin />}></Route>
        <Route path="/UseState" element={<UseState/>}></Route>
        <Route path="/UseEffectAPI" element={<UseEffectAPI/>}></Route>
        <Route path="/UseRef" element={<UseRef/>}></Route>
        <Route path="/UseMemo" element={<UseMemo/>}></Route>
        <Route path="/UseCallback" element={<UseCallback/>}></Route>
        <Route path="/UseCustomHook" element={<UsecustomHook/>}></Route>
      </Routes>
    </BrowserRouter>
  </main>

  );

}

export default App;