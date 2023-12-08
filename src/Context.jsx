import { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
 return <AppContext.Provider >{children}</AppContext.Provider>;
};

// Progress:
// 1. Create Context
// 2. import createContext, useState, useContext from react
// 3. Create AppContext variable
// 4. Create AppProvider function with children props base'
// 5. create return with AppContext.Provider
// 6. pass children props to AppContext.Provider return