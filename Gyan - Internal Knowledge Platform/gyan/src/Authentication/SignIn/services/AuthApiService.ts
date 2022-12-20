import { create } from "apisauce";
import { apiMethods } from "../../../common/constants/ApiConstants";
import config from "../../../common/constants/envinornmentConstants";
import { networkCallWithApisauce } from "../../../utilis/apiUtilis";

const url = "https://apis.ccbp.in/login";

class AuthAPIService {
  api: Record<string, any>;

  constructor() {
    this.api = create({
      baseURL: config.BASE_URL,
    });

  }

  logIn(stringifiedLoginObject: string) {
    return networkCallWithApisauce(
      url,
      stringifiedLoginObject,
      apiMethods.post
    );
  }
}

export default AuthAPIService;