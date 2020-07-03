$(document).ready(function() {
  $('#btn-upload-video').on('click', function(event) {
    API
      .get('/auth/me', { headers: { token: localStorage.getItem('token') } })
      .then(response => {
        const data = {
          title: $('#title').val(),
          description: $('#description').val(),
          url: $('#url').val(),
          duration: $('#duration').val(),
          techs: $('#techs').val().split(','),
          level: $('input[name="levels"]:checked').val(),
          author: response.data.id
        }

        API
         .post('/videos/me/', data, { headers: { token: localStorage.getItem('token') }})
         .then(response => {
           alert('Video has been succesfully uploaded!')
           window.location.reload()
         })
         .catch(error => console.error(error))
      })
      .catch(error => console.error(error))
  })
})
