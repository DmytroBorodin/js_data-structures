import { MainWrapper } from "./General.styles";
import { MenuItemType } from "../types";
import { menuItems } from "./constants";

function MenuItem({ text, href, children, isRoot }: MenuItemType) {
  if (!children) {
    return (
      <li className={isRoot ? "pr-4 py-2" : "px-4 py-2"}>
        <a className="text-violet-600" href={href}>
          {text}
        </a>
      </li>
    );
  }

  return (
    <li className="pr-4 py-2">
      {text}
      <Menu items={children} />
    </li>
  );
}

const Menu = ({ items }: { items: MenuItemType[] }) => {
  return (
    <ul className="pl-8">
      {items.map((item) => (
        <MenuItem key={item.text.trim().toLowerCase()} {...item} />
      ))}
    </ul>
  );
};

const Tree = () => {
  return (
    <MainWrapper>
      <div className="flex flex-col items-start w-full">
        <h1 className="w-full text-4xl mb-2">Tree</h1>
        <h2 className="mb-6">Nested menu</h2>
        <div>{<Menu items={menuItems} />}</div>
      </div>
    </MainWrapper>
  );
};

export default Tree;
