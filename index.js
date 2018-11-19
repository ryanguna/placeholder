const config = require('./config');
const api = require('./src/api');
const util = require('./src/utils');



let griffinPayload = {
    "id": 6400723,
    "status": "PENDING",
    "totalCost": 2,
    "transactionFee": "0.04",
    "created": {
        "date": "2017-08-16 12:13:26",
        "timezone_type": 3,
        "timezone": "Australia\/Sydney"
    },
    "submitted": {
        "date": "2017-08-16 12:13:39",
        "timezone_type": 3,
        "timezone": "Australia\/Sydney"
    },
    "acknowledged": null,
    "completed": null,
    "ready": null,
    "eta": null,
    "hash": "7d74deebd7f07455e18ad0133ebc4d7e15d8628a",
    "receiptToken": "A11RA62F7B68",
    "customerNote": "",
    "internalNote": "",
    "errorNote": null,
    "rejectReason": null,
    "scheduleOffset": 0,
    "paymentMethod": "creditcard",
    "paymentDescription": "Mastercard ...4444",
    "vendorAbn": "",
    "currency": "AUD",
    "taxPercentage": "0.10",
    "posType": "Shift8",
    "vendor": {
        "id": 3840,
        "firstname": "Hey ",
        "lastname": "You",
        "businessName": "Dev Sandbox",
        "phone": "+61 200 000 000",
        "mobile": "+61 400 000 000",
        "geoLat": -33.8805236816,
        "geoLong": 151.2111358643,
        "delivery": false,
        "description": "Dev Sandbox",
        "geoDescription": "Not a real store, please do not purchase anything here. ",
        "merchantFee": "3.900",
        "merchantCharge": "0.00",
        "logging": false,
        "menuRevision": 448,
        "inviteOnly": true,
        "referrerType": "other",
        "referrerDescription": "Internal Use",
        "avatarImage": "",
        "coverImage": "",
        "abn": "",
        "allowGroupOrder": false,
        "allowScheduledOrder": false
    },
    "ipAdress": "10.0.1.13",
    "userAgent": "beattheqmobile\/273 (iPhone; iOS 9.3; Scale\/2.00)",
    "deviceLat": null,
    "deviceLng": null,
    "tax": "0.19",
    "customer": {
        "firstname": "Pretty",
        "lastname": "Padilla",
        "name": "Pretty Padilla"
    },
    "items": [
        {
            "id": 10430769,
            "product": {
                "id": 14,
                "name": "Hot ssChocolate",
                "image": "ZkTZE2RT.png",
                "description": null,
                "notes": null
            },
            "description": "Hot Chocolate",
            "cost": "3.50",
            "taxPercentage": null,
            "taxValue": null,
            "totalCost": 3.5,
            "vendorProductPosId": ""
        },
        {
            "id": 10430770,
            "product": {
                "id": 14,
                "name": "Hot Chocolate",
                "image": "ZkTZE2RT.png",
                "description": null,
                "notes": null
            },
            "description": "$2 Hot Drinks! Thanks for using Hey You!",
            "cost": "-1.50",
            "taxPercentage": null,
            "taxValue": null,
            "promotion": {
                "id": 22645,
                "name": "Cap Hot Drinks at $2",
                "start": {
                    "date": "2017-07-19 00:00:01",
                    "timezone_type": 3,
                    "timezone": "Australia\/Sydney"
                },
                "end": {
                    "date": "2017-08-20 23:00:00",
                    "timezone_type": 3,
                    "timezone": "Australia\/Sydney"
                },
                "event": "CHECKOUT",
                "code": null,
                "message": "$2 Hot Drinks! Thanks for using Hey You!",
                "displayName": ""
            },
            "totalCost": "-1.50",
            "vendorProductPosId": "",
            "options": []
        }]
}


const handler = async (payload) => {
    try {
        let accessToken = await api.getAccessToken();
        let parsedPayload = await util.parsePayloadData(payload);
        let placeOrder = await api.placeOrder(parsedPayload, accessToken.Result.AccessToken);
        console.log('process finish');

    }catch (e) {
        console.log('ERROR', e);
    }
};

module.exports = handler(griffinPayload);



