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
                .then(function(res) {
                    console.log('SUCCESS', res.data);
                    resolve(res.data);
                })
                .catch(error => {
                    reject(error);
                    console.log('ERROR', error.data)
                });
        })
    },
    placeOrder(accessToken){
        return new Promise((resolve, reject) => {
                axios.get('/Stores', {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`,
                    }
                })
                .then(function(res) {
                    console.log('SUCCESS', res.data);
                    resolve(res.data);
                })
                .catch(error => {
                    reject(error);
                    console.log('ERROR', error.data)
                });
        })
    }
};