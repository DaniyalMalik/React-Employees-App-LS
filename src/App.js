import Routes from './Routes';
import Info from './components/Info';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Routes} />;
        <Route exact path='/dashboard' component={Info} />;
      </Switch>
    </Router>
  );
}

export default App;
