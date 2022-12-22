export interface commentType {
    "comment_author": string,
    "commenter_image_url": string,
    "commented_date_and_time": string,
    "is_approved" : boolean,
    "approved_by": string,
    "no_of_likes": number
}

export interface postType {
 "id" : number,
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
    "isApproved" : boolean,
    "approvedBy": string,
    "noOfLikes": number
}

export interface caseConvertedPostTypes {
 "id" : number,
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
