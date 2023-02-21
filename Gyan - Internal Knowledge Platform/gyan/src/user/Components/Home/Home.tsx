
import SignInComponent from "../../../Authentication/SignIn/components/SignIn";
import SignOutConfirmModal from "../../../Authentication/SignIn/components/SignOutConfirmModal";
import Header from "../../../common/components/Header";
import ReactPopUpModal from "../../../common/components/ReactPopUpModal";
import SideBar from '../../../common/components/SideBar';
import { commentType, postObjectType } from "../../stores/types";
import CreateAPostContainer from "../CreateAPostContainer";
import PostsContainer from "../PostContainer";
import TagsContainer from "../TagsContainer";
import { StyledHomeContainer, StyledTagsAndPostContainer, StyledTagsMobileViewContainer, StyledTagsViewContainer } from "./styledComponents";


interface HomeProps {
    userLogin: (loginObject: {}) => void,
    displayLoginModal: boolean
    displayCreateApostModal: boolean
    displayOnLogOutModal : boolean
    onToggleLoginModal: (value: boolean) => void
    onToggleCreateAPostModal: (value: boolean) => void
    onToggleSignOutConfirmModal : (value: boolean) => void
    isUerLoggedIn: boolean,
    userLoginApiStatus: number,
    postFetchingApiStatus : number
    listOfPosts: Array<postObjectType>,
    listOfPostTags: Array<string>,
    setSelectedTag: (tag: string) => void,
    selectedPostsTag: string,
    selectedAction : string
    onSearchPost: (searchText: string) => void,
    addPostToListOfPosts: (postObject: any) => void,
    addComment: (commentObject: commentType, id: string) => void,
    onPostLike: (postId: string) => void,
    onReportPost: (id: string) => void
    onAddPostToSharedPostsList: (id: string) => void,
    onSetMyPosts: () => void,
    onSetReportedPosts: () => void,
    onSetSharedPosts: () => void,
    onSetSelectedAction: (selectedAction: string) => void,
    onDeleteMyPosts : (id: string) => void
}

const Home = (props: HomeProps) => {

const { userLogin, displayLoginModal, onToggleLoginModal, displayCreateApostModal, onToggleCreateAPostModal, isUerLoggedIn, userLoginApiStatus, listOfPosts, postFetchingApiStatus , listOfPostTags, setSelectedTag, selectedPostsTag, onSearchPost, addPostToListOfPosts, addComment, onPostLike, displayOnLogOutModal, onToggleSignOutConfirmModal, onReportPost, onAddPostToSharedPostsList, onSetMyPosts, onSetReportedPosts, onSetSharedPosts, onSetSelectedAction, selectedAction, onDeleteMyPosts} = props
    
    return <StyledHomeContainer>
    <Header onSearchPost={onSearchPost} onToggleLoginModal={onToggleLoginModal} isUerLoggedIn={isUerLoggedIn} onToggleCreateAPostModal={onToggleCreateAPostModal} onToggleSignOutConfirmModal={onToggleSignOutConfirmModal}/>
    <StyledTagsAndPostContainer>
        <StyledTagsViewContainer>
                <TagsContainer  listOfPosts={listOfPosts} postFetchingApiStatus={postFetchingApiStatus} listOfPostTags={listOfPostTags} setSelectedTag={setSelectedTag} selectedPostsTag={selectedPostsTag} onSetMyPosts={onSetMyPosts} onSetReportedPosts={onSetReportedPosts} onSetSharedPosts={onSetSharedPosts} onSetSelectedAction={onSetSelectedAction} selectedAction={selectedAction}/>
        </StyledTagsViewContainer>
            <StyledTagsMobileViewContainer>
                <SideBar listOfPostTags={listOfPostTags} setSelectedTag={setSelectedTag} selectedPostsTag={selectedPostsTag} onSetMyPosts={onSetMyPosts} selectedAction={selectedAction} onSetReportedPosts={onSetReportedPosts} onSetSharedPosts={onSetSharedPosts} onSetSelectedAction={onSetSelectedAction}/>
        </StyledTagsMobileViewContainer>
            <PostsContainer onToggleLoginModal={onToggleLoginModal} listOfPosts={listOfPosts} onToggleCreateAPostModal={onToggleCreateAPostModal} postFetchingApiStatus={postFetchingApiStatus} addComment={addComment} onPostLike={onPostLike} setSelectedTag={setSelectedTag} onReportPost={onReportPost} onAddPostToSharedPostsList={onAddPostToSharedPostsList} onDeleteMyPosts={onDeleteMyPosts} />
        <ReactPopUpModal
            componentPassed={<SignOutConfirmModal onToggleLoginModal={onToggleSignOutConfirmModal}/>}
            displayModal={displayOnLogOutModal}
            onToggleLoginModal={onToggleSignOutConfirmModal} />
        <ReactPopUpModal
            componentPassed={<CreateAPostContainer addPostToListOfPosts={addPostToListOfPosts} onToggleCreateAPostModal={onToggleCreateAPostModal} />}
            displayModal={displayCreateApostModal}
            onToggleLoginModal={onToggleCreateAPostModal} />
        <ReactPopUpModal
            componentPassed={<SignInComponent userLogin={userLogin} onToggleLoginModal={onToggleLoginModal} userLoginApiStatus={userLoginApiStatus} />}
            displayModal={displayLoginModal}
            onToggleLoginModal={onToggleLoginModal} />
    </StyledTagsAndPostContainer>
</StyledHomeContainer>
}

export { Home }