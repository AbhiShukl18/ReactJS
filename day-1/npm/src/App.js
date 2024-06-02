import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from "./Component/Home"
import Login from './Component/Login';
import Register from './Component/Register';
import Mens from './Component/Mens';
import Profile from './Component/Profile';
import UseState from './usestate 25may/UseState';
import NotFound from './notfound';
import UseEffect from './usestate 25may/UseEffect';
import UseEffect2 from './usestate 25may/UseEffect2';
import UseEffect3 from './usestate 25may/UseEffect3';
import Routing from './usestate 25may/Routing';
import UserDetails from './Component/UserDetails';
import Mapping from './usestate 25may/Mapping';



function App() {  
  return (
    <div className="App">
      <Routes>
      <Route path="*" element={<NotFound/>}/>
        <Route path= "/" element={<Home />} />
        <Route path= "/login" element={<Login />} />
        <Route path= "/register" element={<Register />} />
        <Route path= "/mens" element={<Mens />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/use-State" element= {< UseState />}/>
        <Route path="/use-effect" element={< UseEffect/>} />
        <Route path="/use-effect2" element={< UseEffect2/>} />
        <Route path="/use-effect3" element={< UseEffect3/>} />
        <Route path="/use-navigate" element= {< Routing/>} /> 
        <Route path="/user/:username" element={< UserDetails/>} />
        <Route path="/mapping" element={< Mapping students={["Abhi", "Rudra", "Shiv"]} />} />

        </Routes>
        </div>  
  );
  }

  export default App;