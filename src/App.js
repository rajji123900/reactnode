import { BrowserRouter as Router, Route ,Switch,Redirect} from 'react-router-dom';

import  Register  from './components/Register';
import Login from './components/Login';
import './App.css';

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route path='/signup' component={Register}/>
            <Route path='/login' component={Login}/>
            {/* <Route path='/main' component={}/> */}
            <Redirect to = '/signup'/>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
