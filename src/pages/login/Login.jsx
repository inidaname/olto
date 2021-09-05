import AppContext from "context/store";
import React, { memo, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import "./login.css";
import firebase from "firebase/app";
import { Redirect } from "react-router-dom";

const Login = () => {
  const [input, setInput] = useState({ input: "", err: "Error" });
  const history = useHistory();

  let { user, modalState } = useContext(AppContext);

  async function signIn(event) {
    event.preventDefault();

    const applicationVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: function (response) {
          console.log("success", response);
        },
        "expired-callback": function () {
          console.log("expired-callback");
        },
      }
    );
    new firebase.auth().signInWithPhoneNumber(
      input.input,
      applicationVerifier
    ).then((confirmationResult) => {
        console.log(confirmationResult);
        return modalState.setModal({
          ...modalState.modal,
          state: "auth",
          provider: confirmationResult,
        });
      })
      .catch((err) => setInput({ ...input, err: err }));

  }

  useEffect(() => {
    if (modalState.modal.state === "loggedIn") {
      history.push("/trades");
    }
  }, [modalState.modal.state])
  return (
    <form className="login">
      {input.err.message}
      <div className="form-field">
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="text"
          value={input.input}
          onChange={(event) =>
            setInput({ ...input, input: event.target.value })
          }
          name="phoneNumber"
          id="phoneNumber"
        />
      </div>
      <button className="btn" onClick={signIn}>Sign In</button>
      <div id="recaptcha-container"></div>
    </form>
  );
};

export default memo(Login);
