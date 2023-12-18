import logo from './logo.svg';
import { social, links } from './data';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return <div>Sidebar</div>;
};

export default Sidebar;

// Progress:
// 1. Create sidebar component base
// 2. Import logo
// 3. Import social & links data from data.js file @return
// 4. Import FaTimes icon
// 5. call useGlobalContext function and pass in destructured values of isSidebarOpen & closeSidebar
// 6. import useGlobalContext
