import { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
 return <AppContext.Provider ></AppContext.Provider>;
};

// Progress:
// 1. Create Context
// 2. import createContext, useState, useContext from react
// 3. Create AppContext variable
// 4. Create AppProvider function with children props base'
// 5. create return with AppContext.Provider