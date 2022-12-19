import Home from "../../Components/Home"
import { inject, observer } from "mobx-react";
import { RouteComponentProps } from "react-router-dom";
import { AuthStore } from "../../../Authentication/SignIn/store/authStore";
import { useState } from "react";
import { getAccessToken } from "../../../utilis/StorageUtilis";


interface homeRouteProps extends RouteComponentProps {
    authStore: AuthStore
}

const HomeRoute = inject("authStore")(observer((props : any) => {
    
    const [displayLoginModal, setDisplayLoginModal] = useState(false)

    const getInjectedProps = () => props;
    
    const getAuthStore = () => getInjectedProps().authStore


    const onToggleLoginModal = (value: boolean) => {
        setDisplayLoginModal(value)
        console.log("called")
    }

    const isUserLoggedIn = () => getAccessToken() !== undefined


    return <Home isUerLoggedIn={isUserLoggedIn()}
        userLogin={getAuthStore().userLogin}
        displayLoginModal={displayLoginModal}
        onToggleLoginModal={onToggleLoginModal}
        userLoginApiStatus={getAuthStore().userLoginApiStatus}
       />    
}))

export {HomeRoute}