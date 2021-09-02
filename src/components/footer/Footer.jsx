import React, { useState } from "react";
import { Chat } from "components/";
import { useFetch } from "hooks";
import './footer.css';

import icon from "assets/2186059.png";
import cancel from "assets/153-1534230_town-png.png";

const Footer = () => {
  const [chats, setChats] = useState(false);
  const { data, error, isLoading } = useFetch(
    "https://randomuser.me/api/?results=5"
  );

  return (
    <footer>
      {chats && <Chat />}
      <img
        src={!chats ? icon : cancel}
        className={`icon ${!chats ? "chat-icon" : "cancel-icon"}`}
        onClick={() => setChats(() => !chats)}
        alt=""
      />
    </footer>
  );
};

export default Footer