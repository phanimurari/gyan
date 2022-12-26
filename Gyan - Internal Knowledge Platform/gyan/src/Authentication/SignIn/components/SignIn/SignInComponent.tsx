import { useState } from "react"
import InputElement from "../../../../common/components/InputElement"
import { StyledErrorMessageElement, StyledFormContainer, StyledFormHeadingElement, StyledInputElementContainer, StyledLogoContainer } from "./styledComponents"
import strings from '../../../i18n/strings.json'
import InputLableElement from "../../../../common/components/InputLableElement"
import SubmitButtonElement from "../../../../common/components/SubmitButtonElement"
import { getAccessToken } from "../../../../utilis/StorageUtilis"
import ProfileOrLogoMaker from "../../../../common/components/ProfileOrLogoMaker"

import imageUrls from '../../../../common/constants/imageUrls/imageUrls.json'

interface signInComponentProps {
    userLogin: (loginObject: {}) => void,
    onToggleLoginModal: (value: boolean) => void,
    userLoginApiStatus: number
}

const SignInComponent = (props: signInComponentProps) => {

const {userLogin, onToggleLoginModal, userLoginApiStatus} = props

const [userNameInputElementValue, setUserNameInputElementValue ] = useState("")
const [userPasswordInputElementValue, setUserPasswordInputElement] = useState("")
const [displayErrorMessage, setDisplayingErrorMessage] = useState(false)
    
    const onLogin = async (event: any) => {
      event.preventDefault()
      if (userNameInputElementValue !== '' && userPasswordInputElementValue !== '') { 
          setDisplayingErrorMessage(false)
          const loginObject = {
              username: userNameInputElementValue,
              password: userPasswordInputElementValue
          }
          await userLogin(loginObject)

          if (getAccessToken() !== undefined) {
              onToggleLoginModal(false)
          }
      }
      else {
          setDisplayingErrorMessage(true)
      }
    }    

    const renderErrorMessage = () => displayErrorMessage ? <StyledErrorMessageElement>{strings.invalidCredentials}</StyledErrorMessageElement> : null
    const setUserName = (event: React.ChangeEvent<HTMLInputElement>) => setUserNameInputElementValue(event.target.value)
    const setPassword = (event: React.ChangeEvent<HTMLInputElement>) => setUserPasswordInputElement(event.target.value)


    return <StyledFormContainer onSubmit={onLogin}>
        <StyledLogoContainer>
            <ProfileOrLogoMaker url={imageUrls.logo} size={100} />
        </StyledLogoContainer>
        <StyledFormHeadingElement>{strings.loginFormHeadingContent}</StyledFormHeadingElement>
    <InputLableElement labelDisplayText={strings.UserNameInputlabelDisplayText} />
   <StyledInputElementContainer>
        <InputElement placeHolderText={strings.userNameInputElementPlaceHolderText} value={userNameInputElementValue} onChangeMethod={setUserName} type={strings.textInputElementType}/>
    </StyledInputElementContainer>
    <InputLableElement labelDisplayText={strings.UserPasswordInputlabelDisplayText} />
    <StyledInputElementContainer>
            <InputElement placeHolderText={strings.userPasswordElementPlaceHolderText} value={userPasswordInputElementValue} onChangeMethod={setPassword} type={strings.passwordInputElementType} />
    </StyledInputElementContainer>
        <SubmitButtonElement text={strings.loginButtonText} type={strings.loginButtonType} userLoginApiStatus={userLoginApiStatus}/>
    {renderErrorMessage()}
</StyledFormContainer>

}

export {SignInComponent}