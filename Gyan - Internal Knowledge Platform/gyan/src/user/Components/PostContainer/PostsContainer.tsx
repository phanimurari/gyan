import { API_FAILED, API_FETCHING, API_SUCCESS } from "@ib/api-constants"
import ButtonElement from "../../../common/components/ButtonElement"
import EmptyView from "../../../common/components/EmptyView"
import ErrorView from "../../../common/components/ErrorView"
import LoadingView from "../../../common/components/LoadingView"
import { getAccessToken } from "../../../utilis/StorageUtilis"

import userStrings from '../../i18n/userStrings.json'
import { postObjectType, postType } from "../../stores/types"
import PostItem from "../PostItem"
import { StyledPostsContainer } from "./styledComponents"

interface postsContainerProps {
    onToggleLoginModal: (value: boolean) => void,
    onToggleCreateAPostModal : (value: boolean) => void,
    listOfPosts: Array<postObjectType>,
    postFetchingApiStatus : number
}

const PostsContainer = (props: postsContainerProps) => {

    const { onToggleLoginModal, listOfPosts , onToggleCreateAPostModal, postFetchingApiStatus} = props
    
     const renderWriteAPostButtonBasedOnLogin = () => {
        const onClickMethodForWriteAPostButton = getAccessToken() !== undefined ? onToggleCreateAPostModal : onToggleLoginModal
        return <ButtonElement text={userStrings.writeAPostButtonText} type={userStrings.typeButton} onClickMethod={onClickMethodForWriteAPostButton} />
     }
    
    const renderListOfPosts = () => {
        return <ul>
            {listOfPosts.map((post : any) => <PostItem post={post}/> )}
        </ul>
    }
    
    
    
    const renderEmptyView = () =>  <> <EmptyView displayText={userStrings.displayEmptyPostsText} />
                                    {renderWriteAPostButtonBasedOnLogin()}

    </>
    

    const renderLodingView = () => <LoadingView/>
    


    const renderErrorView = () => <>
        <ErrorView/>
    </>
        
    const renderSuccessView = () => {

        console.log(listOfPosts, "lostoFposts")

        return listOfPosts.length > 0 ? renderListOfPosts() : renderEmptyView()
    }

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