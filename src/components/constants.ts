import { FlatArrMenuItem, Message, Row, User } from "../types";

export const sidebarLinks = [
  {
    name: "Map",
    id: 1,
    key: "map",
  },
  {
    name: "Set",
    id: 2,
    key: "set",
  },
  {
    name: "Stack",
    id: 3,
    key: "stack",
  },
  {
    name: "Queue",
    id: 4,
    key: "queue",
  },
  {
    name: "Tree",
    id: 5,
    key: "tree",
  },
  {
    name: "Flat array tree",
    id: 6,
    key: "flatArrayTree",
  },
];

export const messagesData: Message[] = [
  {
    id: 1,
    message: "Hey guys! how are you?",
    userId: "user-1",
  },
  {
    id: 2,
    message: "I am fine, thanks.",
    userId: "user-2",
  },
  {
    id: 3,
    message: "Me too, thanks. And how are you?",
    userId: "user-3",
  },
  {
    id: 4,
    message: "I'm good too, thanks. I had a wonderful vacation with my family.",
    userId: "user-1",
  },
  {
    id: 5,
    message:
      "Oh, happy to hear it. So you had a nice and active rest, aren't you?",
    userId: "user-2",
  },
  {
    id: 6,
    message: "Yes, exactly",
    userId: "user-1",
  },
  {
    id: 7,
    message: "That's great. Waiting for the photos",
    userId: "user-3",
  },
];

export const users: User[] = [
  {
    id: "user-1",
    name: " Nick",
  },
  {
    id: "user-2",
    name: " Ann",
  },
  {
    id: "user-3",
    name: " John",
  },
];

export const rows: Row[] = [
  {
    id: "id-1",
    name: "Row 1",
  },
  {
    id: "id-2",
    name: "Row 2",
  },
  {
    id: "id-3",
    name: "Row 3",
  },
  {
    id: "id-4",
    name: "Row 4",
  },
  {
    id: "id-5",
    name: "Row 5",
  },
  {
    id: "id-6",
    name: "Row 6",
  },
];

export const menuItems = [
  {
    text: "Menu 1",
    isRoot: true,
    children: [
      {
        text: "Menu 1 1",
        href: "#11",
      },
      {
        text: "Menu 1 2",
        href: "#12",
      },
    ],
  },
  {
    isRoot: true,
    text: "Menu 2",
    href: "#2",
  },
  {
    isRoot: true,
    text: "Menu 3",
    children: [
      {
        text: "Menu 3 1",
        children: [
          {
            id: "311",
            text: "Menu 3 1 1",
            href: "#311",
          },
        ],
      },
    ],
  },
];

export const flattArrMenuItems: FlatArrMenuItem[] = [
  {
    id: "1",
    text: "Menu 1",
    children: ["11", "12"],
    isRoot: true,
  },
  {
    id: "11",
    text: "Menu 1 1",
    href: "#11",
  },
  {
    id: "12",
    text: "Menu 1 2",
    href: "#12",
  },
  {
    id: "2",
    text: "Menu 2",
    href: "#2",
    isRoot: true,
  },
  {
    id: "3",
    text: "Menu 3",
    children: ["31"],
    isRoot: true,
  },
  {
    id: "31",
    text: "Menu 3 1",
    children: ["311"],
  },
  {
    id: "311",
    text: "Menu 3 1 1",
    href: "#311",
  },
];
