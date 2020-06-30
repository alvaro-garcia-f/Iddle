$(document).ready(function () {
   API.get(`/videos/${localStorage.getItem("videoId")}`)
       .then(response => {
         console.log(response.data.url)         
            document.getElementById('selected-video').innerHTML = 
            ` 
            
              <div class="embed-responsive embed-responsive-16by9">
                  <iframe width="1280px" heigth="720px" class="embed-responsive-item" src="${response.data.url}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div class="card box-shadow">
                <div class="card-body">
                      <p class="card-text ">er.</p>
                      <div class="d-flex justify-content-between">
                          <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                          </div>
                          <small class="text-muted">9 mins</small>
                      </div>
                </div>
              </div>

              
            
            `
       })
        .catch(error => console.error(error))    
})