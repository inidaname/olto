import React, { useContext } from "react";
import AppContext from "context/store";
import "./header.css";
import firebase from "firebase";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

const Header = () => {
  const { user } = useContext(AppContext);
  const history = useHistory()
  function signOut() {
    firebase.auth().signOut().then(() => {
      history.push('/');
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <header>
      <Link to="/">Logo</Link>
      {user && <span>{user.displayName ? <Link to="/profile">{user.displayName}</Link> : <Link to="/profile">{user.phoneNumber}</Link>} <span onClick={() => signOut()}>Logout</span></span>}
    </header>
  );
};

export default Header;
