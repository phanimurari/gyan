import ButtonElement from "../../../common/components/ButtonElement"
import EmptyView from "../../../common/components/EmptyView"

import userStrings from '../../i18n/userStrings.json'
import { StyledPostsContainer } from "./styledComponents"

const PostsContainer = () => {
    return <StyledPostsContainer>
        <EmptyView displayText={userStrings.displayEmptyPostsText} />
        <ButtonElement text={userStrings.writeAPostButtonText} type={userStrings.typeButton}/>
    </StyledPostsContainer>
}

export {PostsContainer}