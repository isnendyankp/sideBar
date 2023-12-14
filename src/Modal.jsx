import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();
  return (
    <div className='modal-overlay'>
      <div className='modal-container'>
        <h3>modal content</h3>
        <button className='close-modal-btn' onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
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
// 6. add div with className of modal-container @return>div modal-overlay
// 7. add h3 with text of modal content @return>div modal-overlay>div modal-container
// 8. add button @return>div modal-overlay>div modal-container
// 9. add button className of close-modal-btn @return>div modal-overlay>div modal-container>button
// 10. add onClick event to button and pass in closeModal function
// 11. add FaTimes component to button
