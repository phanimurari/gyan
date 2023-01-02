import Home from "../../Components/Home"
import { inject, observer } from "mobx-react";
import { useEffect, useState } from "react";
import { getAccessToken } from "../../../utilis/StorageUtilis";
import { toJS } from "mobx";
import { commentType } from "../../stores/types";
import { DEFAULT_SELECTED_TAG } from "../../constants";


const HomeRoute = inject("authStore", "postsStore")(observer((props : any) => {
    
    const [displayLoginModal, setDisplayLoginModal] = useState(false)
    const [displayCreateApostModal, setDisplayCreateApostModal] = useState(false)
    const [listOfPosts, setListOfPosts] = useState([])
    const [selectedPostsTag, setSelectedPostTag] = useState(DEFAULT_SELECTED_TAG)

    const getInjectedProps = () => props;
    const getAuthStore = () => getInjectedProps().authStore
    const getPostsStore = () => getInjectedProps().postsStore

    const settingListOfPosts = () =>    setListOfPosts(toJS(getPostsStore().listOfPosts))

    useEffect(() => {
        const getListOfPosts = async () => {
            await getPostsStore().getPosts()
            settingListOfPosts()
        }
        getListOfPosts()
    }, [])

    const onChangeSelectedTag = async (tag : string) => {
        await getPostsStore().setSelectedTag(tag)
        setSelectedPostTag(tag)
        settingListOfPosts()
    }

    const onSearchPost = async (searchText: string) => {
        await getPostsStore().onSearchPost(searchText)
        settingListOfPosts()
    }

    const onToggleLoginModal = (value: boolean) => {
        setDisplayLoginModal(value)
    }

    const onToggleCreateAPostModal = (value: boolean) => {
        setDisplayCreateApostModal(value)
    }

    const addPostToListOfPosts = async(postObject: any) => {
        await getPostsStore().addPostToListOfPosts(postObject)
        settingListOfPosts()
    }


    const addComment = async(commentObject : commentType, id : string) => {
        await getPostsStore().addCommentToPost(commentObject, id)   
        settingListOfPosts()
    }

    const isUserLoggedIn = () => getAccessToken() !== undefined



    return <Home isUerLoggedIn={isUserLoggedIn()}
        userLogin={getAuthStore().userLogin}
        displayLoginModal={displayLoginModal}
        onToggleLoginModal={onToggleLoginModal}
        displayCreateApostModal={displayCreateApostModal}
        onToggleCreateAPostModal={onToggleCreateAPostModal}
        userLoginApiStatus={getAuthStore().userLoginApiStatus}
        listOfPosts={listOfPosts}
        postFetchingApiStatus={getPostsStore().postFetchingApiStatus}
        listOfPostTags={getPostsStore().listOfPostTags}
        setSelectedTag={onChangeSelectedTag}
        selectedPostsTag={selectedPostsTag}
        onSearchPost={onSearchPost}
        addPostToListOfPosts={addPostToListOfPosts}
        addComment={addComment}
       />    
}))

export {HomeRoute}