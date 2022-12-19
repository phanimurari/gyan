import InputElement from "../../../../common/components/InputElement"
import { StyledFormContainer, StyledInputElementContainer } from "./styledComponents"

import strings from '../../../i18n/strings.json'
import ButtonElement from "../../../../common/components/ButtonElement"
import InputLableElement from "../../../../common/components/InputLableElement"
import { useState } from "react"

const SignInComponent = () => {

const [userNameInputElementValue, setUserNameInputElementValue ] = useState("")
const [userPasswordInputElementValue, setUserPasswordInputElement] = useState("")

return <StyledFormContainer>
    <InputLableElement labelDisplayText = {strings.UserNameInputlabelDisplayText}/>
   <StyledInputElementContainer>
        <InputElement placeHolderText={strings.userNameInputElementPlaceHolderText} value={userNameInputElementValue} />
    </StyledInputElementContainer>
    <InputLableElement labelDisplayText={strings.UserPasswordInputlabelDisplayText} />
    <StyledInputElementContainer>
        <InputElement placeHolderText={strings.userPasswordElementPlaceHolderText} value={userPasswordInputElementValue} />
    </StyledInputElementContainer>
    <ButtonElement text={strings.loginButtonText} type={strings.loginButtonType} />
</StyledFormContainer>

}

export {SignInComponent}