import { caseConvertedCommentTypes, commentType, postType } from "../types"
       



class PostModel {

    id: number
    authorImageUrl: string
    authorName: string
    dateAndTime: string
    title: string
    description: string
    tags: Array<string>
    likedBy: Array<string>
    commentedBy: Array<string>
    comments: Array<caseConvertedCommentTypes>

    constructor(postObject: postType) {
        this.id = postObject.id
        this.authorImageUrl = postObject.author_image_url
        this.authorName = postObject.author_name
        this.dateAndTime = postObject.date_and_time
        this.title = postObject.title
        this.description = postObject.description
        this.tags = postObject.tags
        this.likedBy = postObject.liked_by
        this.commentedBy = postObject.commented_by
        this.comments = postObject.comments.map(comment => this.caseConvertedComment(comment))     
    }

    caseConvertedComment = (comment:commentType) => {
        const caseConvertedComment = {
            commentAuthor: comment.comment_author,
            commenterImageUrl: comment.commenter_image_url,
            commentedDateAndTime: comment.commented_date_and_time,
            isApproved: comment.is_approved,
            approvedBy: comment.approved_by,
            noOfLikes: comment.no_of_likes
            
        }

    return caseConvertedComment
    }
}

export {PostModel}