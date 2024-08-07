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
import AllProducts from './usestate 25may/AllProducts';
import FunctionProp from './usestate 25may/FunctionProp';
import StyledComponents from './usestate 25may/StyledComponents';
import InlineStyling from './usestate 25may/InlineStyling';
import Todo from './Component/Todo';
import ChildComponent from './usestate 25may/ChildComponent';
import ContactForm from './usestate 25may/Contactform';
import WeatherWeb from './Component/Weather/WeatherWeb';
import Reducer from './usestate 25may/Reducer';
// import ReduxCounter from './Component/ReduxCounter';
// import Reduxtodo from './ReduxTodo/Reduxtodo';
import CallbackComponent from './29June/CallbackComponent';
import UseCallbackComponent from './29June/UseCallbackComponent';
import UseMemoComponent from './29June/UseMemoComponent';
import UseRefComponent from './30June/UseRefComponent';
import UseRef2Component from './30June/UseRef2Component';
import Cart from './Component/Cart';
import Addproduct from './Backened/Addproduct';
import RegisterAdmin from './UserAdmin/RegisterAdmin';
import LoginAdmin from './UserAdmin/LoginAdmin';
import Navbar from './Backened/Navbar';
import YourAddedProducts from './Backened/YourAddedProducts';
import SingleProductPage from './Backened/SingleProductPage';


function App() {  

  return (
    <div className="App">
      <Navbar />
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
        <Route path="/all-products" element={< AllProducts/>} />
        <Route path="/function-props" element={< FunctionProp/>} />
        <Route path="/styled-component" element={< StyledComponents/>} />
        <Route path="/inline-style" element={< InlineStyling/>} />
        <Route path="/todo" element={< Todo/>} />
        <Route path="/childComponent" element={< ChildComponent/>} />
        <Route path="/contactform" element={< ContactForm/>} />
        <Route path="/weather" element={< WeatherWeb/>} />
        <Route path="/reducer" element={< Reducer/>} />
        {/* <Route path="/redux-counter" element={< ReduxCounter/>} /> */}
        {/* <Route path="/redux-todo" element={< Reduxtodo/>} /> */}
        <Route path="/callback" element={< CallbackComponent/>} />
        <Route path="/use-callback" element={< UseCallbackComponent/>} />
        <Route path="/use-memo" element={< UseMemoComponent/>} />
        <Route path="/use-ref" element={< UseRefComponent/>} />
        <Route path="/use-ref2" element={< UseRef2Component/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/add-product" element={<Addproduct />} />
        <Route path="/register-admin" element={<RegisterAdmin />} />
        <Route path="/login-admin" element={<LoginAdmin />} />
        <Route path="/your-added-products" element={<YourAddedProducts   />} />
        <Route path="/product/:id" element={<SingleProductPage   />} />


        </Routes>
        </div>  
  );
  }

  export default App;