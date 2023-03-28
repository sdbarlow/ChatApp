import Action from './components/Action'
import { useState } from 'react'
import MessageDisplay from './components/MessageDisplay'
import Home from './components/Home'
import LoginModal from './components/LogIn'
import { useNavigate } from 'react-router-dom';
import SignUpModal from './components/SignUp'
import { Routes, Route, Link, Outlet } from "react-router-dom"

function App() {
  const navigate = useNavigate();
  const [loggedinuser, setLoggedInUser] = useState("");

  function handleLogin(user) {
    setLoggedInUser(user);
    navigate('/messages/1');
  }
  return (
    <>
    <Routes>
            <Route path="/" exact element={<Home/>}>
              <Route path="/LogIn" element={<LoginModal onLogin={handleLogin}/>}/>
              <Route path="/SignUp" element={<SignUpModal/>}/>
            </Route>
            <Route path="/messages/:id" element={<Action loggedinuser={loggedinuser}/>} />
    </Routes>
    <Outlet/>
    </>
  );
}

export default App;
