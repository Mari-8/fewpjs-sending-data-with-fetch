// Add your code here


function submitData(name, email) {

    let userData = {
        name: `${name}`,
        email: `${email}`
    }

    let userConfig = {
        method: "POST",
        headers: {
            "content-type": "application/json", 
            "accept": "application/json"
        },
        body: JSON.stringify(userData)
    }

    let main = document.body

    return fetch("http://localhost:3000/users", userConfig)
        .then(function(response) {
            return response.json()
        })
        .then(function(object){
            let newId = document.createElement('h1')
            newId.innerHTML = object.id
            main.appendChild(newId)
        })
        .catch(function(error) {
            alert("Not Working");
            let errorMessage = document.createElement('p')
            errorMessage.innerHTML = `${error.message}`
            main.appendChild(errorMessage)
          }); 
}