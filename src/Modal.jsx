import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();
  return (
    <div className='modal-overlay'>

    </div>
  );
};

export default Modal;

// Progress:
// 1. Create Modal component base
// 2. Import FaTimes icon
// 3. Import useGlobalContext
// 4. call useGlobalContext function and pass in destructured values of isModalOpen & closeModal
// 5. add div with className of modal-overlay @return