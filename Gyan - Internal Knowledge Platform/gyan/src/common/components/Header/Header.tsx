import { useState } from "react";
import { Link } from "react-router-dom";
import { useProSidebar } from 'react-pro-sidebar';
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineSearch } from "react-icons/ai";

import ButtonElement from "../ButtonElement";
import ProfileOrLogoMaker from "../ProfileOrLogoMaker";

import commonStrings from '../../i18n/commonStrings.json'
import imageUrls from '../../constants/imageUrls/imageUrls.json'
import { getAccessToken } from "../../../utilis/StorageUtilis";
import InputElement from "../InputElement";

import { REACT_ICON_SIZE } from "../../../user/constants";
import { HOME_PATH } from "../../constants/routePathConstants";

import { StyledButtonAndProfileImageContainer, StyledHambergurIconContainer, StyledHeaderContainer, StyledInputSearchInputElementContainer, StyledLogoutButtonContainer, StyledProfileIconButton, StyledProfileOrLogoMakerContainer } from "./styledComponents";

interface headerProps {
    onToggleLoginModal: (value: boolean) => void,
    onToggleCreateAPostModal: (value: boolean) => void
    onToggleSignOutConfirmModal:(value: boolean) => void
    isUerLoggedIn: boolean,
    onSearchPost: (searchText: string) => void,
}


const Header = (props: headerProps) => {
    
    const [searchInputValue, onSetSearchValue] = useState('')
    

    const { onToggleLoginModal, onToggleCreateAPostModal, onSearchPost , onToggleSignOutConfirmModal} = props

    const { collapseSidebar } = useProSidebar();


    const searchPost = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value)
        onSetSearchValue(event.target.value)
        onSearchPost(event.target.value)
    }

    const onClickProfileIcon = () => {
        onToggleSignOutConfirmModal(true)
    }

    const renderLoginButtonOrUserProfileLogo = () => {
        return getAccessToken() !== undefined ? <StyledProfileIconButton onClick = {onClickProfileIcon}><ProfileOrLogoMaker url={imageUrls.profile} size={50}/></StyledProfileIconButton> : <ButtonElement text={commonStrings.loginButtonText} type={commonStrings.typeButton} onClickMethod={onToggleLoginModal}/>
    }

    const renderWriteAPostButtonBasedOnLogin = () => {
        const onClickMethodForWriteAPostButton = getAccessToken() !== undefined ?  onToggleCreateAPostModal : onToggleLoginModal
        return <ButtonElement text={commonStrings.headerButtonText} type={commonStrings.typeButton} onClickMethod={onClickMethodForWriteAPostButton} />
    }
    
    return <StyledHeaderContainer>
        <StyledProfileOrLogoMakerContainer>
            <Link to={HOME_PATH} >
                <ProfileOrLogoMaker url={imageUrls.logo} size={60} />
            </Link> 
        </StyledProfileOrLogoMakerContainer>
        <StyledInputSearchInputElementContainer>
            <AiOutlineSearch size={20}/>
            <InputElement placeHolderText={commonStrings.searchInputElementPlaceHolderText} value={searchInputValue} onChangeMethod={searchPost} />
        </StyledInputSearchInputElementContainer>
        <StyledHambergurIconContainer>
            <GiHamburgerMenu onClick={() => collapseSidebar()}  size={REACT_ICON_SIZE}/>
        </StyledHambergurIconContainer>
        <StyledButtonAndProfileImageContainer>
                {renderWriteAPostButtonBasedOnLogin()}
                {renderLoginButtonOrUserProfileLogo()}
        </StyledButtonAndProfileImageContainer>
    </StyledHeaderContainer>
}

export default Header