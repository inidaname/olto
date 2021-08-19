import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { Header, Modal } from 'components/';
import { Login } from 'pages/';

import { useAuthState } from 'react-firebase-hooks/auth';
import './App.css';
import { useState } from 'react';
import AppContext from 'context/store';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const App = () => {

  const auth = firebase.auth();
  const firestore = firebase.firestore();

  const [ modal, setModal ] = useState({state: false, provider: () => new Promise(), err: ''})

  const [ user ] = useAuthState(auth);
  return (
    <AppContext.Provider value={{ auth, firestore, modalState: {modal, setModal} }}>
      <div className="container">
        {modal.state && <Modal />}
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
    </AppContext.Provider>
  );
}

export default App;
