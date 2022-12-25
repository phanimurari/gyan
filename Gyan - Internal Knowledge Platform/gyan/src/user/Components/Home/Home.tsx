import SignInComponent from "../../../Authentication/SignIn/components/SignIn";
import Header from "../../../common/components/Header";
import ReactPopUpModal from "../../../common/components/ReactPopUpModal";
import { commentType, postObjectType } from "../../stores/types";
import CreateAPostContainer from "../CreateAPostContainer";
import PostsContainer from "../PostContainer";
import TagsContainer from "../TagsContainer";
import { StyledHomeContainer, StyledTagsAndPostContainer } from "./styledComponents";


interface HomeProps {
    userLogin: (loginObject: {}) => void,
    displayLoginModal: boolean,
    displayCreateApostModal: boolean,
    onToggleLoginModal: (value: boolean) => void,
    onToggleCreateAPostModal : (value: boolean) => void,
    isUerLoggedIn: boolean,
    userLoginApiStatus: number,
    postFetchingApiStatus : number
    listOfPosts: Array<postObjectType>,
    listOfPostTags: Array<string>,
    setSelectedTag: (tag: string) => void,
    selectedPostsTag: string,
    onSearchPost: (searchText: string) => void,
    addPostToListOfPosts: (postObject: any) => void,
    addComment : (commentObject : commentType, id : string) => void
}

const Home = (props: HomeProps) => {

const { userLogin, displayLoginModal, onToggleLoginModal, displayCreateApostModal, onToggleCreateAPostModal, isUerLoggedIn, userLoginApiStatus, listOfPosts, postFetchingApiStatus , listOfPostTags, setSelectedTag, selectedPostsTag, onSearchPost, addPostToListOfPosts, addComment} = props
    
return <StyledHomeContainer> 
    <Header onSearchPost={onSearchPost}onToggleLoginModal={onToggleLoginModal} isUerLoggedIn={isUerLoggedIn} onToggleCreateAPostModal={onToggleCreateAPostModal}/>
    <StyledTagsAndPostContainer>
        <TagsContainer onToggleLoginModal={onToggleLoginModal} listOfPosts={listOfPosts} onToggleCreateAPostModal={onToggleCreateAPostModal} postFetchingApiStatus={postFetchingApiStatus} listOfPostTags={listOfPostTags} setSelectedTag={setSelectedTag} selectedPostsTag={selectedPostsTag}/>
        <PostsContainer onToggleLoginModal={onToggleLoginModal} listOfPosts={listOfPosts} onToggleCreateAPostModal={onToggleCreateAPostModal} postFetchingApiStatus={postFetchingApiStatus} addComment={addComment}/>
         <ReactPopUpModal
            componentPassed={<CreateAPostContainer addPostToListOfPosts={addPostToListOfPosts} onToggleCreateAPostModal={onToggleCreateAPostModal}/>}
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