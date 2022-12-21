import postsData from '../fixtures/postsData.json'

import PostsService from './index'
import { resolveWithTimeout } from '../../utilis/testUtilis'

class PostsFixtureService implements PostsService {
   getPosts() {
      return resolveWithTimeout(postsData)
   }
}

export { PostsFixtureService }