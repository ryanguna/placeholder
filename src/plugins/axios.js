const axios = require('axios');
const config = require('../../config');
// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
const _axios = axios.create({
    baseURL: config.NCR_API_URL
});
module.exports = _axios;