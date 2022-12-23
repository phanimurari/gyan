import { API_FAILED, API_FETCHING, API_INITIAL, API_SUCCESS } from "@ib/api-constants"
import { action, computed, makeAutoObservable, observable } from "mobx"
import { PostApiService } from "../../postsService/PostsApiService"
import { PostsFixtureService } from "../../postsService/PostsFixtureService"
import { PostModel } from "./postModel"

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
            onSearchPost : action.bound,
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
        this.listOfPosts = searchedPosts
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

}

export {PostsStore}