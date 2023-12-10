import { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isModalOpen,
        openModal,
        openSidebar,
        closeModal,
        closeSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
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
// 10. pass setIsSidebarOpen to openSidebar function
// 11. Add closeSidebar function base
// 12. pass in false setIsSidebarOpen to closeSidebar function
// 13. Add openModal function base
// 14. pass in true setIsModalOpen to openModal function
// 15. Add closeModal function base
// 16. pass in false setIsModalOpen to closeModal function
// 17. Add value prop to AppContext.Provider and pass in all states and functions to value prop as object value pair with key and value as same name (isSidebarOpen, isModalOpen, openModal, openSidebar, closeModal, closeSidebar) and pass in children props to AppContext.