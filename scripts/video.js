function postComment() {
  API
    .post(`/videos/me/${localStorage.getItem('videoId')}/comments`,
          { text: document.getElementById('comment-text').value },
          { headers: { token: localStorage.getItem('token') } })
    .then(response => {
      API
        .get(`/users/${response.data.comments[response.data.comments.length-1].userId}`)
        .then(user => {
          const commentHeader = document.createElement('div')
          commentHeader.classList.add('container')
          commentHeader.classList.add('mt-1')
          commentHeader.innerHTML = `
            <div class="card box-shadow">
              <div class="card-header">
                <img class="col-2 card-img rounded-circle small" src="https://picsum.photos/50">
                <span class="col-10 card-text">${user.data.username}</span>
              </div>
              <div class="card-body">
                <p class="card-text">${response.data.comments[response.data.comments.length-1].text}</p>
              </div>
            </div>
          `
          document.getElementById('user-comment').appendChild(commentHeader)
          window.scrollTo(0,document.body.scrollHeight);
        })
        .catch(error => console.error(error))
    })
    .catch(error => console.error(error))
}

$(document).ready(function () {
  API
    .put(`/videos/${localStorage.getItem("videoId")}/views`)
    .then(response => console.log(response.data))
    .catch(error => console.error(error))


  API
    .get(`/videos/${localStorage.getItem("videoId")}`)
    .then(response => {
      document.getElementById('video-card-iframe').innerHTML = `<iframe class="embed-responsive-item" width="560" height="315" src="${response.data.url}"
      frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen></iframe>`
      document.getElementById('video-card-views').innerHTML = `<i class="fa fa-eye text-primary"
      aria-hidden="true"></i><small> ${response.data.views}</small>`
      document.getElementById('video-card-title').innerHTML = response.data.title
      document.getElementById('video-card-author').innerHTML = `<a href="#">${response.data.author.username}</a>`
      document.getElementById('video-card-duration').innerHTML = `<a class="text-muted">${response.data.duration} mins</a>`
      document.getElementById('video-card-level').innerHTML = response.data.level

      let code = ''
      response.data.techs.forEach(element => {
        code += `
          <a href="#" class="badge badge-warning">${element.name}</a>
        `
      })
      document.getElementById('video-card-techs').innerHTML = code
    })
    .catch(error => console.error(error))

  $('#load-comments').on('click', function(event) {
    API
      .get(`/videos/${localStorage.getItem("videoId")}/comments`)
      .then(response => {
        let code = ''

        if(localStorage.getItem('token')) {
          code = `
          <div class="container">
            <div class="card box-shadow">
              <div class="card-header">
                <div class="flex-row">
                  <img class="col-3 pb-1 card-img rounded-circle small" src="https://picsum.photos/50">
                  <span class="card-text">
                    <form action="javascript:postComment()">
                      <div class="form-group">
                        <textarea class="form-control" placeholder="Add comment" rows="3" id="comment-text"></textarea>
                      </div>
                      <div class="text-center">
                        <button type="submit" class="btn btn-primary">Submit</button>
                      </div>
                    </form>
                  </span>
                </div>
              </div>
            </div>
          </div>
          `
        }

        response.data.forEach(element => {
          code += `
          <div class="container mt-1">
            <div class="card box-shadow">
              <div class="card-header">
                <img class="col-2 card-img rounded-circle small" src="https://picsum.photos/50">
                <span class="col-10 card-text">${element.userId.username}</span>
              </div>
              <div class="card-body">
                <p class="card-text">${element.text}</p>
              </div>
            </div>
          </div>
         `
        });
        document.getElementById('user-comment').innerHTML = code
      })
      .catch(error => console.error(error))
  })
})
