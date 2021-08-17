import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import {Header} from 'components/';
import { Login } from 'pages/';
import './App.css';
import { firebaseConfig } from 'util/firebase';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp(firebaseConfig)


const auth = firebase.auth();
const firestore = firebase.firestore();

const App = () => {

  const [user] = useAuthState(auth);
  return (
    <div className="container">
      {user ? 'save' : 'none'}
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
