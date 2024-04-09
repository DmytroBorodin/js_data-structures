import React, { useState } from "react";
import { MainWrapper } from "./General.styles";
import { rows } from "./constants";

interface TableRowProps {
  id: string;
  name: string;
  isSelected: boolean;
  handleOnChange: () => void;
}

const TableRow = ({ id, name, isSelected, handleOnChange }: TableRowProps) => {
  return (
    <tr key={id}>
      <td className="p-4 border border-slate-600 w-16">
        <div className="flex justify-center">
          {" "}
          <input
            className="w-4 h-4"
            type="checkbox"
            checked={isSelected}
            onChange={handleOnChange}
          />
        </div>
      </td>
      <td className="p-4 border border-slate-600 w-32">{id}</td>
      <td className="p-4 border border-slate-600">{name}</td>
    </tr>
  );
};

const SetExample = () => {
  const [selectedIds, setSelectedIds] = useState(
    rows.map((row) => ({ id: row.id, isSelected: false }))
  );

  const handleOnChange = (id: string) => {
    setSelectedIds((state) =>
      state.map((item) => {
        if (item.id === id)
          return { id: item.id, isSelected: item.isSelected ? false : true };
        else return item;
      })
    );
  };

  //   const [selectedIds, setSelectedIds] = useState(new Set());

  //   const handleOnChange = (id: string) => {
  //     const updatedIdToSelected = new Set(selectedIds);
  //     if (updatedIdToSelected.has(id)) {
  //       updatedIdToSelected.delete(id);
  //     } else {
  //       updatedIdToSelected.add(id);
  //     }
  //     setSelectedIds(updatedIdToSelected);
  //   };

  return (
    <MainWrapper>
      <div className="w-full">
        <h1 className="w-full text-4xl mb-8">Set</h1>
        <table className="table-auto w-3/5 border-collapse">
          <thead>
            <tr>
              <th className="p-4 border border-slate-600 w-16"></th>
              <th className="p-4 border border-slate-600 w-16">ID</th>
              <th className="p-4 border border-slate-600">Name</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(({ id, name }) => (
              <TableRow
                key={id}
                id={id}
                name={name}
                handleOnChange={() => handleOnChange(id)}
                isSelected={
                  !!selectedIds.find((item) => item.id === id)?.isSelected
                }
              />
            ))}
            {/* {rows.map(({ id, name }) => (
              <TableRow
              key={id}
                id={id}
                name={name}
                handleOnChange={() => handleOnChange(id)}
                isSelected={selectedIds.has(id)}
              />
            ))} */}
          </tbody>
        </table>
      </div>
    </MainWrapper>
  );
};

export default SetExample;
