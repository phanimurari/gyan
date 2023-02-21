import { getAccessToken } from "../../../../utilis/StorageUtilis"
import { LIST_OF_ACTIONS_OPTIONS } from "../../../constants"
import PostTagItem from "../../PostTagItem"
import TagsContainerSectionHeading from "../TagsContainerSectionHeadig"

import userStrings from '../../../i18n/userStrings.json'
import { StyledTagElementContainer } from "./styledComponents"

interface ActionsContainerComponentProps {
    selectedAction : string,
    onSetMyPosts: () => void,
    onSetReportedPosts: () => void,
    onSetSharedPosts: () => void,
}

const ActionsContainerComponent = (props : ActionsContainerComponentProps) => {

const {onSetMyPosts, selectedAction, onSetReportedPosts, onSetSharedPosts} = props

    
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


    return getAccessToken() !== undefined ? <>
        <TagsContainerSectionHeading sectionHeading={userStrings.myActionSectionHeadingText} />
        {renderPostOptions()}
    </> : null
}

export {ActionsContainerComponent}