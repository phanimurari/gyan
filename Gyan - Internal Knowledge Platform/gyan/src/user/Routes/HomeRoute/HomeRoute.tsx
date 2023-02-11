import { inject, observer } from "mobx-react";
import { useEffect, useState } from "react";

import Home from "../../Components/Home"
import { getAccessToken } from "../../../utilis/StorageUtilis";
import { toJS } from "mobx";
import { commentType } from "../../stores/types";
import { DEFAULT_SELECTED_TAG } from "../../constants";


const HomeRoute = inject("authStore", "postsStore")(observer((props : any) => {
    
    const [displayLoginModal, setDisplayLoginModal] = useState(false)
    const [displayCreateApostModal, setDisplayCreateApostModal] = useState(false)
    const [displayOnLogOutModal, setDisplayOnLogOutModal] = useState(false)
    const [displaySideBarMenu, setDisplaySideBarMenu] = useState(true)
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


    const onToggleSignOutConfirmModal = (value: boolean) => {
        setDisplayOnLogOutModal(value)
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


    const onPostLike =( id: string) => {
         getPostsStore().onPostLike(id)
    }

    const setSideBarMenu = (displaySideBarMenu: boolean) => {
        setDisplaySideBarMenu(displaySideBarMenu)
    }

    return <Home isUerLoggedIn={isUserLoggedIn()}
            userLogin={getAuthStore().userLogin}
            displayLoginModal={displayLoginModal}
            displayOnLogOutModal= {displayOnLogOutModal}
            onToggleLoginModal={onToggleLoginModal}
            onToggleSignOutConfirmModal = {onToggleSignOutConfirmModal}
            displayCreateApostModal={displayCreateApostModal}
            onToggleCreateAPostModal={onToggleCreateAPostModal}
            userLoginApiStatus={getAuthStore().userLoginApiStatus}
            listOfPosts={listOfPosts}
            postFetchingApiStatus={getPostsStore().postFetchingApiStatus}
            listOfPostTags={getPostsStore().listOfPostTags}
            onReportPost={getPostsStore().onReportPost}
            onAddPostToSharedPostsList={getPostsStore().onAddPostToSharedPostsList}
            onSetMyPosts={getPostsStore().onSetMyPosts}
            onSetReportedPosts = {getPostsStore().onSetReportedPosts}
            onSetSharedPosts = {getPostsStore().onSetSharedPosts}
            setSelectedTag={onChangeSelectedTag}
            selectedPostsTag={selectedPostsTag}
            onSearchPost={onSearchPost}
            addPostToListOfPosts={addPostToListOfPosts}
            addComment={addComment}
            onPostLike={onPostLike}
            setSideBarMenu={setSideBarMenu}
        />
}))

export {HomeRoute}