import { Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';

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

const { collapseSidebar } = useProSidebar();

    
 const renderPostOptions = () => {
        return <Menu><StyledTagElementContainer>{LIST_OF_ACTIONS_OPTIONS.map(optionText => {
            const optionOnClickMethod = () => {
                if (optionText === userStrings.mypostsText) {
                    return <MenuItem onClick={() => collapseSidebar()}><PostTagItem tag={optionText} key={optionText} setSelectedTag={onSetMyPosts} selectedPostsTag={selectedAction}/></MenuItem>
                }
                else if (optionText === userStrings.reportedPostsText) {
                    return <MenuItem onClick={() => collapseSidebar()}><PostTagItem tag={optionText} key={optionText} setSelectedTag={onSetReportedPosts} selectedPostsTag={selectedAction}/></MenuItem>
                }
                else if (optionText === userStrings.sharedPoststText) {
                    return <MenuItem onClick={() => collapseSidebar()}><PostTagItem tag={optionText} key={optionText} setSelectedTag={onSetSharedPosts} selectedPostsTag={selectedAction}/></MenuItem>
                }
            }
            return optionOnClickMethod()
        })}</StyledTagElementContainer></Menu>
    }


    return getAccessToken() !== undefined ? <>
        <TagsContainerSectionHeading sectionHeading={userStrings.myActionSectionHeadingText} />
        {renderPostOptions()}
    </> : null
}

export {ActionsContainerComponent}