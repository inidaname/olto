import AppContext from 'context/store';
import React, { memo, useContext, useState } from 'react';
import './profile.css';

const Profile = () => {
  const {firestore} = useContext(AppContext)
  const [profile, setProfile] = useState({fullName: '', email: ''})
  const [userData, setUserData] = useState({fullName: '', email: ''})
  const [notify, setNotify] = useState('');
  firestore.get().then((doc) => {
    if (doc.exists) {
      setUserData({
        fullName: doc.data().fullName,
        email: doc.data().email
      })
    }
  })

  function updateInfor(event) {
    event.preventDefault()
    firestore.set({
      fullName: profile.fullName,
      email: profile.email
    }).then(() => {
      setNotify('Successfully updated your information')
    }).catch(()=> {
      setNotify('There was an error updating your profile')
    })
  }
  return (
    <section className="profile">
        <h3>Update your profile</h3>
        <div className="profile-detail">
          <p>Full Name: {userData.fullName}</p>
          <p>Email: {userData.email}</p>
        </div>
      <form>
        {notify && <p>{notify}</p>}
        <div className="form-field">
          <label htmlFor="fullName">Full Name</label>
           <input type="text" value={profile.fullName} name="fullNmae" id="fullName" onChange={(event)=> setProfile({...profile, fullName: event.target.value}) } />
        </div>
        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input type="email" value={profile.email} name="email" id="email" onChange={(event)=> setProfile({...profile, email: event.target.value})} />
        </div>
        <button className="btn" onClick={(event) => updateInfor(event)}>Update Profile</button>
      </form>
    </section>
  )
}

export default memo(Profile)
