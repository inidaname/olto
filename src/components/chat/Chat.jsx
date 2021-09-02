import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFetch } from "hooks";
import React, { useState } from "react";
import "./chat.css";
import ChatBar from "./ChatBar";
import ChatMessage from "./ChatMessage";

const Chat = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [chatSender, setChatSender] = useState({ image: "", name: "" });
  const { data, error, isLoading } = useFetch(
    "https://randomuser.me/api/?results=4"
  );

  function openChat(image, fullname) {
    setChatOpen(() => !chatOpen);
    setChatSender({ ...chatSender, image: image, name: fullname });
  }
  return (
    <div className="chat-section">
      <section className="chat-header">
        {!chatOpen && <span>Chat</span>}
        {chatOpen && (
          <FontAwesomeIcon
            onClick={() => setChatOpen(() => !chatOpen)}
            icon={["fas", "chevron-left"]}
          />
        )}
        <FontAwesomeIcon icon={["fas", "edit"]} />
      </section>
      {chatOpen && (
        <ChatMessage
          chatSender={chatSender.name}
          chatProfile={chatSender.image}
        />
      )}
      <div className={`chats ${chatOpen ? `hideChats` : `showChats`}`}>
        {data && (
          <>
            {data.results.map((profile, index) => {
              return (
                <ChatBar
                  key={`chats-${index}`}
                  profile={profile}
                  index={index}
                  openChat={openChat}
                />
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default Chat;
