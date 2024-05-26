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



function App() {  
  return (
    <div className="App">
      <Routes>
        <Route path= "/" element={<Home />} />
        <Route path= "/login" element={<Login />} />
        <Route path= "/register" element={<Register />} />
        <Route path= "/mens" element={<Mens />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/use-State" element= {< UseState />}/>
        <Route path="*" element={<NotFound/>}/>
        </Routes>
        </div>  
  );
  }

  export default App;