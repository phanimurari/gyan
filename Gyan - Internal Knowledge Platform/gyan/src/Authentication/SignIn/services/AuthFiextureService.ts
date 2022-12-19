import { resolveWithTimeout } from '../../../utilis/testUtilis'
import signInFixture from '../fixtures/singInFixture.json'

class AuthFixtureService {
   logIn(loginObject: {}) {
      return resolveWithTimeout(signInFixture)
   }
}

export default AuthFixtureService