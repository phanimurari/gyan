import Home from "../../Components/Home"
import { inject, observer } from "mobx-react";
import { RouteComponentProps } from "react-router-dom";
import { AuthStore } from "../../../Authentication/SignIn/store/authStore";
import { useState } from "react";
import { getAccessToken } from "../../../utilis/StorageUtilis";


const HomeRoute = inject("authStore")(observer((props : any) => {
    
    const [displayLoginModal, setDisplayLoginModal] = useState(false)
    const [displayCreateApostModal, setDisplayCreateApostModal] = useState(false)

    const getInjectedProps = () => props;
    
    const getAuthStore = () => getInjectedProps().authStore

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
        displayCreateApostModal = {displayCreateApostModal}
        onToggleCreateAPostModal = {onToggleCreateAPostModal}
        userLoginApiStatus={getAuthStore().userLoginApiStatus}
       />    
}))

export {HomeRoute}