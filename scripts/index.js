const API = axios.create({
  baseURL: 'http://localhost:3000/api', //'https://iddle.herokuapp.com/api',
  timeout: 1000
})

$(document).ready(function () {

  $('#loginBtn').on('click', function (event) {
    event.preventDefault()
    const data = {
      user_email: $('#loginEmail').val(),
      user_password: $('#loginPassword').val()
    }

    API
      .post('/auth/login', data)
      .then(function (response) {
        if (response.data.error) {
          alert('Wrong Email/Password!')
        } else {
          localStorage.setItem('token', response.data.token)
          localStorage.setItem('email', response.data.email)
          window.location.href = 'index.html'
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  })

  $('#signUpBtn').on('click', function (event) {
    event.preventDefault()
    if ($('#signupPassword').val() !== $('#signupPassword2').val()) {
      alert('Passwords do not match!'); return
    }
    if ($('#signupPassword').val().length < 6 || $('#signupPassword2').val().length < 6) {
      alert('Passwords are too short!'); return
    }
    const data = {
      user_email: $('#signupEmail').val(),
      user_password: $('#signupPassword').val(),
      user_username: $('#signupUsername').val()
    }

    API
      .post('/auth/signup', data)
      .then(function (response) {
        if (response.data.error) {
          alert(response.data.error)
        } else {
          localStorage.setItem('token', response.data.token)
          localStorage.setItem('email', response.data.email)
          window.location.href = 'my-profile.html'
        }
      })
      .catch(function (error) {
        console.log(error)
        alert('Account already registered!')
      })
  })

  $('#searchBtn').on('click', function (event) {
    localStorage.setItem('search', $('#searchInput').val())
    window.location.href = 'results.html'
  })
})
