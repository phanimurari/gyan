import ButtonElement from "../../../common/components/ButtonElement"
import EmptyView from "../../../common/components/EmptyView"

import userStrings from '../../i18n/userStrings.json'
import { StyledPostsContainer } from "./styledComponents"

interface postsContainerProps {
    onToggleLoginModal : (value: boolean) => void
}

const PostsContainer = (props: postsContainerProps) => {

    const {onToggleLoginModal} = props

    return <StyledPostsContainer>
        <EmptyView displayText={userStrings.displayEmptyPostsText} />
        <ButtonElement text={userStrings.writeAPostButtonText} type={userStrings.typeButton} onClickMethod={onToggleLoginModal}/>
    </StyledPostsContainer>
}

export {PostsContainer}