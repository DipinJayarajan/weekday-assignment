import React, { createContext, useContext, useState } from 'react';

const AppStateContext = createContext();

export const useAppState = () => useContext(AppStateContext);

export const AppStateProvider = ({ children }) => {

  const [ searchTerm, setSearchTerm ] = useState("")

  const handleSearchTerm = (event) => {
    setSearchTerm(event.target.value)
  }

  return (
    <AppStateContext.Provider value={{
      searchTerm,
      setSearchTerm,
      handleSearchTerm
    }}>
      {children}
    </AppStateContext.Provider>
  );
};