import { resolveWithTimeout } from '../../../utilis/testUtilis'
import signInFixture from '../fixtures/singInFixture.json'

class AuthFixtureService {
    logIn(loginObject: any) {
      return resolveWithTimeout(signInFixture)
   }
}

export default AuthFixtureService