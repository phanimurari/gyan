import Modal from 'react-modal';
import {AiOutlineCloseCircle} from 'react-icons/ai'
import { StyeledReactModalContainer, StyledCloseButton, StyledCloseButtonContainer } from './styledComponents';

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
  componentPassed: React.ReactNode,
  displayModal: boolean,
  onToggleLoginModal: (value: boolean) => void
}

const ReactPopUpModal = (props : ReactPopUpModalPropsType) => {
  
  const {componentPassed, displayModal, onToggleLoginModal} = props

  const closeModal = ()=> {
    onToggleLoginModal(false);
  }

  return (
    <StyeledReactModalContainer>
      <Modal
        isOpen={displayModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <StyledCloseButtonContainer>
          <StyledCloseButton onClick={closeModal}><AiOutlineCloseCircle/></StyledCloseButton>
        </StyledCloseButtonContainer>
        {componentPassed}
      </Modal>
    </StyeledReactModalContainer>
  );
}

export {ReactPopUpModal}
