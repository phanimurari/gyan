import { API_FAILED, API_FETCHING, API_SUCCESS } from "@ib/api-constants"
import EmptyView from "../../../common/components/EmptyView"
import ErrorView from "../../../common/components/ErrorView"
import LoadingView from "../../../common/components/LoadingView"

import userStrings from '../../i18n/userStrings.json'
import { postObjectType } from "../../stores/types"
import PostTagItem from "../PostTagItem"
import { StyledTagElementContainer, StyledTagsContainer } from "./styledComponents"


interface tagsContainerPropsType {
    onToggleLoginModal: (value: boolean) => void,
    onToggleCreateAPostModal : (value: boolean) => void,
    listOfPosts: Array<postObjectType>,
    postFetchingApiStatus: number,
    listOfPostTags: Array<string>,
    setSelectedTag: (tag: string) => void,
    selectedPostsTag: string,
}


const TagsContainer = (props: tagsContainerPropsType) => {
 
    const { postFetchingApiStatus, listOfPostTags, setSelectedTag , selectedPostsTag} = props
      
    const renderEmptyView = () => <StyledTagsContainer>
        <EmptyView displayText={userStrings.displayEmptyTagsText} />
    </StyledTagsContainer>
    
    const renderLodingView = () => <LoadingView />

    const renderErrorView = () => <>
        <ErrorView />
    </>
    
    const renderListOfTags = () => {
        return listOfPostTags.map(tag => <PostTagItem tag={tag} key={tag} setSelectedTag={setSelectedTag} selectedPostsTag={selectedPostsTag}/> )
    }
    
    const renderSuccessView = () => {
        return listOfPostTags.length > 0 ? <StyledTagElementContainer>{renderListOfTags()}</StyledTagElementContainer>: renderEmptyView()
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

    return <>
        {renderPostsContainerView()}
    </>
}

export { TagsContainer }