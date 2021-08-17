import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import {Header} from 'components/';
import { Login } from 'pages/';
import './App.css';

function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <Router>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
          </Switch>
        </Router>
      </main>
    </div>
  );
}

export default App;
