import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import { Header, Modal, Footer, Content } from "components/";
import { Login, Trade, Profile } from "pages/";

import { useAuthState } from "react-firebase-hooks/auth";
import "./App.css";
import { useState, memo } from "react";
import AppContext from "context/store";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { GuardedRoute } from "components";

const App = () => {
  // firebase.auth().settings.appVerificationDisabledForTesting = true;

  const auth = firebase.auth();
  const firestore = firebase.firestore();

  const [modal, setModal] = useState({
    state: "",
    provider: () => new Promise(),
    err: "",
  });

  const [user] = useAuthState(auth);

  const contextValue = {
    user,
    auth,
    firestore: (user) ? firestore.collection("profile").doc(user?.uid) : null,
    modalState: { modal, setModal },
  };

  return (
    <AppContext.Provider value={contextValue}>
      <div className="container">
        {modal.state === "auth" && <Modal />}
        {modal.state === "content" && <Content />}
        <Router>
          <Header />
          <main>
            <Switch>
              <Route
                exact
                path="/"
                render={() => (user ? <Redirect to="/trades" /> : <Login />)}
              />
              <GuardedRoute path="/trades" component={Trade} />
              <GuardedRoute path="/profile" component={Profile} />
            </Switch>
          </main>
        </Router>
        <Footer />
      </div>
    </AppContext.Provider>
  );
};

export default memo(App);
