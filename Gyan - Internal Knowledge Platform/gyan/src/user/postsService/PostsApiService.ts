
import PostObject from '.'
import { create } from 'apisauce'
import config from '../../common/constants/envinornmentConstants'
import { apiMethods } from '../../common/constants/ApiConstants'
import { networkCallWithApisauce } from '../../utilis/apiUtilis'

class PostApiService implements PostObject {
   api: Record<string, any>

   constructor() {
      this.api = create({ baseURL: config.BASE_URL })
   }

   getPosts() {
      return networkCallWithApisauce(
         this.api,
         `/posts/v1/`,
         apiMethods.get
      )
   }
}

export { PostApiService }