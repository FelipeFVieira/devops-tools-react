// StateContext.js
import React, { createContext, useState } from 'react';

export const StateContext = createContext();

export const SideBarStateProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <StateContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
      {children}
    </StateContext.Provider>
  );
};
