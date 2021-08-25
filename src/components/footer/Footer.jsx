import React, { useState } from "react";
import { Chat } from "components/";

import icon from "assets/2186059.png";
import cancel from "assets/153-1534230_town-png.png";

export const Footer = () => {
  const [chats, setChats] = useState(false);
  return (
    <footer>
      {chats && <Chat />}
      <img
        src={!chats ? icon : cancel}
        className={!chats ? "chat-icon" : "cancel-icon"}
        onClick={() => setChats(() => !chats)}
        alt=""
      />
    </footer>
  );
};
