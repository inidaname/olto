import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  ReactReduxFirebaseProvider,
  firebaseReducer
} from 'react-redux-firebase'
import { combineReducers, createStore } from 'redux';
import App from './App';
import { Provider } from 'react-redux';
import firebase from "firebase/app";
import firebaseConfig from './utils/firebase';
import * as serviceWorker from './serviceWorker';

firebase.initializeApp(firebaseConfig)
const rootReducer = combineReducers({
  firebase: firebaseReducer
})

const rrfConfig = {
  userProfile: 'users'
  // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}

const initialState = {}
const store = createStore(rootReducer, initialState)

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch
  // createFirestoreInstance // <- needed if using firestore
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
