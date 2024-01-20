import React from "react";
import { IoMdSend } from "react-icons/io";
const MessageForm = () => {
  return (
    <div class="py-5 border-t-2 flex gap-2">
      <input
        class="w-full bg-gray-300 py-5 px-3 rounded-xl"
        type="text"
        placeholder="type your message here..."
      />
      <button className="p-2 border-2 rounded-lg">
        <IoMdSend />
      </button>
    </div>
  );
};

export default MessageForm;
