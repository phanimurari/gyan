import user from '../../common/constants/userConstants/userContants.json'


export const checkWhetherPostIsCreatedByLoggedInUser = (postUser : string) => {
    return postUser === user.userName
}