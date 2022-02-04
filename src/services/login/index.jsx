import { client } from '../../util/axios';

export const authLogin = async (user) => {
    try {
        const response = await client.post(`${process.env.REACT_APP_APIURL}/v1/auth/login`, user);
        return response
    } catch (error) {
        return error.response
    }
}