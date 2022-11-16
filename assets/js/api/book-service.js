
const cofirmBtn = document.getElementById('btn-main-services');
console.log('ttttttttt')

const callback = (e) => {
    let fname = document.getElementById('fname');
    let lname = document.getElementById('lname');
    let email = document.getElementById('email');
    let mobile_ = document.getElementById('phnumber');
    let add1 = document.getElementById('add1');
    let city = document.getElementById('city');
    let state = document.getElementById('state');
    let country = document.getElementById('contry');
    let service = document.getElementById('service');
    let clientType = document.getElementById('client-type');
    let natureOfB = document.getElementById('n-of-b');
    const serverData = {
        "FirstName": fname.value,
        "LastName": lname.value,
        "Email": email.value,
        "Phone": mobile_.value,
        "Address": add1.value,
        "City": city.value,
        "State": state.value,
        "Country": country.value,
        "Client": clientType.value,
        "NOBussiness": natureOfB.value,
        "status": "penging",
        "Service": service.value 
    }
    var saveData = $.ajax({
        type: 'POST',
        url: 'https://ecom-electronic.onrender.com/api/submit-service-request',
        cors: 'no-cors',
        data: serverData,
        success: function(response) {
            console.log('response', response) 
            if(response.status) {
                alert('feedback submited')
                document.getElementsByClassName('text-end btn-close')[0].click();
                fname.value = '';
                lname.value = '';
                email.value = '';
                mobile_.valu = '';
                add1.value = '';
                city.value = '',
                state.value = '',
                country.value = '',
                clientType.value = '',
                natureOfB.value = '',
                $("#service-modal").modal('hide');
            } else {

            }
    }
  })
  saveData.error(function() { alert("Something went wrong"); });
        
}

cofirmBtn.addEventListener('click',callback);