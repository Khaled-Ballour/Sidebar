import { createContext, useState, useContext } from 'react';

const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const [isSlidebarOpen, setIsSlidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openSlidebar = () => setIsSlidebarOpen(true);
  const closeSlidebar = () => setIsSlidebarOpen(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        isSlidebarOpen,
        openModal,
        openSlidebar,
        closeModal,
        closeSlidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
