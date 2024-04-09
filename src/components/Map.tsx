import { Message } from "../types";
import { MainWrapper } from "./General.styles";
import { messagesData, users } from "./constants";

interface MessageItemProps {
  messageData: Message;
  userName: string;
  isOdd: boolean;
}

const MessageItem = ({ messageData, userName, isOdd }: MessageItemProps) => {
  return (
    <div
      key={messageData.id}
      className={`flex flex-col ${isOdd ? "items-start" : "items-end"} my-12`}
    >
      <p>{userName}</p>
      <p className="bg-white rounded shadow w-fit max-w-sm p-8">
        {messageData.message}
      </p>
    </div>
  );
};

const MapExample = () => {
  //  Find corresponsing user using array's methods

  //   const messageItems = messagesData.map((item, idx) => {
  //     const isOdd = idx % 2 !== 0 ? true : false;
  //     const userName = users.find((user) => {
  //       return user.id === item.userId;
  //     })!.name;
  //     return <MessageItem messageData={item} isOdd={isOdd} userName={userName} />;
  //   });

  // Convert users into object to be able to get user name by user's id

  //   const namesById: { [key: string]: string } = users.reduce(
  //     (prev, user) => ({ ...prev, [user.id]: user.name }),
  //     {}
  //   );

  //   const messageItems = messagesData.map((item, idx) => {
  //     const isOdd = idx % 2 !== 0 ? true : false;
  //     return (
  //       <MessageItem
  //key={item.id}
  //         messageData={item}
  //         isOdd={isOdd}
  //         userName={namesById[item.userId]}
  //       />
  //     );
  //   });

  // Create instance of Map to use get method and receive user's name by user' id
  const namesById = new Map(users.map(({ id, name }) => [id, name]));
  const messageItems = messagesData.map((item, idx) => {
    const isOdd = idx % 2 !== 0 ? true : false;
    return (
      <MessageItem
        key={item.id}
        messageData={item}
        isOdd={isOdd}
        userName={namesById.get(item.userId)!}
      />
    );
  });

  return (
    <MainWrapper>
      <div className="flex flex-col items-start w-full">
        <h1 className="w-full text-4xl mb-2">Map</h1>
        <h2 className="mb-6">Team chat</h2>
        <div className="w-full flex flex-col items-center">
          <div className="w-3/5 rounded-lg shadow-md p-8 bg-sky-400/50 h-160 overflow-auto">
            {messageItems}
          </div>
        </div>
      </div>
    </MainWrapper>
  );
};

export default MapExample;
