export type Pages =
  | "map"
  | "set"
  | "queue"
  | "stack"
  | "tree"
  | "flatArrayTree";

export type Message = {
  id: number;
  message: string;
  userId: string;
};

export type User = {
  id: string;
  name: string;
};

export type Row = {
  id: string;
  name: string;
};

export type RowHistoryItem = {
  id: string;
  name: string;
  originalIndex: number;
};

export type MenuItemType = {
  isRoot?: boolean;
  text: string;
  href?: string;
  id?: string;
  children?: { text: string; href?: string; id?: string }[];
};

export type FlatArrMenuItem = {
  id: string;
  isRoot?: boolean;
  text: string;
  href?: string;
  children?: string[];
};
