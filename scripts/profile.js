function viewVideo (id) {  
  localStorage.setItem('videoId', id)
  window.location.href = 'video.html' 
}

$(document).ready(function() {
    API
        .get(`/users/me`, { headers: { token: localStorage.getItem('token')}})
        .then(response => {
          document.getElementById('user-name').innerHTML = response.data.username
          document.getElementById('user-about').innerHTML = response.data.about

          let code = ''
          let count = 0

          if (response.data.videos.length > 0) {
            document.getElementById('header-uploaded').innerHTML = `
              <div class="col">
                <h5 class="text-primary">Uploaded Videos</h5>
                <hr class="border-primary">
              </div>
            `

            response.data.videos.forEach(element => {
              code += `
              <div class="carousel-item ${count === 0 ? 'active' : ''}">
                   <div class="card box-shadow">
                   <a href='javascript: viewVideo(${JSON.stringify(element._id)})' ><img class="card-img-top" src="http://i3.ytimg.com/vi/${element.url.split('/')[4]}/maxresdefault.jpg"></a>
                     <div class="card-body">
                       <div class="row">
                         <p class="col-12 card-text font-weight-bold">${element.title}</p>                     
                       </div>
                       <div class="d-flex justify-content-between pt-1">
                          <div>
                            <small>${response.data.username}</small> <br>
                            <span class="bg-white border-muted small"><i class="fa fa-eye text-primary" aria-hidden="true"></i><small> ${element.views}</small></span>
                          </div>
                          <div>
                            <small class="col card-text justify-content-end small">${element.level}</small>
                            <br>
                            <small class="text-muted">${element.duration} mins</small>
                          </div>
                        </div>
                     </div>
                   </div>
                 </div>
              `
              count++;
            });
  
            document.getElementById('carousel-uploaded').innerHTML = code;

            document.getElementById('footer-uploaded').innerHTML = `
              <a class="carousel-control-prev" href="#carouselUploaded" role="button" data-slide="prev">
                <span class="text-primary"><i class="fa fa-angle-left fa-2x" aria-hidden="true"></i></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselUploaded" role="button" data-slide="next">
                <span class="text-primary" aria-hidden="true"><i class="fa fa-angle-right fa-2x"
                    aria-hidden="true"></i></span>
                <span class="sr-only">Next</span>
              </a>
            `
          }
        })
        .catch(error => console.error(error))
     
})