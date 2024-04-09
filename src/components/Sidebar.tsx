import { Pages } from "../types";
import { sidebarLinks } from "./constants";

interface SidebarProps {
  page: Pages;
  setPage: React.Dispatch<React.SetStateAction<Pages>>;
}

const Sidebar = ({ page, setPage }: SidebarProps) => {
  const handleOnClick = (key: Pages) => {
    setPage(key);
  };

  const links = sidebarLinks.map((item) => (
    <li
      key={item.key}
      className={`${
        item.key === page ? "bg-violet-600 text-white" : ""
      } cursor-pointer px-8 py-4 hover:bg-violet-600 hover:text-white `}
      onClick={() => handleOnClick(item.key as Pages)}
    >
      {item.name}
    </li>
  ));

  return (
    <div className="py-8 shadow w-52 h-lvh">
      <ul>{links}</ul>
    </div>
  );
};

export default Sidebar;
