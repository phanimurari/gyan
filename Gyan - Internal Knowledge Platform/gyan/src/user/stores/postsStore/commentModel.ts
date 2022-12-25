import { commentType } from "../types"

class CommentModal {
    commentAuthor: string
    commenterImageUrl: string
    commentedDateAndTime: string
    commentContent: string
    isApproved: boolean | null
    approvedBy: string | null
    noOfLikes: number | null
    
    constructor(commentObject: commentType) {
        this.commentAuthor = commentObject.comment_author
        this.commenterImageUrl = commentObject.commenter_image_url
        this.commentedDateAndTime = commentObject.commented_date_and_time
        this.commentContent = commentObject.comment_content
        this.isApproved = commentObject.is_approved
        this.approvedBy = commentObject.approved_by
        this.noOfLikes = commentObject.no_of_likes
    }

}

export {CommentModal}

    