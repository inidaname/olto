import AppContext from "context/store";
import React, { useContext, useState } from "react";
import "./modal.css";
import firebase from "firebase";

const Modal = () => {
  const { modalState } = useContext(AppContext);
  const [values, setValues] = useState("");
  const [error, setError] = useState('');


  function verifyCode(event) {
    event.preventDefault();
    modalState.modal.provider.then(verificationId => {
      console.log(verificationId)
      return firebase.auth.PhoneAuthProvider.credential(
        verificationId,
        values)
    }).then(function (phoneCredential) {
      return firebase.auth().signInWithCredential(phoneCredential);
    }).catch(err => setError(err.message))
  }

  return (
    <div className="showModal">
      <form>
        {error && <p>{error}</p>}
        <div className="form-field">
          <label htmlFor="authCode">Auth Code</label>
          <input
            type="text"
            value={values}
            onChange={(event) => setValues(event.target.value)}
            name="authCode"
            id="authCode"
          />
        </div>
        <button onClick={(event) => verifyCode(event)}>Auth</button>
      </form>
    </div>
  );
};

export default Modal