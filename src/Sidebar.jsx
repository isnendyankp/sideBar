import logo from './logo.svg';
import { social, links } from './data';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside className='sidebar'>
      <div className='sidebar-header'>
        <img src={logo} alt='coding addict' className='logo'/>
        <button className='close-btn' onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className='links'>
        {links.map((links) => {

        })}
      </ul>
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
// 10. add alt coding addict attribute to img element @return>aside>div>img
// 11. add className of logo to img element @return>aside>div>img
// 12. add button element with className of close-btn @return>aside>div
// 13. pass in FaTimes in button element @return>aside>div>button
// 14. add onClick event to button element and pass in closeSidebar function @return>aside>div>button
// 15. add ul element with className of links @return>aside
// 16. add base links.map() method @return>aside>ul
// 17. pass in links as parameter to links.map() method @return>aside>ul
