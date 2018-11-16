const config = require('./config');
const api = require('./src/api');

const handler = async (payload) => {
    console.log('rawPayload', payload);
    try {
        let getToken = await api.getAccessToken();
        let placeOrder = await api.placeOrder(getToken.Result.AccessToken);

    }catch (e) {
        console.log(e);
    }
};
module.exports = handler();