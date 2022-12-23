import { AiOutlineTags } from 'react-icons/ai'
import { FcLike } from 'react-icons/fc'
import {BiCommentDetail} from 'react-icons/bi'

import ProfileOrLogoMaker from "../../../common/components/ProfileOrLogoMaker"
import { caseConvertedPostTypes } from "../../stores/types"
import { StyledAuthorName, StyledCommentsAndCountCountainer, StyledCommentsCount, StyledLikeAndCommentsCountContainer, StyledLikesContainer, StyledPostContentContainer, StyledPostCreationTime, StyledPostElement, StyledPostHeading, StyledPostMainContentElement, StyledPostTagsAndLikesAndCommentCountContainer, StyledPostTextContentContainer, StyledTagElement, StyledUITagsELemenntsContainer, SyledPostAuthorImageContainer } from "./styledComponents"

import strings from '../../i18n/userStrings.json'
import { useState } from 'react'

interface postItemProps {
    post: caseConvertedPostTypes
}


const PostItem = (props: postItemProps) => {
    
    const { post } = props

    const [showComments, setShowComments] = useState(false)

    const {authorImageUrl,authorName, dateAndTime , title , description, tags, likedBy, commentedBy, comments} = post


    const onClickShowComments = () => {
        setShowComments(!showComments)
        console.log("show comments")
    }

    const renderUITags = () => {
        return tags.length > 0 ? tags.map(tag => <StyledTagElement key={tag}>
            <AiOutlineTags/>
            {tag}</StyledTagElement>) : null
    }

    const renderLikeImages = () => {
        return likedBy.length > 0 ? likedBy.slice(0, 3).map(like => <ProfileOrLogoMaker url={like} size={20}/>) : null
    }

    const renderLikedCount = () => {
        return likedBy.length > 0 ? `${likedBy.length -3}+` : null
    }

    const renderLikeIcon = () => {
        return <FcLike/>
    }
    
    const renderLikes = () => {
        return <StyledLikesContainer>
            {renderLikeImages()}
            {renderLikeIcon()}
            {renderLikedCount()}
      </StyledLikesContainer>
    }

    const renderComments = () => {
        return <StyledCommentsAndCountCountainer onClick={onClickShowComments}>
            <BiCommentDetail />
            <StyledCommentsCount>{commentedBy.length} {strings.commentsText}</StyledCommentsCount>
        </StyledCommentsAndCountCountainer>
    }

    const renderListOfComments = () => {

        return showComments ? <h1>Comments display</h1> : null
    }

    return <StyledPostElement>
        <StyledPostMainContentElement>
        <SyledPostAuthorImageContainer>
                <ProfileOrLogoMaker url={authorImageUrl} size={40}/>
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
            <StyledUITagsELemenntsContainer>
                {renderUITags()}            
            </StyledUITagsELemenntsContainer>
            <StyledLikeAndCommentsCountContainer>
                {renderLikes()}    
                {renderComments()}
            </StyledLikeAndCommentsCountContainer>
        </StyledPostTagsAndLikesAndCommentCountContainer>
        </StyledPostTextContentContainer>
        </StyledPostMainContentElement>
         <StyledPostContentContainer>
            {renderListOfComments()}
        </StyledPostContentContainer>
    </StyledPostElement>


}

export  {PostItem}