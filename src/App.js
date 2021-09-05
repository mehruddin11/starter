import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Dashboard,Login,Errorpage} from './pages'
function App() {
  return (
  <Router>
  <Switch>
    <Route path = '/'exact >
      <Dashboard></Dashboard>
    </Route>
    <Route path = '/login'>
      <Login/>
    </Route>
    <Route path ='*'>
      <Errorpage/>
    </Route>
    </Switch>
  </Router>
    
  );
}

export default App;
