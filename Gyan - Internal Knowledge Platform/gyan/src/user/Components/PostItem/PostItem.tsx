import { AiFillHeart, AiOutlineHeart, AiOutlineTags } from 'react-icons/ai'
import {BsThreeDotsVertical} from 'react-icons/bs'
import { BiCommentDetail } from 'react-icons/bi'
import { GrSend } from 'react-icons/gr'

import colors from '../../styleGuide/themes/colors.json'
import userDetails from '../../../common/constants/userConstants/userContants.json'
import imageUrls from '../../../common/constants/imageUrls/imageUrls.json'
import ProfileOrLogoMaker from "../../../common/components/ProfileOrLogoMaker"
import { caseConvertedPostTypes, commentType } from "../../stores/types"
import { StyledAuthorName, StyledCommentBoxConatiner, StyledCommentsAndCommentBoxContainer, StyledCommentsAndCountCountainer, StyledCommentsCount, StyledHighlightedNumberOfLikesCount, StyledIconImagesCountContainer, StyledLikeAndCommentsCountContainer, StyledLikeCountElement, StyledLikedIcon, StyledLikeIconCountContainer, StyledLikesContainer, StyledNumberOfLikesCount, StyledPostContentContainer, StyledPostContentContainerMobileView, StyledPostCreationTime, StyledPostElement, StyledPostHeading, StyledPostMainContentElement, StyledPostOptionItem, StyledPostOptionsButton, StyledPostOptionsContainer, StyledPostTagsAndLikesAndCommentCountContainer, StyledPostTextContentAndOptionIconContainer, StyledPostTextContentContainer, StyledProfileImageContinaerInMobileView, StyledSendButtonElement, StyledTagElement, StyledTextBoxElementContainer, StyledUITagsELemenntsContainer, StyledUnLikedIcon, SyledPostAuthorImageContainer } from "./styledComponents"

import strings from '../../i18n/userStrings.json'
import { useState } from 'react'
import CommentItem from '../CommentItem'
import TextBoxElement from '../../../common/components/TextBoxElement'
import { GetCurrentDateAndTimeUtil } from '../../../utilis/getCurrentTimeAndDateUtilis'
import { REACT_ICON_SIZE , EVENT_TYPE_ENTER, USER_POST_OPTION, POST_OPTION} from '../../constants'
import { getAccessToken } from '../../../utilis/StorageUtilis'
import { IconContext } from 'react-icons'
import { checkWhetherPostIsCreatedByLoggedInUser } from '../../../utilis/checkUserPostUtilis'


interface postItemProps {
    post: caseConvertedPostTypes
    addComment: (commentObject: commentType, id: string) => void
    onPostLike: (postId: string) => void
    onToggleLoginModal: (value: boolean) => void
    setSelectedTag: (id: string) => void
    onReportPost: (id: string) => void
    onAddPostToSharedPostsList: (id: string) => void,
    onDeleteMyPosts : (id : string) => void
}


const PostItem = (props: postItemProps) => {
    
    const [commentContent, setCommentContent] = useState('')
    const [showPostItemOptions, setShowPostItemOptions ] = useState(false)
    const [isPostLiked, setisPostLiked] = useState(false)

    const { post, addComment, onPostLike , onToggleLoginModal, setSelectedTag, onReportPost, onAddPostToSharedPostsList, onDeleteMyPosts} = props

    const [showComments, setShowComments] = useState(false)

    const {authorImageUrl,authorName, dateAndTime , title , tags, likedBy, comments, id} = post

    const onClickShowComments = () => {
        setShowComments(!showComments)
    }    

    const renderUITags = () => {
        const backgroundColorsArray = [colors.liteBlue, colors.greenishTela, colors.greenishTela]
        const fontColorsArray = [colors.brightBlue, colors.brightGreen, colors.neonRed]
        return tags.length > 0 ? tags.map(tag => {   
            const onClickSelectedTag = () => setSelectedTag(tag)
            return <StyledTagElement key={tag} randomBackgroundColor={backgroundColorsArray[tags.indexOf(tag) ? tags.indexOf(tag) : 0]} randomFontColor={fontColorsArray[tags.indexOf(tag) ? tags.indexOf(tag) : 0]} onClick={onClickSelectedTag} >
                <AiOutlineTags size={15} />
                {tag}</StyledTagElement>
        }) : null
    }

    const renderLikeImages = () => {
        return likedBy.length > 2 ? likedBy.slice(0, 3).map(like => <ProfileOrLogoMaker url={like} size={20}/>) : null
    }

    const renderLikedCount = () => {
        return likedBy.length > 2  ? <StyledLikeCountElement>+{likedBy.length -3}</StyledLikeCountElement> : null
    }


    const onClickLikeOfThePost = () => {
        if (getAccessToken() === undefined) {   
            onToggleLoginModal(true)
        } else {
            onToggleLoginModal(false)
            setisPostLiked(!isPostLiked)
            onPostLike(id)   
       }
    }

    const renderLikeIcon = () => {
        return isPostLiked ? <StyledLikedIcon onClick={onClickLikeOfThePost}><AiFillHeart  size={REACT_ICON_SIZE}/></StyledLikedIcon> : <StyledUnLikedIcon onClick={onClickLikeOfThePost}><AiOutlineHeart size={REACT_ICON_SIZE}/></StyledUnLikedIcon>
    }

    const renderLikesCount = () => likedBy.length > 0 ? isPostLiked ? <StyledHighlightedNumberOfLikesCount>{likedBy.length}</StyledHighlightedNumberOfLikesCount> : <StyledNumberOfLikesCount>{likedBy.length}</StyledNumberOfLikesCount> : null
    
    const renderLikes = () => {
        return <StyledLikesContainer>
            <StyledIconImagesCountContainer>
                {renderLikeImages()}
                {renderLikedCount()}
            </StyledIconImagesCountContainer>
            <StyledLikeIconCountContainer>
                {renderLikeIcon()}
                {renderLikesCount()}
            </StyledLikeIconCountContainer>
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


    const onToggleLoginModalToFalseAndCommmentContentNotEmpty = () => {
    onToggleLoginModal(false)
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

    const onToogleLoginModalAndAddTheComment = async () => {
        await onToggleLoginModal(true)
        getAccessToken() == undefined ? onToggleLoginModal(true) : onToggleLoginModalToFalseAndCommmentContentNotEmpty()
    }

    const postThisCommentToThePost = () => {
        getAccessToken() === undefined ? onToogleLoginModalAndAddTheComment() : onToggleLoginModalToFalseAndCommmentContentNotEmpty()
    }

    const detectCtrlAndEnterKeys = (event:any) => {
        if ( (event.ctrlKey || event.metaKey) &&  event.key === "Enter") {
          if(commentContent !== "") {
            postThisCommentToThePost()
          }
        } 
    }

    const renderCommentBox = () => <StyledCommentBoxConatiner>
         <SyledPostAuthorImageContainer>
            <ProfileOrLogoMaker url={imageUrls.profile} size={40}/>
        </SyledPostAuthorImageContainer>
        <StyledTextBoxElementContainer>
            <TextBoxElement value={commentContent} placeHolderText={strings.commnetBoxPlaceHolderText} onChangeMethod={onChangeTextBoxElementValue} onKeyDownMethod={detectCtrlAndEnterKeys} />
        </StyledTextBoxElementContainer>
        <StyledSendButtonElement onClick={postThisCommentToThePost}>
            <IconContext.Provider value={{ color: `${colors.brightBlue}`}}>
            <GrSend size={REACT_ICON_SIZE} color={colors.brightBlue}/>
        </IconContext.Provider>
        </StyledSendButtonElement>
    </StyledCommentBoxConatiner>



    const renderListOfComments = () => {
        return showComments ? <StyledCommentsAndCommentBoxContainer>
            {comments.map(commentItem => <CommentItem commentItem={commentItem} key={commentItem.commentedDateAndTime} />)}
            {renderCommentBox()}
        </StyledCommentsAndCommentBoxContainer> : null
    }

    const toggleDisplayPostOptions = () => {
        setShowPostItemOptions(!showPostItemOptions)
    }

    const renderPostOptions = () => {

        const options =  checkWhetherPostIsCreatedByLoggedInUser(authorName) ? USER_POST_OPTION : POST_OPTION

        const renderListItems = options.map(optionItem => {
            const onClickPostOption = () => {
                if (optionItem === strings.sharePostOptionText)
                {
                    onAddPostToSharedPostsList(post.id)
                }
                else if (optionItem === strings.reportPostOptionText) {
                     onReportPost(post.id)
                }
                else if (optionItem === strings.deletePostOptionText) {
                    onDeleteMyPosts(post.id)
                }
                setShowPostItemOptions(false)
            }
            return <StyledPostOptionItem key={optionItem} onClick={onClickPostOption}>{optionItem}</StyledPostOptionItem>
        })
            
        return showPostItemOptions ?
            <StyledPostOptionsContainer>
                {renderListItems}
            </StyledPostOptionsContainer>: null
    }

    return <StyledPostElement>
        <StyledPostMainContentElement>
        <SyledPostAuthorImageContainer>
          <ProfileOrLogoMaker url={authorImageUrl} size={50}/>
        </SyledPostAuthorImageContainer>
        <StyledPostTextContentContainer>
        <StyledPostTextContentAndOptionIconContainer>
          <StyledPostContentContainerMobileView>  
            <StyledProfileImageContinaerInMobileView>
                <ProfileOrLogoMaker url={authorImageUrl} size={50}/>
            </StyledProfileImageContinaerInMobileView>
            <StyledAuthorName>
                {authorName}
            </StyledAuthorName>
            <StyledPostCreationTime>
                {dateAndTime}
            </StyledPostCreationTime>
          </StyledPostContentContainerMobileView>
            <StyledPostOptionsButton onClick={toggleDisplayPostOptions}>
                <BsThreeDotsVertical size={25} />
            </StyledPostOptionsButton>
                {renderPostOptions() }
        </StyledPostTextContentAndOptionIconContainer>        
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