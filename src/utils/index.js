const moment = require('moment')
const config = require('../../config')
module.exports = {
    parsePayloadData(payload) {
        return new Promise ((resolve, reject) => {
            resolve({
                Orders : [{
                    OrderType : "Takeout",
                    OrderNumber : payload.id,
                    OrderDateTime:`/Date(${moment(payload.submitted.date).valueOf()})/`,
                    OrderDueDateTime : `/Date(${moment(payload.submitted.date).add(6, 'minutes').valueOf()})/`,
                    isPaid : !!payload.paymentMethod, //check payment method
                    Customer :{
                        CustomerName: payload.customer.name
                    },
                    LineItems : [{
                        ItemId : 2241504,
                        ItemName: "(12) Big Earls",
                        Quantity : 1,
                        UnitPrice : 29.4,
                        UnitSellPrice : 29.4,
                        ExtendedSellPrice : 29.4,
                        Notes : [payload.customerNote]
                    }],
                    Notes : [payload.customerNote]
                }],
                SourceApplicationName : config.APP_NAME
            });
        })
        // let items = payload.items
        //     .filter(item => !!item && Object.keys(item).length) //check for false objects
        //     .map(item => {
        //       return {
        //           ItemId : item.id,
        //           ItemName: item.product.name,
        //           Quantity : 1,
        //           UnitPrice : item.cost,
        //           UnitSellPrice : item.cost,
        //           ExtendedSellPrice : item.cost,
        //           Notes : [payload.customerNote]
        //       }
        //     });

    }
};


