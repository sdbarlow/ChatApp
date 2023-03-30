import Action from './components/Action'
import Account from './components/Account'
import { useState, useEffect } from 'react'
import MessageDisplay from './components/MessageDisplay'
import Home from './components/Home'
import LoginModal from './components/LogIn'
import { useNavigate } from 'react-router-dom';
import SignUpModal from './components/SignUp'
import { Routes, Route, Link, Outlet } from "react-router-dom"

function App() {
  const navigate = useNavigate();
  const [loggedinuser, setLoggedInUser] = useState("");
  const [entireloggedinuser, setEntireLoggedInUser] = useState([])
  const [loggedinusername, setLoggedInUserName] = useState("");
  const [users, setUsers] = useState([]);
  const [convos, setConvos] = useState([]);
  const [checkusersagain, setCheckUsersAgain] = useState(false)

console.log(loggedinuser)

  useEffect(() => {
    console.log("convos ran")
    fetch(`/api/conversations/${loggedinuser}/`)
      .then(resp => resp.json())
      .then(data => {setConvos(JSON.parse(data));
      })
  }, [loggedinuser, checkusersagain])


    
    const handleClick = async (val) => {
    

      const formData = new FormData();
      formData.append("sender", parseInt(loggedinuser));
      formData.append("receiver", parseInt(val));
    
      try {
        const response = await fetch('/api/addconvo/', {
          method: 'POST',
          body: formData,
        });
    
        // Check if the response was successful
        if (response.ok) {
          console.log('User created successfully');
        } else {
          console.error('Error:', response.status);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    setCheckUsersAgain(!checkusersagain)

  
  }

  useEffect(() => {
    fetch('/api/users/')
      .then(resp => resp.json())
      .then(data => {setUsers(JSON.parse(data));
      })
  }, [])

  useEffect(() => {
    if (loggedinuser) {
      fetch(`/api/user/${loggedinuser}/`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({}),
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, [loggedinuser]);
  

  function handleLogin(email, password) {
    for (let i = 0; i < users.length; i++) {
      if (users[i].fields.email === email && users[i].fields.password === password) {
        console.log("user has been created");
        setEntireLoggedInUser(users[i])
        setLoggedInUserName(`${users[i].fields.first_name}` + ` ${users[i].fields.last_name}`)
        setLoggedInUser(users[i].pk);
        navigate('/messages/1');
      } else {
        console.log("username or password incorrect")
      }

    }}
  
    console.log(loggedinuser)
  return (
    <>
    <Routes>
            <Route path="/" exact element={<Home/>}>
              <Route path="/LogIn" element={<LoginModal onLogin={handleLogin}/>}/>
              <Route path="/SignUp" element={<SignUpModal/>}/>
            </Route>
            <Route path="/messages/:id" element={<Action handleClick={handleClick} convos={convos} users={users} entire={entireloggedinuser} loggedinusername={loggedinusername} loggedinuser={loggedinuser}/>} />
            <Route path="/account/:id" element={<Account entire={entireloggedinuser}/>}/>
    </Routes>
    <Outlet/>
    </>
  );
}

export default App;
