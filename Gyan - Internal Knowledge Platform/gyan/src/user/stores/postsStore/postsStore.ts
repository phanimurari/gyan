import { API_FAILED, API_FETCHING, API_INITIAL, API_SUCCESS } from "@ib/api-constants"
import { action, makeAutoObservable, observable } from "mobx"
import { PostApiService } from "../../postsService/PostsApiService"
import { PostsFixtureService } from "../../postsService/PostsFixtureService"
import { PostModel } from "./postModel"

class PostsStore {
    postFetchingApiStatus: number
    listOfPosts: Array<PostModel>
    postsService: PostsFixtureService | PostApiService
    postsApiError : Error | null | string
    newPostItem: any 
    constructor(postsService: any) {
        makeAutoObservable(this, {
            postFetchingApiStatus: observable,
            postsApiError: observable,
            listOfPosts: observable,
            newPostItem: observable,
            init: action,
            setPostApiStatus: action,
            getPosts: action,
            setPostsApiError: action,
            setPostsResponse: action
        })
        this.listOfPosts = []        
        this.postsService = postsService
        this.postFetchingApiStatus = API_INITIAL
        this.postsApiError = null
    }

    init() {
        this.postFetchingApiStatus = API_INITIAL   
        this.listOfPosts = []
    }

    setPostApiStatus(status : number) {
       this.postFetchingApiStatus = status
    }

    setPostsApiError(error: Error | string) {
        this.postsApiError = error
    }
    
    setPostsResponse(response: any) {
        this.postFetchingApiStatus = API_SUCCESS
        this.listOfPosts = response.posts.map( (post :any) => new PostModel(post) )
    }

    getPosts = async () => {
        this.postFetchingApiStatus = API_FETCHING
        const postsPromise = await this.postsService.getPosts()
        
        if (postsPromise !== undefined) {
            console.log("success")
            this.setPostsResponse(postsPromise)
            this.setPostApiStatus(API_SUCCESS)
        }
        else {
            this.setPostApiStatus(API_FAILED)
        }
    };

}

export {PostsStore}