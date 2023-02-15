import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import ActionsContainerComponent from '../../../user/Components/Common/ActionsContainerComponent';
import TagsContainerSectionHeading from '../../../user/Components/Common/TagsContainerSectionHeadig';
import PostTagItem from '../../../user/Components/PostTagItem';

import strings from "../../../user/i18n/userStrings.json"

interface SideBarPropsTypes {
    listOfPostTags: Array<string>,
    setSelectedTag: (tag: string) => void,
    selectedPostsTag: string,
  onSetMyPosts: () => void,
  onSetReportedPosts: () => void,
  onSetSharedPosts : () => void
  selectedAction : string
}


const SideBar = (props: SideBarPropsTypes) => {

  const {listOfPostTags, setSelectedTag, selectedPostsTag, onSetMyPosts, selectedAction, onSetReportedPosts, onSetSharedPosts} = props
  const { collapseSidebar } = useProSidebar();

  const renderMenuItems = () => {
    const listOfPostTagsItems = listOfPostTags.map(tag => <MenuItem onClick={() => collapseSidebar()} ><PostTagItem tag={tag} key={tag} setSelectedTag={setSelectedTag} selectedPostsTag={selectedPostsTag}/></MenuItem>)
    return <>
      <TagsContainerSectionHeading sectionHeading={strings.domainsSectionHeadingText} />
      {listOfPostTagsItems}
    </>
  }

  return (
    <div style={{ display: 'flex' }}>
        <Sidebar collapsedWidth={'0'} defaultCollapsed={true} >
        <Menu>
            <ActionsContainerComponent onSetMyPosts={onSetMyPosts} selectedAction={selectedAction} onSetReportedPosts={onSetReportedPosts} onSetSharedPosts={onSetSharedPosts} />
          {renderMenuItems()}
        </Menu>
      </Sidebar>
    </div>
  )
}

export default SideBar