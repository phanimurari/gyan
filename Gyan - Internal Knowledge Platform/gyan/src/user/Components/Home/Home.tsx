import Header from "../../../common/components/Header";
import { StyledButtonAndProfileImageContainer } from "../../../common/components/Header/styledComponents";
import PostsContainer from "../PostContainer";
import TagsContainer from "../TagsContainer";
import { StyledHomeContainer, StyledTagsAndPostContainer } from "./styledComponents";

const Home = () => <StyledHomeContainer>
    <Header />
    <StyledTagsAndPostContainer>
       <TagsContainer/>
       <PostsContainer />
    </StyledTagsAndPostContainer>
</StyledHomeContainer>

export { Home }