import {AiOutlineSearch} from "react-icons/ai"
import ButtonElement from "../ButtonElement";
import InputElement from "../InputElement";
import ProfileOrLogoMaker from "../ProfileOrLogoMaker";
import { StyledButtonAndProfileImageContainer, StyledHeaderContainer, StyledInputElementContainer } from "./styledComponents";

import commonStrings from '../../i18n/commonStrings.json'
import imageUrls from '../../constants/imageUrls/imageUrls.json'
import ReactPopUpModal from "../ReactPopUpModal";

const Header = () => <StyledHeaderContainer>
    <ProfileOrLogoMaker url={imageUrls.logo}/>
    <>
        <StyledInputElementContainer>
            <AiOutlineSearch/>
            <InputElement placeHolderText={commonStrings.searchInputElementPlaceHolderText} value={''}/>
        </StyledInputElementContainer>
    </>
    <>
        <StyledButtonAndProfileImageContainer>
            <ButtonElement text={commonStrings.headerButtonText} type={commonStrings.typeButton}/>
            <ButtonElement text={commonStrings.loginButtonText} type={commonStrings.typeButton}/>
        </StyledButtonAndProfileImageContainer>
    </>
</StyledHeaderContainer>

export default Header