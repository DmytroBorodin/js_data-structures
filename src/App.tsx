import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Stack from "./components/Stack";
import { Pages } from "./types";
import Queue from "./components/Queue";
import MapExample from "./components/Map";
import SetExample from "./components/Set";
import Tree from "./components/Tree";
import FlatArrayTree from "./components/FlatArrayTree";

function App() {
  const [page, setPage] = useState<Pages>("map");
  return (
    <>
      <Navbar />
      <div className="flex items-stretch">
        <Sidebar page={page} setPage={setPage} />
        {page === "map" && <MapExample />}
        {page === "set" && <SetExample />}
        {page === "stack" && <Stack />}
        {page === "queue" && <Queue />}
        {page === "tree" && <Tree />}
        {page === "flatArrayTree" && <FlatArrayTree />}
      </div>
    </>
  );
}

export default App;
