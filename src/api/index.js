const { axios } = require('../plugins');
const config = require('../../config');


module.exports = {
    getAccessToken(){
        return new Promise((resolve, reject) => {
                axios.get('/OAuth2/Token', {
                    headers: {
                        'Content-Type': 'application/json',
                        'client_id' : config.NCR_CLIENT_ID,
                        'client_secret' : config.NCR_CLIENT_SECRET,
                    }
                })
                .then((response) => resolve(response.data))
                .catch(error => reject(error));
        })
    },
    placeOrder(payload, accessToken){
        return new Promise((resolve, reject) => {
                axios.post('/v2/Orders?api_store_id=78308001', payload , {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`,
                    }
                })
                .then(function(res) {
                    if(res.data.Code >= 400) reject(res.data);
                    resolve(res.data);
                })
                .catch(error => reject(error));
        })
    }
};