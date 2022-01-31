// Add your code here
const bodyContainer = document.querySelector('body');
const idLi = document.createElement('li');

function submitData(userName, userEmail) {

  const formData = {
    name: `${userName}`,
    email: `${userEmail}`
  };
    
  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };

  return fetch("http://localhost:3000/users", configObj)
    .then(function(response) {
      return response.json();
    })
    .then(function(obj) {
      const objID = obj.id;
      idLi.innerHTML = `${objID}`;
      bodyContainer.append(idLi);
    })
    .catch(function(error) {
      alert("Bad things! Ragnarők!");
      const errMsg = error.message;
      idLi.innerHTML = `${errMsg}`;
      bodyContainer.append(idLi);
    });
}

  