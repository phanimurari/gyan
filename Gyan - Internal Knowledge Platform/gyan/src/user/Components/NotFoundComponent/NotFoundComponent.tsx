import { IMAGE_NOT_FOUND_IMAGE_URL } from "../../constants";
import { StyledNotFoundContainer, StyledNotFoundHeading, StyledNotFoundImage } from "./styledComponents";

import strings from '../../i18n/userStrings.json'

const NotFoundComponent = () => <StyledNotFoundContainer>

    <StyledNotFoundImage src={IMAGE_NOT_FOUND_IMAGE_URL} />
    <StyledNotFoundHeading>
        {strings.notFoundHeadingText}
    </StyledNotFoundHeading>
    
</StyledNotFoundContainer>
    
    

export {NotFoundComponent}