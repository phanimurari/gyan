import Cookie from 'js-cookie'

export const ACCESS_TOKEN = 'ACCESS_TOKEN'
export const REFRESH_TOKEN = "REFRESH_TOKEN"

export function getCookie(key) {
   return Cookie.get(key)
}

function setCookie(key, value) {
   if (getRefreshTokenInLocalStorage()) {
   Cookie.set(key, value, {
      expires: 30,
      path: '/'
   })  
   }
}

export function getAccessToken() {
   return getRefreshTokenInLocalStorage() ? getCookie(ACCESS_TOKEN) : undefined
}

export function getRefreshTokenInLocalStorage() {
   return localStorage.getItem(REFRESH_TOKEN)
}

export function setRefreshTokenInLocalStorage(refreshToken) {
   localStorage.setItem(REFRESH_TOKEN, refreshToken)
}

export function removeRefreshTokenInLocalStorage() {
   localStorage.removeItem(REFRESH_TOKEN)
}

export function removeCookies() {
   Cookie.remove(ACCESS_TOKEN)
}

export function removeRefreshTokenFromLocalStorage() {
   removeRefreshTokenInLocalStorage()
   removeCookies()
}

export function setAccessToken(response) {
   const { access_token, refresh_token, refresh_token_expiration_time_limit } = response
   setRefreshTokenInLocalStorage(refresh_token)
   setTimeout(removeRefreshTokenFromLocalStorage, refresh_token_expiration_time_limit)
   setCookie(ACCESS_TOKEN, access_token)
}

export function clearUserSession() {
   Cookie.remove(ACCESS_TOKEN, { path: '/' })
   removeRefreshTokenFromLocalStorage()
}
