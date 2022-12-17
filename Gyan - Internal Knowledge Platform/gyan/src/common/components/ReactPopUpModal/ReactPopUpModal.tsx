import { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

interface ReactPopUpModalPropsType {
  SignInComponent: React.ReactNode
}

const ReactPopUpModal = (props : ReactPopUpModalPropsType) => {
  
  const [modalIsOpen, setIsOpen] = useState(false);

  const {SignInComponent} = props

  function openModal() {
    setIsOpen(true);
  }

  const closeModal = ()=> {
    setIsOpen(false);
  }

  return (
    <div>
      <Modal
        isOpen={true}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <button onClick={closeModal}>close</button>
        {SignInComponent}
      </Modal>
    </div>
  );
}

export {ReactPopUpModal}
