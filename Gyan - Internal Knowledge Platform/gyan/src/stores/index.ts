import AuthFixtureService from "../Authentication/SignIn/services/AuthFiextureService"
import { AuthStore } from "../Authentication/SignIn/store/authStore"


const authService = new AuthFixtureService()

const authStore = new AuthStore(authService)


export default {
   authStore
}