
const cofirmBtn = document.getElementById('contact-us');

const callback = (e) => {
    let fname = document.getElementById('con-fname');
    let lname = document.getElementById('con-lname');
    let email = document.getElementById('con-email');
    let mobile_ = document.getElementById('con-mobile');
    let city = document.getElementById('con-city');
    let state = document.getElementById('con-state');
    let message = document.getElementById('con-message');
    
    const serverData = {
        "FirstName": fname.value,
        "LastName": lname.value,
        "Email": email.value,
        "Phone": mobile_.value,
        "City": city.value,
        "State": state.value,
        "status": "penging",
        "message": message.value
      
    }
    var saveData = $.ajax({
        type: 'POST',
        url: 'http://localhost:8080/api/submit-contact-us',
        cors: 'no-cors',
        data: serverData,
        success: function(response) {
            console.log('response', response) 
            if(response.status) {
                alert('contact us form  submited')
                document.getElementsByClassName('text-end btn-close')[0].click();
                fname.value = '';
                lname.value = '';
                email.value = '';
                mobile_.valu = '';
                
                city.value = '',
                state.value = '',
                
                $("#service-modal").modal('hide');
            } else {

            }
    }
  })
  saveData.error(function() { alert("Something went wrong"); });
        
}

cofirmBtn.addEventListener('click',callback);