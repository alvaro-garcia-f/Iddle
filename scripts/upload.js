$(document).ready(function() {
  $('#btn-upload-video').on('click', function(event) {
    const videoId = $('#url').val().split('/')[4]    
    const data = {
      title: $('#title').val(),
      description: $('#description').val(),
      //duration: $().val
      url: $('#url').val(),
      //techs: $('#techs').val(),
      level: $('input[name="levels"]:checked').val()
      //author: localStorage.getItem('id')
    }    
    console.log(data)

   /*API
      .post('/videos/me/', data, {headers: {token: localStorage.getItem('token') }})
      .then(response => console.log(response))
      .catch(error => console.error(error))*/
  })  
})