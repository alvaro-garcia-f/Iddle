function viewVideo (id) {  
    localStorage.setItem('videoId', id)
    window.location.href = 'video.html' 
  }
  $(document).ready(function () {
  
    API.get('/videos/level/beginner')
      .then(response => {    
        let code = ''
        let count = 0
        response.data.forEach(element => {                
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
                          <small>Author Name</small> <br>
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
          count++
        })
        document.getElementById('carousel-beginner').innerHTML = code
      })
      .catch(error => console.error(error))

      API.get('/videos/level/intermediate')
      .then(response => {    
        let code = ''
        let count = 0
        response.data.forEach(element => {                
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
                          <small>Author Name</small> <br>
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
          count++
        })
        document.getElementById('carousel-intermediate').innerHTML = code
      })
      .catch(error => console.error(error))

      API.get('/videos/level/advanced')
      .then(response => {    
        let code = ''
        let count = 0
        response.data.forEach(element => {                
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
                          <small>Author Name</small> <br>
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
          count++
        })
        document.getElementById('carousel-advanced').innerHTML = code
      })
      .catch(error => console.error(error))
  })