import { getAccessToken } from '../StorageUtils'

export const isLoggedIn = () => {
   if (getAccessToken() !== undefined) {
      return true
   } else {
      return false
   }
}
