import React, { useState } from "react";
import { MainWrapper } from "./General.styles";
import { rows } from "./constants";
import { Row, RowHistoryItem } from "../types";

interface TableRowProps extends Row {
  idx: number;
  onDeleteHandler: (id: string, idx: number) => void;
}

const TableRow = ({ id, name, idx, onDeleteHandler }: TableRowProps) => {
  return (
    <tr key={id}>
      <td className="p-4 border border-slate-600 w-32">{id}</td>
      <td className="p-4 border border-slate-600">{name}</td>
      <td className="p-4 border border-slate-600">
        <button
          onClick={() => onDeleteHandler(id, idx)}
          className="px-6 py-2 rounded m-auto border-red-600 border-2 hover:bg-red-600 hover:text-white"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

const Stack = () => {
  const [rowsData, setRowsData] = useState<Row[]>(rows);
  const [history, setHistory] = useState<RowHistoryItem[]>([]);

  const handleOnDelete = (id: string, idx: number) => {
    setHistory((state) => [...state, { ...rowsData[idx], originalIndex: idx }]);
    setRowsData((state) => state.filter((row) => row.id !== id));
  };

  const handleOnUndo = () => {
    const undoEl = history[history.length - 1];
    const { id, name, originalIndex } = undoEl;
    setRowsData((state) => [
      ...state.slice(0, originalIndex),
      {
        id,
        name,
      },
      ...state.slice(originalIndex),
    ]);
    setHistory((state) => state.slice(0, -1));
  };

  return (
    <MainWrapper>
      <div className="w-full">
        <h1 className="w-full text-4xl mb-8">Stack</h1>
        <button
          disabled={!history.length}
          onClick={handleOnUndo}
          className="px-8 py-4 my-10 rounded m-auto border-violet-600 border-2 hover:bg-violet-600 hover:text-white disabled:border-violet-600/50  disabled:bg-violet-600/50 disabled:text-white "
        >
          Undo last action
        </button>
        <table className="table-auto w-3/5 border-collapse">
          <thead>
            <tr>
              <th className="p-4 border border-slate-600 w-16">ID</th>
              <th className="p-4 border border-slate-600">Name</th>
              <th className="p-4 border border-slate-600 w-32"></th>
            </tr>
          </thead>
          <tbody>
            {rowsData.map(({ id, name }, idx) => (
              <TableRow
                key={id}
                id={id}
                idx={idx}
                name={name}
                onDeleteHandler={handleOnDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
    </MainWrapper>
  );
};

export default Stack;
