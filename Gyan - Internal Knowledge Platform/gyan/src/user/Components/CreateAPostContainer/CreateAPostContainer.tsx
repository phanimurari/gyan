
import InputElement from "../../../common/components/InputElement"
import SubmitButtonElement from "../../../common/components/SubmitButtonElement"
import TextBoxElement from "../../../common/components/TextBoxElement"
import { StyledCreateAPostForm, StyledCreateAPostModalHeading, StyledProfileImageContainer } from "./styledComponents"

import imageUrls from '../../../common/constants/imageUrls/imageUrls.json'

import strings from '../../i18n/userStrings.json'
import React, { useState } from "react"
import { StyledErrorMessageElement, StyledInputElementContainer } from "../../../Authentication/SignIn/components/SignIn/styledComponents"
import ProfileOrLogoMaker from "../../../common/components/ProfileOrLogoMaker"

interface CreateAPostContainer {
    addPostToListOfPosts: (postObject: any) => void,
    onToggleCreateAPostModal : (value: boolean) => void
}



const CreateAPostContainer = (props : CreateAPostContainer) => {

    const {addPostToListOfPosts, onToggleCreateAPostModal} = props

    const [titleInputElementValue, settitleInputElementValue] = useState("")
    const [tagsInputElementValue, setTagsInputElementValue] = useState("")
    const [descriptionInputElementValue, setDescriptionInputElementValue] = useState("")
    const [displayErrorMessage, setDisplayErrorMessage] = useState(false)

    const onSubmitPost = (event: any) => {
        event.preventDefault()
        if (titleInputElementValue !== "" && tagsInputElementValue !== "" && descriptionInputElementValue !=="") {
            const postObject = {
                title: titleInputElementValue,
                tag: tagsInputElementValue,
                description: descriptionInputElementValue
            }   
            addPostToListOfPosts(postObject)

            settitleInputElementValue('')
            setTagsInputElementValue('')
            setDescriptionInputElementValue('')
            onToggleCreateAPostModal(false)

        }
        else {
            setDisplayErrorMessage(true)
        }
        
    }

    const onChangeValueOfTitleInputElement = (event : React.ChangeEvent<HTMLInputElement>) => {

        settitleInputElementValue(event.target.value)
    }

    const onChangeValueOfTagInputElement = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTagsInputElementValue(event.target.value)
    }

    const onChangeValueOfDescriptionInputElement = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setDescriptionInputElementValue(event.target.value)
    }

    const renderValidationErrorMessage = () => displayErrorMessage ? <StyledErrorMessageElement>{strings.createPostFormSubmitErrorMessage}</StyledErrorMessageElement>: null
    
    return <StyledCreateAPostForm onSubmit={onSubmitPost}>
        <StyledProfileImageContainer>
            <ProfileOrLogoMaker url={imageUrls.logo} size={100} />
        </StyledProfileImageContainer>
        <StyledCreateAPostModalHeading>{strings.createAModalHeadingContent}</StyledCreateAPostModalHeading>
        <StyledInputElementContainer>
        <InputElement placeHolderText={strings.titleInputElementPlaceHolderText} value={titleInputElementValue} onChangeMethod={onChangeValueOfTitleInputElement} />
        </StyledInputElementContainer>
        <StyledInputElementContainer>
        <InputElement placeHolderText={strings.tagsInputElementPlaceHolderText} value={tagsInputElementValue} onChangeMethod={onChangeValueOfTagInputElement} />
        </StyledInputElementContainer>
        <StyledInputElementContainer>
            <TextBoxElement placeHolderText={strings.descriptionInputElemenetPlaceHolderText} onChangeMethod={onChangeValueOfDescriptionInputElement} value={descriptionInputElementValue}/>
        </StyledInputElementContainer>
        <SubmitButtonElement text={strings.postButtonContent} type={strings.typeSubmit} />
        {renderValidationErrorMessage()}
  </StyledCreateAPostForm>

}

export { CreateAPostContainer }