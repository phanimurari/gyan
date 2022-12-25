import { makeAutoObservable, observable, computed, action, flow } from "mobx"
import { API_FAILED, API_FETCHING, API_INITIAL, API_SUCCESS, } from "@ib/api-constants";
import AuthFixtureService from "../services/AuthFiextureService";
import AuthAPIService from "../services/AuthApiService";
import { statusCodes } from "../../../common/constants/ApiConstants";
import { setAccessToken } from "../../../utilis/StorageUtilis";
import { getUserDisplayableErrorMessage } from "../../../utilis/apiUtilis";

class AuthStore {
    userLoginApiStatus :Number
    authService: AuthFixtureService | AuthAPIService
    userSignInApiError : string
    constructor(authService:any) {
        makeAutoObservable(this, {
            userLoginApiStatus: observable,
            userSignInApiError : observable,  
            init: action,
            userLogin: action,
            setUserLoginApiError : action,
            setUserLoginApiResponse: action

        })
        this.userLoginApiStatus = API_INITIAL
        this.authService = authService
        this.userSignInApiError = ''
    }

    init () {
        this.userLoginApiStatus = API_INITIAL
    }

    setUserLoginApiError (error: Error) {
       
        this.userLoginApiStatus = API_FAILED
        this.userSignInApiError = getUserDisplayableErrorMessage(error)  
    }

  setUserLoginApiResponse(response: any) {
        this.userSignInApiError = ''
        this.userLoginApiStatus = API_SUCCESS
        setAccessToken(response)
    }

    userLogin = async (loginObject: {
        username: string;
        password: string;
    }) => {
      
        this.userLoginApiStatus = API_FETCHING

        const stringifiedLoginObject = JSON.stringify(loginObject);
    
        const userLoginPromise = await this.authService.logIn(
          stringifiedLoginObject
        );
        try {
          const statusCode = userLoginPromise.status_code;
          if (statusCode === statusCodes.badRequestErrorCode) {
            this.setUserLoginApiError(userLoginPromise);
          } else {
            this.setUserLoginApiResponse(userLoginPromise);
          }
        } catch {
          console.log("error");
        }
      };

}

export {AuthStore}