import SignInComponent from "../../../Authentication/SignIn/components/SignIn";
import Header from "../../../common/components/Header";
import { StyledButtonAndProfileImageContainer } from "../../../common/components/Header/styledComponents";
import ReactPopUpModal from "../../../common/components/ReactPopUpModal";
import PostsContainer from "../PostContainer";
import TagsContainer from "../TagsContainer";
import { StyledHomeContainer, StyledTagsAndPostContainer } from "./styledComponents";

const Home = () => <StyledHomeContainer>
    <Header />
    <StyledTagsAndPostContainer>
       <TagsContainer/>
       <PostsContainer />
       <ReactPopUpModal SignInComponent = {<SignInComponent/>}/>
    </StyledTagsAndPostContainer>
</StyledHomeContainer>

export { Home }