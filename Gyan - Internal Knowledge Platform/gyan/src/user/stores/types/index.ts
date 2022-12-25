export interface commentType {
    "comment_author": string,
    "commenter_image_url": string,
    "commented_date_and_time": string,
    "comment_content" : string,
    "is_approved" : boolean | null,
    "approved_by" : string | null,
    "no_of_likes" : number | null
}

export interface postType {
 "id" : string,
 "author_image_url" : string,
 "author_name" : string,
 "date_and_time": string,
 "title": string,
 "description": string,
 "tags" : Array<string>,
 "liked_by" : Array<string>,
 "commented_by": Array<string>,
 "comments" : Array<commentType>
}

export interface postObjectType {
    posts : Array<postType>
}


export interface caseConvertedCommentTypes {
    "commentAuthor": string,
    "commenterImageUrl": string,
    "commentedDateAndTime": string,
    "commentContent" : string,
    "isApproved" : boolean | null,
    "approvedBy": string | null,
    "noOfLikes": number | null
}

export interface caseConvertedPostTypes {
 "id" : string,
 "authorImageUrl" : string,
 "authorName" : string,
 "dateAndTime": string,
 "title": string,
 "description": string,
 "tags" : Array<string>,
 "likedBy" : Array<string>,
 "commentedBy": Array<string>,
 "comments" : Array<caseConvertedCommentTypes>
}
