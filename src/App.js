import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { Header, Modal, Footer, Content } from 'components/';
import { Login, Trade, Profile } from 'pages/';

import { useAuthState } from 'react-firebase-hooks/auth';
import './App.css';
import { useState, memo } from 'react';
import AppContext from 'context/store';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const App = () => {



  const auth = firebase.auth();
  const firestore = firebase.firestore();

  const [ modal, setModal ] = useState({ state: '', provider: () => new Promise(), err: '' })

  const [ user ] = useAuthState(auth);
  console.log(user)
  return (
    <AppContext.Provider value={{ auth, firestore, modalState: { modal, setModal }}}>
      <div className="container">
        {modal.state === 'auth'  && <Modal />}
        {modal.state === 'content'  && <Content />}
        <Header />
        <main>
          <Router>
            <Switch>
              <Route exact path="/">
                <Login />
              </Route>
              <Route exact path="/trades">
                <Trade />
              </Route>
              <Route exact path="/profile">
                <Profile />
              </Route>
            </Switch>
          </Router>
        </main>
        <Footer />
      </div>
    </AppContext.Provider>
  );
}

export default memo(App);
