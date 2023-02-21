import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import TagsContainerSectionHeading from '../../../user/Components/Common/TagsContainerSectionHeadig';
import PostTagItem from '../../../user/Components/PostTagItem';
import { LIST_OF_ACTIONS_OPTIONS } from '../../../user/constants';

import strings from "../../../user/i18n/userStrings.json"

interface SideBarPropsTypes {
    listOfPostTags: Array<string>,
    setSelectedTag: (tag: string) => void,
    selectedPostsTag: string,
  onSetMyPosts: () => void,
  onSetReportedPosts: () => void,
  onSetSharedPosts : () => void
  selectedAction: string,
  onSetSelectedAction : (action: string) => void
}


const SideBar = (props: SideBarPropsTypes) => {

  const {listOfPostTags, setSelectedTag, selectedPostsTag, onSetMyPosts, selectedAction, onSetReportedPosts, onSetSharedPosts, onSetSelectedAction} = props
  const { collapseSidebar } = useProSidebar();

  const renderMenuItems = () => {
    const listOfPostTagsItems = listOfPostTags.map(tag => <MenuItem onClick={() => collapseSidebar()} ><PostTagItem tag={tag} key={tag} setSelectedTag={setSelectedTag} selectedPostsTag={selectedPostsTag}/></MenuItem>)
    return <>
      <TagsContainerSectionHeading sectionHeading={strings.domainsSectionHeadingText} />
      {listOfPostTagsItems}
    </>
  }


  const renderMyActionItems = () => {
   
     return <Menu><div>{LIST_OF_ACTIONS_OPTIONS.map(optionText => {
            const optionOnClickMethod = () => {
              if (optionText === strings.mypostsText) {
                const onClickMyPosts = () => {
                  onSetSelectedAction(optionText)
                }
                    return <MenuItem onClick={() => collapseSidebar()}><PostTagItem tag={optionText} key={optionText} setSelectedTag={onClickMyPosts} selectedPostsTag={selectedAction}/></MenuItem>
                }
              else if (optionText === strings.reportedPostsText) {
                
                 const onClickMyPosts = () => {
                  onSetSelectedAction(optionText)
                }

                    return <MenuItem onClick={() => collapseSidebar()}><PostTagItem tag={optionText} key={optionText} setSelectedTag={onClickMyPosts} selectedPostsTag={selectedAction}/></MenuItem>
                }
              else if (optionText === strings.sharedPoststText) {
                
                   const onClickMyPosts = () => {
                  onSetSelectedAction(optionText)
                }

                    return <MenuItem onClick={() => collapseSidebar()}><PostTagItem tag={optionText} key={optionText} setSelectedTag={onClickMyPosts} selectedPostsTag={selectedAction}/></MenuItem>
                }
            }
            return optionOnClickMethod()
        })}</div></Menu>

  }



  return (
    <div style={{ display: 'flex' }}>
        <Sidebar collapsedWidth={'0'} defaultCollapsed={true} >
        <Menu>
          <TagsContainerSectionHeading sectionHeading={strings.myActionSectionHeadingText}/>
          {renderMyActionItems()}
          {renderMenuItems()}
        </Menu>
      </Sidebar>
    </div>
  )
}

export default SideBar