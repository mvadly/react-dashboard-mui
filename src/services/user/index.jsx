import { clientJwt } from '../../util/axios';
import {handleLogout} from '../../util/actions'

export const getUsers = async () => {
    try {
        const response = await clientJwt.get(`${process.env.REACT_APP_APIURL}/v1/users`)
        return response
    } catch (error) {
        if (error.response.status === 401) {
            handleLogout()
        }
    }
}


export const addUser = async (data) => {
    try {
        const response = await clientJwt.post(`${process.env.REACT_APP_APIURL}/v1/users/`, data)
        return response
    } catch (error) {
        if (error.response.status === 401) {
            handleLogout()
        }
    }
}

export const deleteUser = async (id) => {
    try {
        const response = await clientJwt.delete(`${process.env.REACT_APP_APIURL}/v1/users/` + id)
        return response
    } catch (error) {
        if (error.response.status === 401) {
            handleLogout()
        }
    }
}
