import { postObjectType } from "../stores/types";

interface PostsService {
   getPosts: () => Promise<any>
}

export default PostsService