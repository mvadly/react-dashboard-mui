import { expiredStorage } from "./expiredStorage"
import jwt_decode from "jwt-decode"
import { handleLogout } from "./actions"

const token = expiredStorage.getItem("token")

const tokenCheck = () => {
    
    if (token === null || token === ""){
        handleLogout()
    }

    try {
        jwt_decode(token, {complete: true})
    } catch (error) {
        handleLogout()
    }
    
}

export const getJwt = (value) => {
    tokenCheck()
    const jwt = jwt_decode(token)
    return jwt[value]

}

export const getJwtSecond = () => {
    tokenCheck()
    const now = new Date().getTime()
    const exp = getJwt("exp") * 1000
    const result = exp - now
    console.log(now, exp, result)
    return result

}