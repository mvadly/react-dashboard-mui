import { client } from '../../util/axios';

export const getValidGiro = async(norekGiro) => {
    try {
        const response = await client.post("/v1/register/get_valid_giro", {norekGiro: norekGiro})
        return response
    } catch (error) {
        if(error.response.status === 401){
            window.location.href = "/"
        }
    }
    
    
};
