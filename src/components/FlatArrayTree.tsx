import React from "react";
import { MainWrapper } from "./General.styles";
import { flattArrMenuItems } from "./constants";
import { FlatArrMenuItem } from "../types";

type ItemsByIdType = { [key: string]: FlatArrMenuItem };

interface MenuItemProps {
  itemId: string;
  itemsById: ItemsByIdType;
  isRoot?: boolean;
}

const MenuItem = ({ itemId, itemsById, isRoot }: MenuItemProps) => {
  const item = itemsById[itemId];
  if (!item.children) {
    return (
      <li className={isRoot ? "pr-4 py-2" : "px-4 py-2"}>
        <a className="text-violet-600" href={item.href}>
          {item.text}
        </a>
      </li>
    );
  }
  return (
    <li className="pr-4 py-2">
      {item.text}
      <Menu itemIds={item.children} itemsById={itemsById} />
    </li>
  );
};

const Menu = ({
  itemIds,
  itemsById,
}: {
  itemIds: string[];
  itemsById: ItemsByIdType;
}) => {
  return (
    <ul className="pl-8">
      {itemIds.map((id) => (
        <MenuItem
          key={id}
          itemId={id}
          itemsById={itemsById}
          isRoot={itemsById[id].isRoot}
        />
      ))}
    </ul>
  );
};

const FlatArrayTree = () => {
  const itemsById: ItemsByIdType = flattArrMenuItems.reduce(
    (prev, item) => ({ ...prev, [item.id]: item }),
    {}
  );
  const rootIds = flattArrMenuItems
    .filter(({ isRoot }) => isRoot)
    .map(({ id }) => id);

  return (
    <MainWrapper>
      <div className="flex flex-col items-start w-full">
        <h1 className="w-full text-4xl mb-2">Flat Array Tree</h1>
        <h2 className="mb-6">Nested menu</h2>
        <div>{<Menu itemIds={rootIds} itemsById={itemsById} />}</div>
      </div>
    </MainWrapper>
  );
};

export default FlatArrayTree;
