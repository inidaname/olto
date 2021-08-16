import React from 'react';
import { FirebaseDatabaseProvider } from "@react-firebase/database";
import './App.css';
import firebaseConfig from './utils/firebase';

function App() {
  return (
    <FirebaseDatabaseProvider firebase={firebaseConfig}>
      <div className="App">
        
      </div>
    </FirebaseDatabaseProvider>
  );
}

export default App;
