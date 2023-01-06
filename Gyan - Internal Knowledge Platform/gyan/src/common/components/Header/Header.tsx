import { AiOutlineSearch } from "react-icons/ai";
import {GrMenu} from 'react-icons/gr'
import { useState } from "react";
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';



import ButtonElement from "../ButtonElement";
import ProfileOrLogoMaker from "../ProfileOrLogoMaker";

import commonStrings from '../../i18n/commonStrings.json'
import imageUrls from '../../constants/imageUrls/imageUrls.json'
import { getAccessToken } from "../../../utilis/StorageUtilis";
import { StyledButtonAndProfileImageContainer, StyledHambergurIconContainer, StyledHeaderContainer, StyledInputSearchInputElementContainer, StyledProfileOrLogoMakerContainer } from "./styledComponents";
import InputElement from "../InputElement";
import { GiHamburgerMenu } from "react-icons/gi";

interface headerProps {
    onToggleLoginModal: (value: boolean) => void,
    onToggleCreateAPostModal: (value: boolean) => void
    isUerLoggedIn: boolean,
    onSearchPost: (searchText: string) => void,
    setSideBarMenu : (displaySideBarMenu: boolean) => void
}


const Header = (props: headerProps) => {
    
    const [searchInputValue, onSetSearchValue] = useState('')
    const [showMenuIcon, onDisplayMenuIcon] = useState(false)

    const { onToggleLoginModal, onToggleCreateAPostModal, onSearchPost, setSideBarMenu } = props

      const { collapseSidebar } = useProSidebar();


    const searchPost = (event: React.ChangeEvent<HTMLInputElement>) => {
        onSetSearchValue(event.target.value)
        onSearchPost(searchInputValue)
    }

    const renderLoginButtonOrUserProfileLogo = () => {
        return getAccessToken() !== undefined ? <ProfileOrLogoMaker url={imageUrls.profile} size={50}/> : <ButtonElement text={commonStrings.loginButtonText} type={commonStrings.typeButton} onClickMethod={onToggleLoginModal}/>
    }

    const renderWriteAPostButtonBasedOnLogin = () => {

        const onClickMethodForWriteAPostButton = getAccessToken() !== undefined ? onToggleCreateAPostModal : onToggleLoginModal

        return <ButtonElement text={commonStrings.headerButtonText} type={commonStrings.typeButton} onClickMethod={onClickMethodForWriteAPostButton} />
    }
    
    const onClickOnMenuIcon = () => {
        onDisplayMenuIcon(!showMenuIcon)
        setSideBarMenu(!showMenuIcon)
        
    }

    
    return <StyledHeaderContainer>
        <StyledProfileOrLogoMakerContainer>
            <ProfileOrLogoMaker url={imageUrls.logo} size={60} />
        </StyledProfileOrLogoMakerContainer>
        <StyledInputSearchInputElementContainer>
                <AiOutlineSearch size={20}/>
                <InputElement placeHolderText={commonStrings.searchInputElementPlaceHolderText} value={searchInputValue} onChangeMethod={searchPost} />
        </StyledInputSearchInputElementContainer>
        <StyledHambergurIconContainer>
            <GiHamburgerMenu onClick={() => collapseSidebar()}/>
        </StyledHambergurIconContainer>
        <StyledButtonAndProfileImageContainer>
                {renderWriteAPostButtonBasedOnLogin()}
                {renderLoginButtonOrUserProfileLogo()}
        </StyledButtonAndProfileImageContainer>
    </StyledHeaderContainer>
}

export default Header