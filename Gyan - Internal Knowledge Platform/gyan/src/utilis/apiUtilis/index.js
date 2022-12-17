import {
    apiErrorProblems,
    apiMethods,
    resStatuses,
    statusCodes,
  } from "../../common/constants/ApiConstants";
  
  import { getAccessToken } from "../StorageUtilis";
  
  export const networkCallWithApisauce = async (url, requestObject, type) => {
    let response = null;
    const accessToken = getAccessToken();
  
    if (accessToken) {
      const options = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        method: apiMethods.get,
      };
      response = await fetch(url, options);
      return response;
    } else {
      const options = {
        method: type,
        body: requestObject,
      };
      response = await fetch(url, options);
      const responseJson = await response.json();
      return responseJson;
    }
  };
  
  export const getUserDisplayableErrorMessage = (error) => {
    const formattedError = getFormattedError(error);
    return formattedError.description;
  };
  
  export function isNetworkError(error) {
    const apiError = JSON.parse(error);
    const { networkError, timeoutError } = apiErrorProblems;
    return apiError.problem === networkError || apiError.problem === timeoutError
      ? true
      : false;
  }
  
  export const getFormattedError = (apiError) => {
    //TODO: Need to use strings from i18n
    const errorViewTitle = "Oops! Something Went Wrong";
    const errorViewDescription =
      "We're having some trouble completing your request. Please try again.";
    const connectionLost = "Connection lost";
    const internetConnection = "Please check your internet connection";
  
    let description = "";
    let errorConstant = "";
    let title = errorViewTitle;
    let errorCode = statusCodes.internalServerErrorCode;
    if (apiError !== null && apiError !== undefined) {
      try {
        const parsedMessage = JSON.parse(apiError);
        let parsedError;
  
        if (parsedMessage.data === undefined || parsedMessage.data === null) {
          // To handle case when we are directly returning backend error message
          parsedError = parsedMessage;
        } else {
          // To handle case when we are adding all the requests to backend error message
          parsedError = parsedMessage.data;
        }
  
        if (parsedError !== undefined && parsedError !== null) {
          if (
            parsedError.message &&
            parsedError.message === resStatuses.requestTimedOut
          ) {
            title = errorViewTitle;
            description = errorViewDescription;
          }
  
          if (parsedError.response) {
            try {
              const response = JSON.parse(parsedError.response);
              const {
                title: errorTitle,
                description: errorDescription,
              } = response;
              if (errorTitle) {
                title = errorTitle;
              }
              if (errorDescription) {
                description = errorDescription;
              } else {
                description = parsedError.response;
              }
            } catch (e) {
              description = parsedError.response;
            }
            errorConstant = parsedError.res_status;
          }
          if (parsedError.http_status_code) {
            errorCode = parsedError.http_status_code;
            errorConstant = parsedError.res_status;
            if (
              parsedError.http_status_code === statusCodes.noInternetErrorCode
            ) {
              title = connectionLost;
              description = internetConnection;
            }
          }
        }
        if (isNetworkError(JSON.stringify(parsedError))) {
          title = connectionLost;
          description = internetConnection;
        }
      } catch (e) {
        // console.log('err >><<<', e)
      }
    }
  
    if (description === null || description === "") {
      title = errorViewTitle;
      description = errorViewDescription;
    }
    const apiErrorResponse = {
      errorCode,
      title,
      description,
      errorConstant,
    };
    return apiErrorResponse;
  };
 
  