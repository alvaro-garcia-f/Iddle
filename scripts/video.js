$(document).ready(function () {
  API.put(`/videos/${localStorage.getItem("videoId")}/views`)
     .then(response => console.log(response.data))
     .catch(error => console.error(error))
     
  
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
  
  $('#load-comments').on('click', function(event) {
    API.get(`/videos/${localStorage.getItem("videoId")}/comments`)
        .then(response => {
          let code = ''          
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