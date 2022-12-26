import { v4 as uuidv4 } from 'uuid';
import { API_FAILED, API_FETCHING, API_INITIAL, API_SUCCESS } from "@ib/api-constants"
import { action, computed, makeAutoObservable, observable } from "mobx"
import { PostApiService } from "../../postsService/PostsApiService"
import { PostsFixtureService } from "../../postsService/PostsFixtureService"
import { PostModel } from "./postModel"
import images from '../../../common/constants/imageUrls/imageUrls.json'
import userDetails from '../../../common/constants/userConstants/userContants.json'
import { commentType, postType } from '../types';
import { GetCurrentDateAndTimeUtil } from '../../../utilis/getCurrentTimeAndDateUtilis';
import { CommentModal } from './commentModel';

class PostsStore {
    postFetchingApiStatus: number
    listOfPosts: Array<PostModel>
    initialListOfPosts: Array<PostModel>
    postsService: PostsFixtureService | PostApiService
    postsApiError : Error | null | string
    newPostItem: any 
    selectedTag : string 
    constructor(postsService: any) {
        makeAutoObservable(this, {
            postFetchingApiStatus: observable,
            postsApiError: observable,
            listOfPosts: observable,
            initialListOfPosts : observable,
            newPostItem: observable,
            selectedTag : observable,
            init: action,
            setPostApiStatus: action,
            getPosts: action,
            setPostsApiError: action,
            setPostsResponse: action,
            setSelectedTag: action.bound,
            onSearchPost: action.bound,
            addPostToListOfPosts: action.bound,
            addCommentToPost : action.bound,
            listOfPostsBasedOnSelectedTags: action,
            listOfPostTags: computed
        })
        this.listOfPosts = []    
        this.initialListOfPosts = []
        this.postsService = postsService
        this.postFetchingApiStatus = API_INITIAL
        this.postsApiError = null
        this.selectedTag = ''
    }

    init() {
        this.postFetchingApiStatus = API_INITIAL   
        this.listOfPosts = []
        this.initialListOfPosts = []
    }

    setPostApiStatus(status : number) {
       this.postFetchingApiStatus = status
    }

    setPostsApiError(error: Error | string) {
        this.postsApiError = error
    }
    
    setPostsResponse(response: any) {
        this.postFetchingApiStatus = API_SUCCESS
        this.listOfPosts = response.posts.map((post: any) => new PostModel(post))
        this.initialListOfPosts = this.listOfPosts
    }

    get listOfPostTags() {
        const tagsArray = this.initialListOfPosts.map(post => post.tags).flat(2)
        const uniqueTags = tagsArray.filter( (tag : string, index: number) => tagsArray.indexOf(tag) === index  ) 
        return uniqueTags
    }

    listOfPostsBasedOnSelectedTags() {
        return null
    }

    setSelectedTag(tag: string) {
        this.selectedTag = tag
        const postsWithSelectedTags = this.initialListOfPosts.filter(post => {
            if (post.tags.includes(tag)) {
                return post
            }
            
        })
        this.listOfPosts = postsWithSelectedTags
    }

    onSearchPost(postText: string) {
        const searchedPosts = this.initialListOfPosts.filter(post => {
            if (post.title.toLowerCase().includes(postText.toLowerCase())) {
                return post
            }
        }) 
        if (postText !== '') {
            this.listOfPosts = searchedPosts    
        }
        else {
            this.listOfPosts = this.initialListOfPosts
        }
        
    }

    getPosts = async () => {
        this.postFetchingApiStatus = API_FETCHING
        const postsPromise = await this.postsService.getPosts()
        
        if (postsPromise !== undefined) {
            this.setPostsResponse(postsPromise)
            this.setPostApiStatus(API_SUCCESS)
        }
        else {
            this.setPostApiStatus(API_FAILED)
        }
    };  

    addPostToListOfPosts = (postObject: any) => {
        const idOfThePost = uuidv4()
        const authorImageUrl = images.profile
        const authorName = userDetails.userName
        const dateAndTime = GetCurrentDateAndTimeUtil()
        const title = postObject.title
        const description = postObject.description
        const tags : Array<string> = [postObject.tag]
        const likedBy : Array<string> = []
        const commentedBy : Array<string>= []
        const comments : Array<commentType>= []

        const postFormedObject = {
            id: idOfThePost,
            author_image_url: authorImageUrl,
            author_name: authorName,
            date_and_time: dateAndTime,
            title,
            description,
            tags : tags,
            liked_by: likedBy,
            commented_by: commentedBy,
            comments : comments,
        }
        const postModelObject = new PostModel(postFormedObject)
        const {listOfPosts} = this
        this.listOfPosts = [...listOfPosts, postModelObject]
    }

    addCommentToPost = (commentObject : commentType, id: string) => {
        const { listOfPosts } = this
        const caseConvertedCommentObjectModal = new CommentModal(commentObject)
        const updatedListOfPosts = listOfPosts.map(post =>
        {
            if (post.id == id) {
                post.comments = [...post.comments, caseConvertedCommentObjectModal] 
            }
            return post
        })
        this.listOfPosts = updatedListOfPosts
    }
}

export {PostsStore}