import { AiFillCheckCircle } from "react-icons/ai"
import ProfileOrLogoMaker from "../../../common/components/ProfileOrLogoMaker"
import { caseConvertedCommentTypes } from "../../stores/types"
import { StyledApprovedByContainer, StyledCommentApprovedByAuthor, StyledCommentByImageContainer, StyledCommentContent, StyledCommentContentContainer, StyledCommentedDateAndTime, StyledCommenterAndCommentDateAndTimeContainer, StyledCommenterName, StyledCommentsContainer } from "./styledComponent"

import strings from '../../i18n/userStrings.json'

interface CommentItemProps {
    commentItem : caseConvertedCommentTypes
}


const CommentItem = (props: CommentItemProps) => {

    const { commentItem } = props

    const {commentAuthor, commentedDateAndTime, commenterImageUrl, isApproved, approvedBy, commentContent } = commentItem
    

    const isCommentApproved = () => {
        return isApproved ? <StyledApprovedByContainer><AiFillCheckCircle /> {strings.approvedByText} <StyledCommentApprovedByAuthor>{approvedBy}</StyledCommentApprovedByAuthor></StyledApprovedByContainer> : null
    }

    return <StyledCommentsContainer>
        <StyledCommentByImageContainer>
            <ProfileOrLogoMaker url={commentItem.commenterImageUrl} size={30}/>
        </StyledCommentByImageContainer>
        <StyledCommentContentContainer>
            <StyledCommenterAndCommentDateAndTimeContainer>
                <StyledCommenterName>
                    {commentAuthor}
                </StyledCommenterName>
                <StyledCommentedDateAndTime>
                    {commentedDateAndTime}
                </StyledCommentedDateAndTime>
            </StyledCommenterAndCommentDateAndTimeContainer>
            <StyledCommentContent>
                {commentContent}
            </StyledCommentContent>
           {isCommentApproved()}
        </StyledCommentContentContainer>
    </StyledCommentsContainer>
}

export {CommentItem}