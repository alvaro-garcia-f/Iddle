function viewVideo (id) {
  localStorage.setItem('videoId', id)
  window.location.href = 'video.html'
}

function getTech (id, name) {
  localStorage.setItem('tech', id)
  localStorage.setItem('tech-name', name)
  window.location.href = 'results.html'
}

$(document).ready(function () {

  if(!localStorage.getItem('token')) {
    document.getElementById('body-btn-signup').innerHTML = `
        <div class="pb-4">
          <a href="#" class="btn btn-primary" type="button" data-toggle="modal" data-target="#login-modal">Get
            Started</a>
        </div>
      `
  }

  API
    .get('/techs')
    .then(response => {
      code = ''
      response.data.forEach(tech => {
        code += `
          <a href='javascript: getTech(${ JSON.stringify(tech._id) }, ${ JSON.stringify(tech.name)})' class="btn btn-secondary text-white m-1"># ${ tech.name }</a>
        `
      })
      document.getElementById('container-pills').innerHTML = code
    })
    .catch(error => console.error(error))

  API.get('/videos/mostwatched')
    .then(response => {
      let code = ''
      let count = 0
      response.data.forEach(element => {
        code += `
          <div class="carousel-item ${count === 0 ? 'active' : ''}">
            <div class="card box-shadow">
            <a href='javascript: viewVideo(${JSON.stringify(element._id)})' ><img class="card-img-top" src="http://i3.ytimg.com/vi/${element.url.split('/')[4]}/maxresdefault.jpg"></a>
            <div class="card-body">
              <p class="card-text font-weight-bold">${element.title}</p>
              <div class="d-flex justify-content-between pt-1">
                <small>${element.author.username}</small>
                <small class="card-text">${element.level}</small>
              </div>
              <div class="d-flex justify-content-between pt-1">
                <span class="bg-white border-muted small"><i class="fa fa-eye text-primary" aria-hidden="true"></i><small> ${element.views}</small></span>
                <small class="text-muted">${element.duration} mins</small>
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

  API
    .get('/videos/techs/5efbdccdf707ebff5f788e35')
    .then(response => {
      let code = ''
      let count = 0
      response.data.forEach(element => {
        code += `
          <div class="carousel-item ${count === 0 ? 'active' : ''}">
            <div class="card box-shadow">
            <a href='javascript: viewVideo(${JSON.stringify(element._id)})' ><img class="card-img-top" src="http://i3.ytimg.com/vi/${element.url.split('/')[4]}/maxresdefault.jpg"></a>
              <div class="card-body">
                <p class="card-text font-weight-bold">${element.title}</p>
              <div class="d-flex justify-content-between pt-1">
                <small>${element.author.username}</small>
                <small class="card-text">${element.level}</small>
              </div>
              <div class="d-flex justify-content-between pt-1">
                <span class="bg-white border-muted small"><i class="fa fa-eye text-primary" aria-hidden="true"></i><small> ${element.views}</small></span>
                <small class="text-muted">${element.duration} mins</small>
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
