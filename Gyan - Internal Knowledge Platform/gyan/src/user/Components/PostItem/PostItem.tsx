import { AiFillHeart, AiOutlineHeart, AiOutlineTags } from 'react-icons/ai'
import { BiCommentDetail } from 'react-icons/bi'
import {GrSend} from 'react-icons/gr'


import colors from '../../styleGuide/themes/colors.json'
import userDetails from '../../../common/constants/userConstants/userContants.json'
import imageUrls from '../../../common/constants/imageUrls/imageUrls.json'
import ProfileOrLogoMaker from "../../../common/components/ProfileOrLogoMaker"
import { caseConvertedPostTypes, commentType } from "../../stores/types"
import { StyledAuthorName, StyledCommentBoxConatiner, StyledCommentsAndCommentBoxContainer, StyledCommentsAndCountCountainer, StyledCommentsCount, StyledLikeAndCommentsCountContainer, StyledLikedIcon, StyledLikesContainer, StyledPostContentContainer, StyledPostCreationTime, StyledPostElement, StyledPostHeading, StyledPostMainContentElement, StyledPostTagsAndLikesAndCommentCountContainer, StyledPostTextContentContainer, StyledSendButtonElement, StyledTagElement, StyledTextBoxElementContainer, StyledUITagsELemenntsContainer, StyledUnLikedIcon, SyledPostAuthorImageContainer } from "./styledComponents"

import strings from '../../i18n/userStrings.json'
import { useState } from 'react'
import CommentItem from '../CommentItem'
import TextBoxElement from '../../../common/components/TextBoxElement'
import { GetCurrentDateAndTimeUtil } from '../../../utilis/getCurrentTimeAndDateUtilis'
import { REACT_ICON_SIZE } from '../../constants'


interface postItemProps {
    post: caseConvertedPostTypes,
    addComment : (commentObject : commentType, id: string) => void
}


const PostItem = (props: postItemProps) => {
    
    const [commentContent, setCommentContent] = useState('')
    const [isPostLiked, setisPostLiked] = useState(false)

    const { post, addComment } = props

    const [showComments, setShowComments] = useState(false)

    const {authorImageUrl,authorName, dateAndTime , title , description, tags, likedBy, commentedBy, comments} = post


    const onClickShowComments = () => {
        setShowComments(!showComments)
    }

    const renderUITags = () => {

        const backgroundColorsArray = [colors.backgroundGrey, colors.Opal, colors.SandyTan, colors.crystal]
        const fontColorsArray = [colors.brightBlue, colors.orange, colors.darkBlueGrey, colors.neonRed]
        const randomBackgroundColor = backgroundColorsArray[Math.floor(Math.random()*backgroundColorsArray.length)]
        const randomFontColor = fontColorsArray[Math.floor(Math.random()*fontColorsArray.length)]


        return tags.length > 0 ? tags.map(tag => <StyledTagElement key={tag} randomBackgroundColor={randomBackgroundColor} randomFontColor={randomFontColor}>
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
        return isPostLiked ? <StyledLikedIcon onClick={onClickLikeOfThePost}><AiFillHeart  size={REACT_ICON_SIZE}/></StyledLikedIcon> : <StyledUnLikedIcon onClick={onClickLikeOfThePost}><AiOutlineHeart size={REACT_ICON_SIZE}/></StyledUnLikedIcon>
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
            <BiCommentDetail size={REACT_ICON_SIZE}/>
            <StyledCommentsCount>{comments.length} {strings.commentsText}</StyledCommentsCount>
        </StyledCommentsAndCountCountainer> 
    }


    const onChangeTextBoxElementValue = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCommentContent(event.target.value)
    }

    const postThisCommentToThePost = () => {
        if (commentContent !== '') {
            const commentObject = {
                comment_author: userDetails.userName,
                commenter_image_url: imageUrls.profile,
                comment_content: commentContent,
                commented_date_and_time: GetCurrentDateAndTimeUtil(),
                is_approved: null,
                approved_by: null,
                no_of_likes: null
            }
            addComment(commentObject, post.id)
            setCommentContent('')
        }
    }

    const renderCommentBox = () => <StyledCommentBoxConatiner>
         <SyledPostAuthorImageContainer>
            <ProfileOrLogoMaker url={authorImageUrl} size={40}/>
        </SyledPostAuthorImageContainer>
        <StyledTextBoxElementContainer>
            <TextBoxElement value={commentContent} placeHolderText={strings.commnetBoxPlaceHolderText} onChangeMethod={onChangeTextBoxElementValue} />
            <StyledSendButtonElement onClick={postThisCommentToThePost}><GrSend size={REACT_ICON_SIZE}/></StyledSendButtonElement>
        </StyledTextBoxElementContainer>
    </StyledCommentBoxConatiner>

    const renderListOfComments = () => {
        return showComments ? <StyledCommentsAndCommentBoxContainer>
            {comments.map(commentItem => <CommentItem commentItem={commentItem} key={commentItem.commentedDateAndTime} />)}
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