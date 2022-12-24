import { AiFillHeart, AiOutlineHeart, AiOutlineTags } from 'react-icons/ai'
import {BiCommentDetail} from 'react-icons/bi'

import imageUrls from '../../../common/constants/imageUrls/imageUrls.json'
import ProfileOrLogoMaker from "../../../common/components/ProfileOrLogoMaker"
import { caseConvertedPostTypes } from "../../stores/types"
import { StyledAuthorName, StyledCommentBoxConatiner, StyledCommentsAndCommentBoxContainer, StyledCommentsAndCountCountainer, StyledCommentsCount, StyledLikeAndCommentsCountContainer, StyledLikedIcon, StyledLikesContainer, StyledPostContentContainer, StyledPostCreationTime, StyledPostElement, StyledPostHeading, StyledPostMainContentElement, StyledPostTagsAndLikesAndCommentCountContainer, StyledPostTextContentContainer, StyledTagElement, StyledTextBoxElementContainer, StyledUITagsELemenntsContainer, StyledUnLikedIcon, SyledPostAuthorImageContainer } from "./styledComponents"

import strings from '../../i18n/userStrings.json'
import { useState } from 'react'
import CommentItem from '../CommentItem'
import TextBoxElement from '../../../common/components/TextBoxElement'
import ButtonElement from '../../../common/components/ButtonElement'


interface postItemProps {
    post: caseConvertedPostTypes
}


const PostItem = (props: postItemProps) => {
    
    const [commentContent, setCommentContent] = useState('')
    const [isPostLiked, setisPostLiked] = useState(false)

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
        return likedBy.length > 0 ? likedBy.slice(0, 3).map(like => <ProfileOrLogoMaker url={imageUrls.profile} size={20}/>) : null
    }

    const renderLikedCount = () => {
        return likedBy.length > 0 ? `${likedBy.length -3}+` : null
    }


    const onClickLikeOfThePost = () => {
        setisPostLiked(!isPostLiked)
    }

    const renderLikeIcon = () => {
        return isPostLiked ? <StyledLikedIcon onClick={onClickLikeOfThePost}><AiFillHeart/></StyledLikedIcon> : <StyledUnLikedIcon onClick={onClickLikeOfThePost}><AiOutlineHeart/></StyledUnLikedIcon>
    }
    
    const renderLikes = () => {
        return <StyledLikesContainer>
            {renderLikeImages()}
            {renderLikeIcon()}
            {renderLikedCount()}
      </StyledLikesContainer>
    }

    const renderComments = () => {
        return commentedBy.length > 0 ?<StyledCommentsAndCountCountainer onClick={onClickShowComments}>
            <BiCommentDetail />
            <StyledCommentsCount>{commentedBy.length} {strings.commentsText}</StyledCommentsCount>
        </StyledCommentsAndCountCountainer> : null
    }


    const onChangeTextBoxElementValue = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCommentContent(event.target.value)
    }

    const postThisCommentToThePost = () => {
        console.log("comment posted")
    }

    const renderCommentBox = () => <StyledCommentBoxConatiner>
         <SyledPostAuthorImageContainer>
            <ProfileOrLogoMaker url={authorImageUrl} size={40}/>
        </SyledPostAuthorImageContainer>
        <StyledTextBoxElementContainer>
            <TextBoxElement value={commentContent} placeHolderText={strings.commnetBoxPlaceHolderText} onChangeMethod={onChangeTextBoxElementValue} />
            <ButtonElement text={strings.commentsText} type={strings.typeButton} onClickMethod={postThisCommentToThePost}/>
        </StyledTextBoxElementContainer>
    </StyledCommentBoxConatiner>

    const renderListOfComments = () => {
        return showComments ? <StyledCommentsAndCommentBoxContainer>
            {comments.map(commentItem => <CommentItem commentItem={commentItem} key={commentItem.id} />)}
            {renderCommentBox()}
        </StyledCommentsAndCommentBoxContainer> : null
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