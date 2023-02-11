import { API_FAILED, API_FETCHING, API_SUCCESS } from "@ib/api-constants"
import EmptyView from "../../../common/components/EmptyView"
import ErrorView from "../../../common/components/ErrorView"
import LoadingView from "../../../common/components/LoadingView"
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
    onSetMyPosts: () => void,
    onSetReportedPosts: () => void,
    onSetSharedPosts : () => void
}


const TagsContainer = (props: tagsContainerPropsType) => {
 
    const { onSetMyPosts,onSetReportedPosts,onSetSharedPosts,  postFetchingApiStatus, listOfPostTags, setSelectedTag , selectedPostsTag} = props
      
    const renderEmptyView = () => <EmptyView displayText={userStrings.displayEmptyTagsText} />
    
    const renderLodingView = () => <StyledLoadingViewContainer><LoadingView /></StyledLoadingViewContainer>

    const renderErrorView = () => <ErrorView />
    
    const renderListOfTags = () => {
        return listOfPostTags.map(tag => <PostTagItem tag={tag} key={tag} setSelectedTag={setSelectedTag} selectedPostsTag={selectedPostsTag}/> )
    }
    

    const renderPostOptions = () => {

        return <StyledTagElementContainer>{LIST_OF_ACTIONS_OPTIONS.map(optionText => {
            const optionOnClickMethod = () => {
                if (optionText === userStrings.mypostsText) {
                    return <button key={optionText} onClick={onSetMyPosts}>{optionText}</button>    
                }
                else if (optionText === userStrings.reportedPostsText) {
                    return <button key={optionText} onClick={onSetReportedPosts}>{optionText}</button>    
                }
                else if (optionText === userStrings.sharedPoststText) {
                    return <button key={optionText} onClick={onSetSharedPosts}>{optionText}</button>    
                }
            }
            return optionOnClickMethod()
        })}</StyledTagElementContainer>
    }


    const renderSuccessView = () => {
        return <>
            <TagsContainerSectionHeading sectionHeading={userStrings.myActionSectionHeadingText}/>            
            {renderPostOptions()}
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