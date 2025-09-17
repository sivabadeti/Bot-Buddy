import './App.css';
import {Routes, Route } from "react-router-dom";
import { Login } from './components/login';
import { Newuser } from './components/newuser'
import { Mainpage } from './components/mainpage';
import { About } from './components/about';


function App() {
  return(
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/newuser' element={<Newuser/>}/>
      <Route path='/mainpage' element={<Mainpage/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
  )
}
export default App;