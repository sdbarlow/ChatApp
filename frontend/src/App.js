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
  const [refetchusers, setReFetchUsers] = useState(false);
  const [message, setMessage] = useState("");

console.log(loggedinuser)

function messChanger(val){
  setMessage(val)
}

useEffect(() => {
  console.log("this was run")
    fetch(`/api/conversations/${loggedinuser}/`)
      .then(resp => resp.json())
      .then(data => {
        setConvos(JSON.parse(data));
      })
    }, [loggedinuser, checkusersagain]);

useEffect(() => {
  const interval = setInterval(() => {
    fetch(`/api/conversations/${loggedinuser}/`)
      .then(resp => resp.json())
      .then(data => {
        setConvos(JSON.parse(data));
      })
      .catch(error => {
        console.error("Error fetching conversations:", error);
      });
  }, 5000);
  return () => clearInterval(interval);
}, [loggedinuser]);



  function submitFunction(event){

    const formData = new FormData();
    formData.append("first_name", event.target.elements.first_name.value);
    formData.append("last_name", event.target.elements.last_name.value);
    formData.append("email", event.target.elements.email.value);
    formData.append("password", event.target.elements.password.value);
    formData.append("img", event.target.elements.img.value);
  
    try {
      const response = fetch('/api/adduser/', {
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
    setReFetchUsers(!refetchusers)
    navigate('/');

  }
    
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
    navigate(`/messages/${val}`)
  }

  useEffect(() => {
    fetch('/api/users/')
      .then(resp => resp.json())
      .then(data => {setUsers(JSON.parse(data));
      })
  }, [refetchusers])

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

    function messageSend(message, currentid){
      const formData = new FormData();
      formData.append("convo", message);
      formData.append("sender", parseInt(loggedinuser))
      formData.append("receiver", parseInt(currentid))
    
      try {
        const response = fetch('/api/postconvo/', {
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
      setMessage("")
    }

  return (
    <>
    <Routes>
            <Route path="/" exact element={<Home/>}>
              <Route path="/LogIn" element={<LoginModal onLogin={handleLogin}/>}/>
              <Route path="/SignUp" element={<SignUpModal submitFunction={submitFunction}/>}/>
            </Route>
            <Route path="/messages/:id" element={<Action messChanger={messChanger} message={message} messageSend={messageSend} handleClick={handleClick} convos={convos} users={users} entire={entireloggedinuser} loggedinusername={loggedinusername} loggedinuser={loggedinuser}/>} />
            <Route path="/account/:id" element={<Account entire={entireloggedinuser}/>}/>
    </Routes>
    <Outlet/>
    </>
  );
}

export default App;
