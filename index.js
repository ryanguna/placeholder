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


let orderObject = {
    parentOrder : '',
    orderGroup : '',
    vendor : '',
    tax : '',
    customer : {
        firstname : '',
        lastname : '',
        name : ''
    },
    items : [
        {
            id : '',
            salesOrder : {

            },
            description : '',
            price : '',
            taxPercentage : '',
            taxValue : '',
            promotion : [],
            reward : [],
            options : [
                {
                    id : '',
                    salesOrderItem : '',
                    option : {
                        id : '',
                        optionsGroup : '',
                        value : '',
                        notes : ''
                    }
                }
            ],
            totalCost : '',
            product : {
                id : '',
                category : {
                    id : '',
                    name : '',
                },
                name : '',
                image : '',
                description : '',
                notes : '',
                giveawayGroups : [
                    {
                        id : '',
                        name : '',
                        note : '',
                        products : []
                    }
                ]
            }
        }
    ],
    marchantTotalCost : '',
    merchantTax : ''
};


let order = {
    Orders: [{
        OrderType: 'Delivery',
        Customer: {
            CustomerName: 'John Stone',
            PhoneNumber: '555-555-1002',
            Email: 'john.stone@abc.com',
            Address1: "123 Spring St.",
            Address2: 'Apt #2',
            City: 'Bedrock',
            State: 'GA',
            ZipCode: '12345'
        },
        IsPaid: true,
        LineItems: [{
            ItemId: 450,
            ItemName: 'Chk Salad Sandwich',
            Quantity: '1',
            UnitPrice: '4.50',
            UnitSellPrice: '4.50',
            ExtendedSellPrice: '4.50',
            Modifiers: [{
                ItemId: '657',
                ItemName: 'Onions',
                UnitSellPrice: '0.0'
            }],
            Notes: ['Heavy on the onions.']
        }],
        Notes: [
            'This is order note.'
        ],
        OrderDateTime: '\/Date(1409759072000)\/',
        OrderDueDateTime: '\/Date(1409759072000)\/',
        OrderNumber: '1001',
        KitchenLeadTimeInMinutes: '10',
        TaxAmount: '0.32',
        TipAmount: '1.00'
    }],
    SourceApplicationName: 'OnlineOrderingApp'
};



// let orderPayload = {
//     "Orders" : [{
//     "OrderType" : "Takeout",
//     "OrderNumber" : "1003",
//     "isPaid" : true,
//     "LineItems" : [{
//         "ItemId" : 2241504,
//         "ItemName": "(12) Big Earls",
//         "Quantity" : 1,
//         "UnitPrice" : 29.4,
//         "UnitSellPrice" : 29.4,
//         "ExtendedSellPrice" : 29.4,
//         "Notes" : ["Please check this kind hehehe"]
//     }],
//     "Notes" : ["This is an order note"],
//     "OrderDateTime":"\/Date(1542081480334)\/",
//     "OrderDueDateTime" : "\/Date(1573185651118)\/",
//     "TipAmount" : 1.00
// }],
//     "SourceApplicationName" : "OnlineOrderingApp"
// };