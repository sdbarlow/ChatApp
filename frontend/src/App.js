import Action from './components/Action'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Route path="/" exact component={App}/>
      <Action />
      <LogIn />
      <SignUp />
    </Router>
  );
}

export default App;
