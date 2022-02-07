import { clientJwt } from '../../util/axios';
import {handleLogout} from '../../util/actions'

export const getBuyer = async (search, page, perPage) => {
    try {
        let params = `q=${search}`
        params += `&page=${page}`
        params += `&per_page=${perPage}`
        const response = await clientJwt.get(`${process.env.REACT_APP_APIURL}/v1/list_users?`+params)
        return response.data
    } catch (error) {
        if (error.response.status === 401) {
            handleLogout()
        }
    }
}


