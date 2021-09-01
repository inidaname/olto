import AppContext from "context/store";
import React, { memo, useContext, useState } from "react";
import "./login.css";
import firebase from "firebase/app";

const Login = () => {
  const [input, setInput] = useState({ input: "", err: "Error" });

  let { modalState } = useContext(AppContext);

  async function signIn(event) {
    event.preventDefault();

    const provider = new firebase.auth.PhoneAuthProvider();
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
    const provided = await provider.verifyPhoneNumber(
      input.input,
      applicationVerifier
    ).catch(err => setInput({...input, err: err}))
    
    if (provided) {
      modalState.setModal({
        ...modalState.modal,
        state: 'auth',
        provider: new Promise(provided)
      });
    }
  }
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
      <button onClick={signIn}>Sign In</button>
      <div id="recaptcha-container"></div>
    </form>
  );
};

export default memo(Login)