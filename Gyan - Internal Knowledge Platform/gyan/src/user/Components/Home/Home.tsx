import SignInComponent from "../../../Authentication/SignIn/components/SignIn";
import Header from "../../../common/components/Header";
import ReactPopUpModal from "../../../common/components/ReactPopUpModal";
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
    userLoginApiStatus: number
}

const Home = (props: HomeProps) => {

const { userLogin, displayLoginModal, onToggleLoginModal, displayCreateApostModal, onToggleCreateAPostModal, isUerLoggedIn, userLoginApiStatus } = props
    
return <StyledHomeContainer> 
    <Header onToggleLoginModal={onToggleLoginModal} isUerLoggedIn={isUerLoggedIn} onToggleCreateAPostModal={onToggleCreateAPostModal}/>
    <StyledTagsAndPostContainer>
        <TagsContainer />
        <PostsContainer onToggleLoginModal={onToggleLoginModal} />
         <ReactPopUpModal
            componentPassed={<CreateAPostContainer/>}
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