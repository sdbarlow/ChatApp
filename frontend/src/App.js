import Action from './components/Action'
import Home from './components/Home'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import { Routes, Route, Link } from "react-router-dom"

function App() {
  return (
    <>
    <Routes>
              <Route path="/home" element={<Home/>}/>
              <Route path="/home/LogIn" element={<LogIn/>}/>
              <Route path="/home/SignUp" element={<SignUp/>}/>
    </Routes>
    </>
  );
}

export default App;
