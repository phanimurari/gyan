import { API_FAILED, API_FETCHING, API_SUCCESS } from "@ib/api-constants"
import ButtonElement from "../../../common/components/ButtonElement"
import EmptyView from "../../../common/components/EmptyView"
import ErrorView from "../../../common/components/ErrorView"
import LoadingView from "../../../common/components/LoadingView"
import { getAccessToken } from "../../../utilis/StorageUtilis"

import userStrings from '../../i18n/userStrings.json'
import { commentType, postObjectType, postType } from "../../stores/types"
import PostItem from "../PostItem"
import { StyledEmptyViewContainer, StyledListOfPostsContainer, StyledPostsContainer } from "./styledComponents"

interface postsContainerProps {
    onToggleLoginModal: (value: boolean) => void,
    onToggleCreateAPostModal : (value: boolean) => void,
    listOfPosts: Array<postObjectType>,
    postFetchingApiStatus: number,
    addComment: (commentObject: commentType, id: string) => void,
    onPostLike: (postId: string) => void,
    setSelectedTag: (tag: string) => void,
    onReportPost: (id: string) => void
    onAddPostToSharedPostsList: (id: string) => void,
    onDeleteMyPosts : (id : string) => void
}

const PostsContainer = (props: postsContainerProps) => {

    const { onToggleLoginModal, listOfPosts , onToggleCreateAPostModal, postFetchingApiStatus, addComment, onPostLike, setSelectedTag, onReportPost, onAddPostToSharedPostsList, onDeleteMyPosts} = props
    
    const renderWriteAPostButtonBasedOnLogin = () => {
        const onClickMethodForWriteAPostButton = getAccessToken() !== undefined ? onToggleCreateAPostModal : onToggleLoginModal
        return <ButtonElement text={userStrings.writeAPostButtonText} type={userStrings.typeButton} onClickMethod={onClickMethodForWriteAPostButton} />
    }
    
    const renderListOfPosts = () => {
        return <StyledListOfPostsContainer>
            {listOfPosts.map((post: any) => <PostItem post={post} key={post.id} addComment={addComment} onPostLike={onPostLike} onToggleLoginModal={onToggleLoginModal} setSelectedTag={setSelectedTag} onReportPost={onReportPost} onAddPostToSharedPostsList={onAddPostToSharedPostsList} onDeleteMyPosts={onDeleteMyPosts}/> )}
        </StyledListOfPostsContainer>
    }
    
    
    const renderEmptyView = () =>  <StyledEmptyViewContainer> <EmptyView displayText={userStrings.displayEmptyPostsText} />
        {renderWriteAPostButtonBasedOnLogin()}
    </StyledEmptyViewContainer>
    
    const renderLodingView = () => <LoadingView/>
    
    const renderErrorView = () => <ErrorView/>
        
    const renderSuccessView = () => listOfPosts.length > 0 ? renderListOfPosts() : renderEmptyView()

    const renderPostsContainerView = () => {

        switch (postFetchingApiStatus) {
            case API_FETCHING:
                return renderLodingView()
            case API_FAILED:
                return renderErrorView()
            case API_SUCCESS:
                return renderSuccessView()
       }   
    }

return <StyledPostsContainer>
    {renderPostsContainerView()}
</StyledPostsContainer>
    
}

export {PostsContainer}