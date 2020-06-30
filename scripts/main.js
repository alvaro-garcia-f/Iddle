$(document).ready(function () {
  API.get('/videos/mostwatched')
    .then(response => {
      let code = ''
      let count = 0
      response.data.forEach(element => {
        code += ` 
               <div class="carousel-item ${count === 0 ? 'active' : ''}">
               <div class="card box-shadow">
                 <img class="card-img-top" src="http://i3.ytimg.com/vi/${element.url.split('/')[3]}/maxresdefault.jpg">
                 <div class="card-body">
                   <div class="row">
                     <p class="col-8 card-text">${element.title}</p>
                     <p class="col-4 card-text justify-content-end small">${element.level}</p>
                   </div>
                   <div class="d-flex justify-content-between align-items-center">
                     <div class="btn-group">
                       <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                       <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                     </div> <small class="text-muted">${element.duration} mins</small>
                   </div>
                 </div>
               </div>
             </div>
               `
        count++
      })
      document.getElementById('carousel-most-watched').innerHTML = code
    })
    .catch(error => console.error(error))

  API.get('/videos/techs/5efa706388c6b67538a2cec1')
    .then(response => {
      let code = ''
      let count = 0
      response.data.forEach(element => {
        code += ` 
               <div class="carousel-item ${count === 0 ? 'active' : ''}">
               <div class="card box-shadow">
                 <img class="card-img-top" src="http://i3.ytimg.com/vi/${element.url.split('/')[3]}/maxresdefault.jpg">
                 <div class="card-body">
                   <div class="row">
                     <p class="col-8 card-text">${element.title}</p>
                     <p class="col-4 card-text justify-content-end small">${element.level}</p>
                   </div>
                   <div class="d-flex justify-content-between align-items-center">
                     <div class="btn-group">
                       <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                       <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                     </div> <small class="text-muted">${element.duration} mins</small>
                   </div>
                 </div>
               </div>
             </div>
               `
        count++
      })
      document.getElementById('carousel-favourite-tech').innerHTML = code
    })
    .catch(error => console.error(error))
})
