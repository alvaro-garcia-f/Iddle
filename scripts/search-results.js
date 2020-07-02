
let search = `/videos/mostwatched`

if (localStorage.getItem('search') && localStorage.getItem('search') !== '') {
  search = `/videos/search/${localStorage.getItem('search')}` 
}

API
  .get(search)
  .then(response => {
    console.log(response)
    let code = ''
    response.data.forEach(element => {
      code += ` 
            <div class="col-md-4 p-3">
              <div class="card box-shadow">
                <img class="card-img-top" src="http://i3.ytimg.com/vi/${element.url.split('/')[4]}/maxresdefault.jpg">
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