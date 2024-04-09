import React, { useState } from "react";
import { MainWrapper } from "./General.styles";
import { faker } from "@faker-js/faker";

interface NotificationProps {
  message: string;
}

const Notification = ({ message }: NotificationProps) => (
  <p className="py-4 px-8 my-8 shadow bg-sky-400 text-white w-96">{message}</p>
);

const Queue = () => {
  const [notifications, setNotifications] = useState<string[]>([]);

  const addNotification = () => {
    setNotifications((previous) => {
      return previous.concat(`${faker.person.firstName()} joined!`);
    });
    setTimeout(() => {
      setNotifications((previous) => previous.slice(1));
    }, 2000);
  };

  return (
    <MainWrapper>
      <div className="w-full">
        <h1 className="w-full text-4xl mb-8">Queue</h1>
        <button
          onClick={addNotification}
          className="px-8 py-4 rounded m-auto border-violet-600 border-2 hover:bg-violet-600 hover:text-white disabled:border-violet-600/50  disabled:bg-violet-600/50 disabled:text-white "
        >
          Invite user to community
        </button>
        <div className="flex flex-col items-end w-3/6">
          {notifications.map((message) => (
            <Notification
              message={message}
              key={message.trim().toLowerCase()}
            />
          ))}
        </div>
      </div>
    </MainWrapper>
  );
};

export default Queue;
