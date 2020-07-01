function postComment() {
  API
    .post(`/videos/me/${localStorage.getItem('videoId')}/comments`, document.getElementById('comment-text').value,)
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
      document.getElementById('video-card-author').innerHTML = `<a href="#">${response.data.author.name}</a>`
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
    console.log('click')
    API
      .get(`/videos/${localStorage.getItem("videoId")}/comments`)
      .then(response => {
        let code = '' 
        
        if(localStorage.getItem('token')) {
          code = `
          <div class="container">
            <div class="card box-shadow d-flex flex-row ">
              <div class="col-12 py-2">
                <div class="card-header col-12">
                  <div class="d-flex flex-row">
                    <img class="col-2 card-img rounded-circle small" src="https://picsum.photos/50">
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
                <div class="card-body col-12">
                  <p class="card-text">
                  <form>
                    <div class="form-group">
                      <label for="addComment">Add comment</label>                    
                      <textarea class="form-control" id="description" rows="3"></textarea>
                    </div>
                    <div class="text-center">
                      <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                  </form>
                  </p>
                </div>
              </div>
            </div>
          </div>
          ` 
        }

        response.data.forEach(element => {
          code += `
          <div class="card box-shadow d-flex flex-row ">
            <div class="col-12 py-2">
              <div class="card-header col-12">
                <img class="col-2 card-img rounded-circle small" src="https://picsum.photos/50">
                <span class="col-10 card-text">${element.userId.name}</span>
              </div>
              <div class="card-body col-12">
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