import { makeAutoObservable, observable } from "mobx"
import { postItemType } from "../types"

class PostsStore {
    listOfPosts: Array<postItemType>
    newPostItem: any 
    constructor() {
        makeAutoObservable(this, {
            listOfPosts: observable,
            newPostItem: observable
        })
        this.listOfPosts = []
    }

}

export {PostsStore}