$(document).ready(function() {
    API
        .get(`/users/me`, { headers: { token: localStorage('token')}})
        .then(response => {
          document.getElementById('user-name').innerHTML = response.data.name
          document.getElementById('user-about').innerHTML = response.data.about
        })
        .catch(error => console.error(error))
})