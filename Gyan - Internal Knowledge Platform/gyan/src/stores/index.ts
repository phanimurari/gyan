import AuthFixtureService from "../Authentication/SignIn/services/AuthFiextureService"
import { AuthStore } from "../Authentication/SignIn/store/authStore"
import { PostsFixtureService } from "../user/postsService/PostsFixtureService"
import { PostsStore } from "../user/stores/postsStore/postsStore"


const authService = new AuthFixtureService()
const authStore = new AuthStore(authService)

const postsService = new PostsFixtureService()
const postsStore = new PostsStore(postsService)

export default {
   authStore,
   postsStore
}