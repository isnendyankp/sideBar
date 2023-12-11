import { useGlobalContext } from './context';
import { FaBars } from 'react-icons/fa';

const Home = () => {
  const { openSidebar, openModal } = useGlobalContext();

  return (
    <main>
      <button onClick={openSidebar} className='sidebar-toggle'>

      </button>
    </main>
  )
};

export default Home;

// Progress:
// 1. Create Home component base
// 2. create call useGlobalContext function and pass in destructured values of openSidebar & openModal
// 3. import useGlobalContext from context.js
// 4. import FaBars from react-icons/fa
// 5. create main & button base structure @return
// 6. create onClick event on button and pass in openSidebar function
// 7. Add className sidebar-toggle on button
