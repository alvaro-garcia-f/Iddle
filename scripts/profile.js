$(document).ready(function() {
    API
        .get(`/users/${localStorage.getItem('id')}`)
        .then(response => {
          document.getElementById('user-name').innerHTML = response.data.name
          document.getElementById('user-about').innerHTML = response.data.about
        })
        .catch(error => console.error(error))
})