import { v4 as uuidv4 } from 'uuid';
import { API_FAILED, API_FETCHING, API_INITIAL, API_SUCCESS } from "@ib/api-constants"
import { action, computed, makeAutoObservable, observable } from "mobx"
import { toJS } from "mobx";
import { PostApiService } from "../../postsService/PostsApiService"
import { PostsFixtureService } from "../../postsService/PostsFixtureService"
import { PostModel } from "./postModel"
import images from '../../../common/constants/imageUrls/imageUrls.json'
import userDetails from '../../../common/constants/userConstants/userContants.json'
import { commentType } from '../types';
import { GetCurrentDateAndTimeUtil } from '../../../utilis/getCurrentTimeAndDateUtilis';
import { CommentModal } from './commentModel';
import { DEFAULT_SELECTED_TAG } from '../../constants';
import imageUrls from "../../../common/constants/imageUrls/imageUrls.json"

class PostsStore {
    postFetchingApiStatus: number
    listOfPosts: Array<PostModel>
    initialListOfPosts: Array<PostModel>
    sharedPosts: Array<PostModel>
    reportedPosts: Array<PostModel>
    myPosts : Array<PostModel>
    postsService: PostsFixtureService | PostApiService
    postsApiError : Error | null | string
    newPostItem: any 
    selectedTag : string 
    constructor(postsService: any) {
        makeAutoObservable(this, {
            postFetchingApiStatus: observable,
            postsApiError: observable,
            listOfPosts: observable,
            initialListOfPosts: observable,
            myPosts: observable,
            sharedPosts: observable,
            reportedPosts : observable,
            newPostItem: observable,
            selectedTag : observable,
            init: action,
            setPostApiStatus: action,
            getPosts: action,
            setPostsApiError: action,
            setPostsResponse: action,
            setSelectedTag: action.bound,
            onPostLike : action.bound,
            onSearchPost: action.bound,
            onReportPost : action.bound,
            addPostToListOfPosts: action.bound,
            addCommentToPost: action.bound,
            onAddPostToSharedPostsList : action.bound,
            onSetMyPosts: action,
            onSetReportedPosts: action,
            onSetSharedPosts: action,
            onDeleteMyPosts : action,
            listOfPostsBasedOnSelectedTags: action,
            listOfPostTags: computed,
        })
        this.listOfPosts = []    
        this.initialListOfPosts = []
        this.sharedPosts = []
        this.reportedPosts = []
        this.myPosts = []
        this.postsService = postsService
        this.postFetchingApiStatus = API_INITIAL
        this.postsApiError = null
        this.selectedTag = DEFAULT_SELECTED_TAG
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

    onPostLike(id: string) {  
        
        const likedPost = this.initialListOfPosts.find(post => post.id === id)
        
        const likedBy = likedPost?.likedBy
        
        const likedImage = imageUrls.logo

        const isLikeImagePresentInList = likedBy?.includes(likedImage)

        if (!isLikeImagePresentInList && likedBy) {
            const updatedLikedBy = [...likedBy, likedImage]
            const updatedPosts = this.initialListOfPosts.map(post => {
                if (post.id === id) {
                    post.likedBy = updatedLikedBy
                }
                return post
            })
            this.listOfPosts = updatedPosts
        }
        else {
            const updatedLikedBy = likedBy?.filter(likeItemImage => {
                if (likeItemImage !== likedImage) {
                    return likeItemImage       
                }
            })
            if (updatedLikedBy?.length) {
                const updatedPosts = this.initialListOfPosts.map(post => {
                    if (post.id === id) {
                        post.likedBy = updatedLikedBy
                    }
                    return post
                })
                this.listOfPosts = updatedPosts
            }
        }
    }

    get listOfPostTags() {
        const tagsArray = this.initialListOfPosts.map(post => post.tags).flat(2)
        const uniqueTags = tagsArray.filter((tag: string, index: number) => tagsArray.indexOf(tag) === index)
        return [DEFAULT_SELECTED_TAG, ...uniqueTags]
    }

    listOfPostsBasedOnSelectedTags() {
        return null
    }

    setSelectedTag(tag: string) {
        this.selectedTag = tag
        let postsWithSelectedTags : Array<PostModel> = []
        if (tag !== DEFAULT_SELECTED_TAG) {
             postsWithSelectedTags = this.initialListOfPosts.filter(post => {
                if (post.tags.includes(tag)) {
                    return post
                }
            })
        }
        if (postsWithSelectedTags.length > 0) {
            this.listOfPosts = postsWithSelectedTags
        }
        else {
            this.listOfPosts = this.initialListOfPosts
        }
    }

    onSearchPost(postText: string) {
         this.selectedTag = DEFAULT_SELECTED_TAG
        const searchedPosts = this.initialListOfPosts.filter(post => {
            if (post.title.toLowerCase().includes(postText.toLowerCase())) {
                return post
            }
        }) 
        if (postText != "") {
            this.listOfPosts = searchedPosts    
        }
        else {
            this.listOfPosts = this.initialListOfPosts
        }

        console.log(this.selectedTag)
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
        const { initialListOfPosts } = this
        const { myPosts } = this
        this.myPosts = [postModelObject, ...myPosts]
        this.listOfPosts = [postModelObject, ...initialListOfPosts]
        this.initialListOfPosts = [postModelObject, ...initialListOfPosts]
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

    onReportPost(id: string) {
        const { reportedPosts } = this
        const isPostAlreadyInReportedPosts = reportedPosts.find(post => post.id == id) 
        if (!isPostAlreadyInReportedPosts) {
           const filteSharedPostsFromInitialPosts = this.initialListOfPosts.filter(post => post.id === id)
            this.reportedPosts = [...filteSharedPostsFromInitialPosts, ...reportedPosts]
        }
    }
    
    onAddPostToSharedPostsList = (id: string) => {
        const { sharedPosts } = this
        const isPostAlreadyInSharedPosts = sharedPosts.find(post => post.id == id) 
        if (!isPostAlreadyInSharedPosts) {
            const filteSharedPostsFromInitialPosts = this.initialListOfPosts.filter(post => post.id === id)
            this.sharedPosts = [...sharedPosts, ...filteSharedPostsFromInitialPosts]
        }
    }

    onSetMyPosts = () => {
        this.listOfPosts = this.myPosts
    }

    onSetReportedPosts = () => {
        this.listOfPosts = this.reportedPosts
        console.log(this.listOfPosts, "reported")
    }

    onSetSharedPosts = () => {
        this.listOfPosts = this.sharedPosts
        console.log(this.listOfPosts, "shared posts")
    }

    onDeleteMyPosts = (id: string) => {
        this.listOfPosts = this.listOfPosts.filter(post => post.id !== id)
        this.initialListOfPosts = this.initialListOfPosts.filter(post => post.id !== id)
        console.log(this.listOfPostTags)
    }

}

export {PostsStore}