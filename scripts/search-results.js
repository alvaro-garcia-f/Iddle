function viewVideo (id) {  
  localStorage.setItem('videoId', id)
  window.location.href = 'video.html' 
}

let search = `/videos/mostwatched`

if (localStorage.getItem('search') && localStorage.getItem('search') !== '') {
  document.getElementById('header-search').innerText = `Videos for "${localStorage.getItem('search')}"`
  search = `/videos/search/${localStorage.getItem('search')}`
  localStorage.removeItem('search')
}

if (localStorage.getItem('tech') && localStorage.getItem('tech') !== '') {
  document.getElementById('header-search').innerText = `Videos for "${localStorage.getItem('tech-name')}"`
  search = `/videos/techs/${localStorage.getItem('tech')}`
  localStorage.removeItem('tech')
  localStorage.removeItem('tech-name')
}

API
  .get(search)
  .then(response => {
    let code = ''
    response.data.forEach(element => {
      code += `
        <div class="col-md-4 p-3">
          <div class="card box-shadow">
          <a href='javascript: viewVideo(${JSON.stringify(element._id)})' ><img class="card-img-top" src="http://i3.ytimg.com/vi/${element.url.split('/')[4]}/maxresdefault.jpg"></a>
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
    })
    document.getElementById('results').innerHTML = code;
  })
  .catch(error => console.error(error))
