import { caseConvertedCommentTypes, commentType, postType } from "../types"
import { CommentModal } from "./commentModel"
       



class PostModel {

    id: string
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
        this.comments = postObject.comments.map(comment => new CommentModal(comment))     
    }
}

export {PostModel}