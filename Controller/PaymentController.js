
const Razorpay = require('razorpay');
const shortId = require('shortid')

var instance = new Razorpay({
    key_id: 'rzp_test_pvV1PmItteOH6K',
    key_secret: 'otjzqWHoGDMfCn6gwuEqJ1lR',
  });

exports.PostPayment = async (req, res)=>{
    try{
        const orderDetails = req.body;
        let amount;
        for(let i=0; i< orderDetails.length; i++){
            if(Object.keys(orderDetails[i])[0].toLowerCase() === 'amount'){
                amount = orderDetails[i].amount
            }
        }
        const orderInstance = {
            "amount": (amount *100).toString(),
            "currency": "INR",
            "receipt": shortId.generate(),
          }
        //   console.log(orderInstance);

        console.log((amount *100).toString());
        const response = await instance.orders.create(orderInstance);
        console.log(response);
        // res.status = 200;
        res.json({
            "id": response.id,
            "amount": response.amount,
            "receipt": response.receipt,
            "currency": response.currency,
        })
        //  res.send('ok')
        // return res;
    }
    catch(err){
        console.log(err);
    }
    
}