import { AiFillCheckCircle } from "react-icons/ai"
import ProfileOrLogoMaker from "../../../common/components/ProfileOrLogoMaker"
import { caseConvertedCommentTypes } from "../../stores/types"
import { StyledApprovedByContainer, StyledApprovedByTextElement, StyledApprovedIconContainer, StyledCommentApprovedByAuthor, StyledCommentByImageContainer, StyledCommentContent, StyledCommentContentContainer, StyledCommentedDateAndTime, StyledCommenterAndCommentDateAndTimeContainer, StyledCommenterName, StyledCommentsContainer } from "./styledComponent"

import strings from '../../i18n/userStrings.json'
import { REACT_ICON_SIZE } from "../../constants"

interface CommentItemProps {
    commentItem : caseConvertedCommentTypes
}


const CommentItem = (props: CommentItemProps) => {

    const { commentItem } = props

    const {commentAuthor, commentedDateAndTime, isApproved, approvedBy, commentContent } = commentItem
    

    const isCommentApproved = () => {
        return isApproved ? <StyledApprovedByContainer>
            <StyledApprovedIconContainer>
                <AiFillCheckCircle size={REACT_ICON_SIZE} />
            </StyledApprovedIconContainer>
            <StyledApprovedByTextElement>
                {strings.approvedByText}
            </StyledApprovedByTextElement>
            <StyledCommentApprovedByAuthor>
                {approvedBy}
            </StyledCommentApprovedByAuthor>
        </StyledApprovedByContainer> : null
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