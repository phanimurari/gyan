import { API_FAILED, API_FETCHING, API_SUCCESS } from "@ib/api-constants"
import EmptyView from "../../../common/components/EmptyView"
import ErrorView from "../../../common/components/ErrorView"
import LoadingView from "../../../common/components/LoadingView"
import { getAccessToken } from "../../../utilis/StorageUtilis"
import { LIST_OF_ACTIONS_OPTIONS } from "../../constants"

import userStrings from '../../i18n/userStrings.json'
import { postObjectType } from "../../stores/types"
import TagsContainerSectionHeading from "../Common/TagsContainerSectionHeadig"
import PostTagItem from "../PostTagItem"
import { StyledLoadingViewContainer, StyledTagElementContainer, StyledTagsContainer } from "./styledComponents"


interface tagsContainerPropsType {
    onToggleLoginModal: (value: boolean) => void,
    onToggleCreateAPostModal : (value: boolean) => void,
    listOfPosts: Array<postObjectType>,
    postFetchingApiStatus: number,
    listOfPostTags: Array<string>,
    setSelectedTag: (tag: string) => void,
    selectedPostsTag: string,
    selectedAction : string,
    onSetMyPosts: () => void,
    onSetReportedPosts: () => void,
    onSetSharedPosts: () => void,
    onSetSelectedAction : (selectedAction : string) => void
}


const TagsContainer = (props: tagsContainerPropsType) => {
 
    const { postFetchingApiStatus, listOfPostTags, setSelectedTag , selectedPostsTag, onSetSelectedAction, selectedAction} = props
      
    const renderEmptyView = () => <EmptyView displayText={userStrings.displayEmptyTagsText} />
    
    const renderLodingView = () => <StyledLoadingViewContainer><LoadingView /></StyledLoadingViewContainer>

    const renderErrorView = () => <ErrorView />
    
    const renderListOfTags = () => {
        return listOfPostTags.map(tag => <PostTagItem tag={tag} key={tag} setSelectedTag={setSelectedTag} selectedPostsTag={selectedPostsTag}/> )
    }
    

    const onSetMyPosts = () => {
            onSetSelectedAction(userStrings.mypostsText)
    }

    const onSetReportedPosts = () => {
        onSetSelectedAction(userStrings.reportedPostsText)
    }

    const onSetSharedPosts = () => {
        onSetSelectedAction(userStrings.sharedPoststText)
    }

    const renderPostOptions = () => {

        return <StyledTagElementContainer>{LIST_OF_ACTIONS_OPTIONS.map(optionText => {
            const optionOnClickMethod = () => {
                if (optionText === userStrings.mypostsText) {
                    return <PostTagItem tag={optionText} key={optionText} setSelectedTag={onSetMyPosts} selectedPostsTag={selectedAction}/>
                }
                else if (optionText === userStrings.reportedPostsText) {
                    return <PostTagItem tag={optionText} key={optionText} setSelectedTag={onSetReportedPosts} selectedPostsTag={selectedAction}/>
                }
                else if (optionText === userStrings.sharedPoststText) {
                    return <PostTagItem tag={optionText} key={optionText} setSelectedTag={onSetSharedPosts} selectedPostsTag={selectedAction}/>
                }
            }
            return optionOnClickMethod()
        })}</StyledTagElementContainer>
    }

    const renderActionsBasedOnUserLogin = () => {
        return  getAccessToken() !== undefined ?<>
            <TagsContainerSectionHeading sectionHeading={userStrings.myActionSectionHeadingText} />            
            {renderPostOptions()}
        </> : null
    }

    const renderSuccessView = () => {
        return <>
            {renderActionsBasedOnUserLogin()}
            <TagsContainerSectionHeading sectionHeading={userStrings.domainsSectionHeadingText}/>
            {listOfPostTags.length > 0 ? <StyledTagElementContainer>{renderListOfTags()}</StyledTagElementContainer> : renderEmptyView()}
        </>
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


    return <StyledTagsContainer>
        {renderPostsContainerView()}
    </StyledTagsContainer>
}

export { TagsContainer }