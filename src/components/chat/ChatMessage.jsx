import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ChatMessage = ({ chatSender, chatProfile }) => {
  return (
    <div className="chat-messages">
      <div className="chat-sender">
        <img src={chatProfile} className="chat-image" alt="" />
        <div className="message-bar">
          <span className="person-name">{chatSender}</span>
          <div className="message-box sent-message">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
            delectus ab quam aut, enim reiciendis
            <p className="sender">{chatSender}</p>
            <span className="time-sent">
              {new Date().toLocaleTimeString("en-us", {
                hour12: false,
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          </div>
        </div>
      </div>
      <span className="notifications">2 unread</span>
      <div className="chat-reciever">
        <div className="message-bar">
          <span className="person-name">Me Here</span>
          <div className="message-box sent-message">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
            delectus ab quam aut, enim reiciendis
            <p className="sender">Me Here</p>
            <span className="time-sent">
              {new Date().toLocaleTimeString("en-us", {
                hour12: false,
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          </div>
        </div>
      </div>
      <div className="text-input">
        <textarea name="" id="" cols="30" placeholder="send message" rows="6"></textarea> 
        <div className="controls">
          <FontAwesomeIcon className="send-btn" icon={['fas', 'arrow-up']} />
          <FontAwesomeIcon icon={['fas', 'laugh']} />
          <FontAwesomeIcon icon={['fas', 'paperclip']} />
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
