import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { Chat, Header, Modal } from 'components/';
import { Login, Trade } from 'pages/';
import icon from 'assets/2186059.png';
import cancel from 'assets/153-1534230_town-png.png';

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
  const [chats, setChats] = useState(false)

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
              <Route exact path="/trades">
                <Trade />
              </Route>
            </Switch>
          </Router>
        </main>
        <footer>
          {chats && <Chat />}
          <img src={(!chats) ? icon : cancel} className={(!chats) ? 'chat-icon' : 'cancel-icon'} onClick={() => setChats(() => !chats)} alt="" />
        </footer>
      </div>
    </AppContext.Provider>
  );
}

export default App;
