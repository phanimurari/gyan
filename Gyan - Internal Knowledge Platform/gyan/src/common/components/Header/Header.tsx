import ButtonElement from "../ButtonElement";
import ProfileOrLogoMaker from "../ProfileOrLogoMaker";

import commonStrings from '../../i18n/commonStrings.json'
import imageUrls from '../../constants/imageUrls/imageUrls.json'
import { useState } from "react";
import { getAccessToken } from "../../../utilis/StorageUtilis";
import { StyledButtonAndProfileImageContainer, StyledHeaderContainer } from "./styledComponents";
import { StyledInputElementContainer } from "../../../Authentication/SignIn/components/SignIn/styledComponents";
import { AiOutlineSearch } from "react-icons/ai";
import InputElement from "../InputElement";

interface headerProps {
    onToggleLoginModal: (value: boolean) => void,
    onToggleCreateAPostModal: (value: boolean) => void
    isUerLoggedIn: boolean
}


const Header = (props: headerProps) => {
    
    const [searchInputValue, onSetSearchValue] = useState('')

    const { onToggleLoginModal, onToggleCreateAPostModal } = props

    const onSearchPost = (event: React.ChangeEvent<HTMLInputElement>) => {
        onSetSearchValue(event.target.value)
    }

    const renderLoginButtonOrUserProfileLogo = () => {
        return getAccessToken() !== undefined ? <ProfileOrLogoMaker url={imageUrls.profile} /> : <ButtonElement text={commonStrings.loginButtonText} type={commonStrings.typeButton} onClickMethod={onToggleLoginModal} />
    }

    const renderWriteAPostButtonBasedOnLogin = () => {

        const onClickMethodForWriteAPostButton = getAccessToken() !== undefined ? onToggleCreateAPostModal : onToggleLoginModal

        return <ButtonElement text={commonStrings.headerButtonText} type={commonStrings.typeButton} onClickMethod={onClickMethodForWriteAPostButton} />
    }
    
    
    return <StyledHeaderContainer>
        <ProfileOrLogoMaker url={imageUrls.logo} />
        <>
            <StyledInputElementContainer>
                <AiOutlineSearch />
                <InputElement placeHolderText={commonStrings.searchInputElementPlaceHolderText} value={searchInputValue} onChangeMethod={onSearchPost} />
            </StyledInputElementContainer>
        </>
        <>
            <StyledButtonAndProfileImageContainer>
                {renderWriteAPostButtonBasedOnLogin()}
                {renderLoginButtonOrUserProfileLogo()}
            </StyledButtonAndProfileImageContainer>
        </>
    </StyledHeaderContainer>
}

export default Header