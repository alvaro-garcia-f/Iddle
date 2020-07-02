$(document).ready(function() {
  $('#btn-upload-video').on('click', function(event) {
    const videoId = $('#url').val().split('/')[4]

    const data = {
      title: $('#title').val(),
      description: $('#description').val(),
      url: $('#url').val(),
      duration: $('#duration').val(),
      techs: $('#techs').val().split(','),
      level: $('input[name="levels"]:checked').val(),
      author: JSON.stringify(localStorage.getItem('id'))
    }

    API
     .post('/videos/me/', data, {headers: {token: localStorage.getItem('token') }})
     .then(response => {
       console.log(response)
       alert('Video has been succesfully uploaded!')
       window.location.reload()
     })
     .catch(error => console.error(error))

  })
})
