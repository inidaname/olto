import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


let str = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus harum nobis est molestiae dolorum incidunt optio tempore, quibusdam error voluptas iste velit saepe alias necessitatibus voluptatibus esse accusamus odit numquam.`

const ChatBar = ({profile, index, openChat}) => {
  let fullname = `${profile.name.title}. ${profile.name.first} ${profile.name.last}`
  return (
    <div className="chat-bar" key={`profil-${index}`} onClick={() => openChat(profile.picture.thumbnail, fullname)}>
      <img
        src={profile.picture.thumbnail}
        width="45px"
        height="45px"
        className="chat-image"
        alt=""
      />
      <div className="chat-caption">
        <h4>
          {fullname.length > 20 ? `${fullname.substring(0, 10)}...` : fullname}
        </h4>
        <p>{str.length > 60 ? `${str.substring(0, 60 - 1)} ...` : str}</p>
      </div>
      <span className="chat-mark">
        <FontAwesomeIcon
          className={profile.registered.age < 10 ? "chat-read" : "chat-uread"}
          icon={["fas", profile.registered.age < 10 ? "check-double" : "check"]}
        />
      </span>
      <span className="chat-time">{new Date().toLocaleDateString()}</span>
    </div>
  );
};

export default ChatBar;
