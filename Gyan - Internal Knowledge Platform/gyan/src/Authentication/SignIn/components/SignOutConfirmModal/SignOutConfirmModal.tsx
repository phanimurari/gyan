import { StyledCloseModalButton, StyledLogOutButton, StyledSignOutConfirmModalButtonsContainer, StyledSignOutConfirmModalHeadingElement } from "./styledComponents"
import strings from '../../../i18n/strings.json'
import { clearUserSession } from "../../../../utilis/StorageUtilis"

interface SignOutConfirmModalProps {
    onToggleLoginModal : (value: boolean) => void
}

const SignOutConfirmModal = (props : SignOutConfirmModalProps) => {
    
    const {onToggleLoginModal} = props


    const onClickSignOutButtonClearCookies = () => {
        clearUserSession()
        console.log("clearred")
        signOutButton()
    }


    const signOutButton = () => onToggleLoginModal(false)

    return <>
    <StyledSignOutConfirmModalHeadingElement>
        {strings.signOutConfirmModalHeadingConfirmation}
    </StyledSignOutConfirmModalHeadingElement>
    
    <StyledSignOutConfirmModalButtonsContainer>
        <StyledLogOutButton onClick={onClickSignOutButtonClearCookies}>{strings.signOutButtonText}</StyledLogOutButton>
        <StyledCloseModalButton onClick={signOutButton}>{strings.noSignOutButtonText}</StyledCloseModalButton>
    </StyledSignOutConfirmModalButtonsContainer>

</>
}

export {SignOutConfirmModal}