import { AiOutlineTags } from 'react-icons/ai'
import {FcLike} from 'react-icons/fc'

import ProfileOrLogoMaker from "../../../common/components/ProfileOrLogoMaker"
import { caseConvertedPostTypes } from "../../stores/types"
import { StyledAuthorName, StyledLikeAndCommentsCountContainer, StyledPostContentContainer, StyledPostCreationTime, StyledPostElement, StyledPostHeading, StyledPostMainContentElement, StyledPostTagsAndLikesAndCommentCountContainer, StyledPostTextContentContainer, StyledTagElement, SyledPostAuthorImageContainer } from "./styledComponents"

interface postItemProps {
    post: caseConvertedPostTypes
}


const PostItem = (props: postItemProps) => {
    
    const { post } = props

    const {authorImageUrl,authorName, dateAndTime , title , description, tags, likedBy, commentedBy, comments} = post


    const renderUITags = () => {
        return tags.length > 0 ? tags.map(tag => <StyledTagElement>
            <AiOutlineTags/>
            {tag}</StyledTagElement>) : null
    }

    const renderLikeImages = () => {
        return likedBy.length > 0 ? likedBy.slice(0, 3).map(like => <ProfileOrLogoMaker url={like}/>) : null
    }

    const renderLikedCount = () => {
        return likedBy.length > 0 ? `${likedBy.length}+` : null
    }

    const renderLikeIcon = () => {
        return <FcLike/>
    }

    return <StyledPostElement>
        <StyledPostMainContentElement>
        <SyledPostAuthorImageContainer>
            <ProfileOrLogoMaker url={authorImageUrl}/>
        </SyledPostAuthorImageContainer>
        <StyledPostTextContentContainer>
        <StyledPostContentContainer>
            <StyledAuthorName>
                {authorName}
            </StyledAuthorName>
            <StyledPostCreationTime>
                {dateAndTime}
            </StyledPostCreationTime>
        </StyledPostContentContainer>
        <StyledPostContentContainer>
                <StyledPostHeading>
                    {title}
                </StyledPostHeading>
        </StyledPostContentContainer>
        <StyledPostTagsAndLikesAndCommentCountContainer>
            <StyledLikeAndCommentsCountContainer>
                {renderUITags()}            
            </StyledLikeAndCommentsCountContainer>
            <StyledLikeAndCommentsCountContainer>
                {renderLikeImages()}
                {renderLikeIcon()}
                {renderLikedCount() }
            </StyledLikeAndCommentsCountContainer>
        </StyledPostTagsAndLikesAndCommentCountContainer>
            </StyledPostTextContentContainer>
        </StyledPostMainContentElement>
    </StyledPostElement>


}

export  {PostItem}