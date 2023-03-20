import React, { createContext, useContext } from "react";

const BoardsContext = createContext<string[]>([]);

export function useBoardContext() {
  return useContext(BoardsContext);
}

type Props = {
  children: React.ReactNode;
};

export default function BoardsContextProvider({ children }: Props) {
  const projects = ["test", "test 2"];

  return (
    <BoardsContext.Provider value={projects}>{children}</BoardsContext.Provider>
  );
}
