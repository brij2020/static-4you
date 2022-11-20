const navUl = document.getElementById('pro-nav');
 var saveData = $.ajax({
        type: 'GET',
        url: 'https://ecom-electronic.onrender.com/api/navigation',
        cors: 'no-cors',
        success: function(response) {
            console.log('response', response) 
            if(response.status === 200) {
                console.log(response.navigations);
                var options = [
                  set0 = ['Option 1','Option 2'],
                  set1 = ['First Option','Second Option','Third Option']
              ];
          
              function makeUL(array) {
                  // Create the list element:
                  
              
                  for(var i = 0; i < array.length; i++) {
                      // Create the list item:
                      let anc = document.createElement('a');
                      anc.className = "dropdown-item"
                      anc.href = array[i].path;
                      anc.target= '_blank'
                      anc.appendChild(document.createTextNode(array[i].label))
                      var item = document.createElement('li');
              
                      // Set its contents:
                      
                      item.appendChild(anc)
                      // Add it to the list:
                      navUl.appendChild(item);
                  }
              
                  // Finally, return the constructed list:
                  return list;
              }
              makeUL(response.navigations)
              // Add the contents of options[0] to #foo:
              // navUl.appendChild(makeUL(response.navigations));
              //   console.log(navUl)
            } else {

            }
    }
  })
  saveData.error(function() { console.log('Error in API') });