import { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
 const [isSidebarOpen, setIsSidebarOpen] = useState(false);
 const [isModalOpen, setIsModalOpen] = useState(false);

 const openSidebar = () => {

 };

 return <AppContext.Provider >{children}</AppContext.Provider>;
};

// Progress:
// 1. Create Context
// 2. import createContext, useState, useContext from react
// 3. Create AppContext variable
// 4. Create AppProvider function with children props base'
// 5. create return with AppContext.Provider
// 6. pass children props to AppContext.Provider return
// 7. Add isSidebarOpen state with useState and set default value to false
// 8. Add isModalOpen state with useState and set default value to false
// 9. Add openSidebar function base