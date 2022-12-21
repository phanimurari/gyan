import ButtonElement from "../../../common/components/ButtonElement"
import EmptyView from "../../../common/components/EmptyView"
import { getAccessToken } from "../../../utilis/StorageUtilis"

import userStrings from '../../i18n/userStrings.json'
import { postObjectType } from "../../stores/types"
import { StyledPostsContainer } from "./styledComponents"

interface postsContainerProps {
    onToggleLoginModal: (value: boolean) => void,
    onToggleCreateAPostModal : (value: boolean) => void,
    listOfPosts : Array<postObjectType>,
}

const PostsContainer = (props: postsContainerProps) => {

    const { onToggleLoginModal, listOfPosts , onToggleCreateAPostModal} = props
    
     const renderWriteAPostButtonBasedOnLogin = () => {

        const onClickMethodForWriteAPostButton = getAccessToken() !== undefined ? onToggleCreateAPostModal : onToggleLoginModal

        return <ButtonElement text={userStrings.writeAPostButtonText} type={userStrings.typeButton} onClickMethod={onClickMethodForWriteAPostButton} />
    }
    

    return <StyledPostsContainer>
        <EmptyView displayText={userStrings.displayEmptyPostsText} />
        {renderWriteAPostButtonBasedOnLogin()}
    </StyledPostsContainer>
}

export {PostsContainer}