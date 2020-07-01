$(document).ready(function () {
    let code = '';
    API.get('/techs/')
    .then(response => {
        response.data.forEach(tech => {
            code += `
                <div class="col-12">
                    <h5 class="text-primary">${tech.name}</h5>
                    <hr class="border-primary">
                </div>

                <div class="py-2">
                <div class="container">
                  <div class="row">       
              
                    <div id="carousel-${tech-name}" class="carousel slide">
                      <div class="carousel-inner">
            `
            let count = 0
            API.get(`videos/techs/${tech._id}`)
            .then(response => {
                console.log(response.data)
                response.data.forEach(video => {
                    code += `
                    <div class="carousel-item ${count === 0 ? 'active' : ''}">
                    <div class="card box-shadow">
                    <a href='javascript: viewVideo(${JSON.stringify(video._id)})' ><img class="card-img-top" src="http://i3.ytimg.com/vi/${video.url.split('/')[4]}/maxresdefault.jpg"></a>
                      <div class="card-body">
                        <div class="row">
                          <p class="col-12 card-text font-weight-bold">${video.title}</p>                     
                        </div>
                        <div class="d-flex justify-content-between pt-1">
                           <div>
                             <small>Author Name</small> <br>
                             <span class="bg-white border-muted small"><i class="fa fa-eye text-primary" aria-hidden="true"></i><small> ${video.views}</small></span>
                           </div>
                           <div>
                             <small class="col card-text justify-content-end small">${video.level}</small>
                             <br>
                             <small class="text-muted">${video.duration} mins</small>
                           </div>
                         </div>
                      </div>
                    </div>
                  </div>
                    `
                })
            })

            code += `
                      </div>
                      <a class="carousel-control-prev pb-5 mb-3" href="#carousel-${tech-name}" role="button" data-slide="prev">
                        <span class="text-light"><i class="fa fa-angle-left fa-4x" aria-hidden="true"></i></span>
                        <span class="sr-only">Previous</span>
                      </a>
                      <a class="carousel-control-next pb-5 mb-3" href="#${tech-name}" role="button" data-slide="next">
                        <span class="text-light" aria-hidden="true"><i class="fa fa-angle-right fa-4x"
                            aria-hidden="true"></i></span>
                        <span class="sr-only">Next</span>
                      </a>
                    </div>


                  </div>
                </div>
              </div>
            `
        })
        document.getElementById('techs-container').innerHTML = code
    })
    .catch(error => console.error(error))
})