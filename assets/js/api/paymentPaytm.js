const btn = document.getElementById('pay-btn');
      btn.addEventListener('click', async function(e) {
          e.preventDefault()
          const name  = document.getElementById('name').value;
          const lastName  = document.getElementById('last-name').value;
          const email  = document.getElementById('email-id').value;
          const mobile  = document.getElementById('ph-number').value;
          const gst  = document.getElementById('gst').value;
         

       const serverData = { 
        name: name, 
        email: email,
        gst: gst, 
        mobile: mobile,  
        "itemsPrice":"423.00",
        "shippingPrice":"0.00",
        "taxPrice":"64.53",
        "totalPrice":"487.53",
        "fallBackUrl": "https://static-4you.vercel.app",
        "merchantUrl": "https://securegw-stage.paytm.in" }
      var saveData = $.ajax({
              type: 'POST',
              url: 'https://ecom-electronic.onrender.com/payment/book-slot',
              cors: 'no-cors',
              data: serverData,
               xhrFields: {
                withCredentials: true
                },
              success: function({data:paymentResponse}) { 
                
                  console.log(paymentResponse,'paymentResponse')
                // Start 
                if(paymentResponse) {
                    const scriptTag = document.createElement('script');
                    scriptTag.src = paymentResponse.paymentData.orderData.paytm_marchent_url;
                    scriptTag.type = "application/javascript"
                    scriptTag.async = true;
                    document.body.appendChild(scriptTag);
                        scriptTag.onload = () => {
                            console.log('testhhh')
                            var config = {
                                    "root": "",
                                    "flow": "DEFAULT",
                                    "data": {
                                    "orderId": paymentResponse.paymentData.orderData.orderId, /* update order id */
                                    "token": paymentResponse.paymentData.tokenInfo.txnToken, /* update token value */
                                    "tokenType": "TXN_TOKEN",
                                    "amount": {
                                        ...paymentResponse.paymentData.orderData.txnAmount
                                    }
                                    
                                },
                                "handler": {
                                    "notifyMerchant": function(eventName,data){
                                    console.log("notifyMerchant handler function called");
                                    console.log("eventName => ",eventName);
                                    console.log("data => ",data);
                                    }
                                }
                                };
                                if(window.Paytm && window.Paytm.CheckoutJS){
                                    window.Paytm.CheckoutJS.onLoad(function excecuteAfterCompleteLoad() {
                                    // initialze configuration using init method
                                    window.Paytm.CheckoutJS.init(config).then(function onSuccess() {
                                    // after successfully updating configuration, invoke JS Checkout
                                    window.Paytm.CheckoutJS.invoke();
                                    }).catch(function onError(error){
                                        console.log("error => ",error);
                                    });
                                    });
                                }
                        }
                
                }

        // End
            }
        });
      saveData.error(function() { alert("Something went wrong"); });
         


      })