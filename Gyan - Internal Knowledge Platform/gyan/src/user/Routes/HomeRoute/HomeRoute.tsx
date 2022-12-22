import Home from "../../Components/Home"
import { inject, observer } from "mobx-react";
import { useEffect, useState } from "react";
import { getAccessToken } from "../../../utilis/StorageUtilis";
import { toJS } from "mobx";


const HomeRoute = inject("authStore", "postsStore")(observer((props : any) => {
    
    const [displayLoginModal, setDisplayLoginModal] = useState(false)
    const [displayCreateApostModal, setDisplayCreateApostModal] = useState(false)
    const [listOfPosts, setListOfPosts] = useState([])
    
    const getInjectedProps = () => props;
    const getAuthStore = () => getInjectedProps().authStore
    const getPostsStore = () => getInjectedProps().postsStore

    useEffect(() => {
        const getListOfPosts = async () => {
            await getPostsStore().getPosts()
            setListOfPosts(toJS(getPostsStore().listOfPosts))
        }
        getListOfPosts()
    }, [])

    
   

    const onToggleLoginModal = (value: boolean) => {
        setDisplayLoginModal(value)
    }

    const onToggleCreateAPostModal = (value: boolean) => {
        setDisplayCreateApostModal(value)
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
        postFetchingApiStatus = {getPostsStore().postFetchingApiStatus}
       />    
}))

export {HomeRoute}