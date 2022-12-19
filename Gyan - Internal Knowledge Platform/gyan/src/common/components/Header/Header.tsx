import {AiOutlineSearch} from "react-icons/ai"
import ButtonElement from "../ButtonElement";
import InputElement from "../InputElement";
import ProfileOrLogoMaker from "../ProfileOrLogoMaker";
import { StyledButtonAndProfileImageContainer, StyledHeaderContainer, StyledInputElementContainer } from "./styledComponents";

import commonStrings from '../../i18n/commonStrings.json'
import imageUrls from '../../constants/imageUrls/imageUrls.json'
import { useState } from "react";
import { getAccessToken } from "../../../utilis/StorageUtilis";

interface headerProps {
    onToggleLoginModal: (value: boolean) => void,
    isUerLoggedIn: boolean
}


const Header = (props: headerProps) => {
    
    const [searchInputValue, onSetSearchValue] = useState('')

    const {onToggleLoginModal, isUerLoggedIn} = props

    const onSearchPost = (event: React.ChangeEvent<HTMLInputElement>) => {
      onSetSearchValue(event.target.value)
    }

    const renderLoginButtonOrUserProfileLogo = () => {
        return getAccessToken() !== undefined ? <ProfileOrLogoMaker url={imageUrls.profile}/>: <ButtonElement text={commonStrings.loginButtonText} type={commonStrings.typeButton} onClickMethod={onToggleLoginModal}/>
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
                <ButtonElement text={commonStrings.headerButtonText} type={commonStrings.typeButton} onClickMethod={onToggleLoginModal} />
                {renderLoginButtonOrUserProfileLogo()}
            </StyledButtonAndProfileImageContainer>
        </>
    </StyledHeaderContainer>
}

export default Header