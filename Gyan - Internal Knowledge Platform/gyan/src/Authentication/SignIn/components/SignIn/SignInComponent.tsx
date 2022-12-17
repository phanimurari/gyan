import InputElement from "../../../../common/components/InputElement"
import { StyledFormContainer } from "./styledComponents"

import strings from '../../../i18n/strings.json'
import ButtonElement from "../../../../common/components/ButtonElement"
import InputLableElement from "../../../../common/components/InputLableElement"
import { useState } from "react"

const SignInComponent = () => {

const [userNameInputElementValue, setUserNameInputElementValue ] = useState("")
const [userPasswordInputElementValue, setUserPasswordInputElement] = useState("")

return <StyledFormContainer>
    <InputLableElement labelDisplayText = {strings.UserNameInputlabelDisplayText}/>
    <InputElement placeHolderText = {strings.userNameInputElementPlaceHolderText} value ={userNameInputElementValue} />
    <InputLableElement labelDisplayText= {strings.UserPasswordInputlabelDisplayText}/>
    <InputElement placeHolderText={strings.userPasswordElementPlaceHolderText} value = {userPasswordInputElementValue}/>
    <ButtonElement text={strings.loginButtonText} type={strings.loginButtonType}/>
</StyledFormContainer>

}

export {SignInComponent}