import logo from './logo.svg';
import { social, links } from './data';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside className='sidebar'>
      <div className='sidebar-header'>
        <img src={logo} />
      </div>
    </aside>
  );
};

export default Sidebar;

// Progress:
// 1. Create sidebar component base
// 2. Import logo
// 3. Import social & links data from data.js file @return
// 4. Import FaTimes icon
// 5. call useGlobalContext function and pass in destructured values of isSidebarOpen & closeSidebar
// 6. import useGlobalContext
// 7. add aside element with className of sidebar @return
// 8. add div element with className of sidebar-header @return>aside
// 9. add img element with src of logo @return>aside>div
