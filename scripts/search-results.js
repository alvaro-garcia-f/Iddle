
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
        <div class="col-md-4 pb-2">
          <div class="card box-shadow">
            <img class="card-img-top" src="http://i3.ytimg.com/vi/${element.url.split('/')[4]}/maxresdefault.jpg">
            <div class="card-body">
                <p class="card-text font-weight-bold">${element.title}</p>
              <div class="d-flex justify-content-between pt-1">
                <small>Author Name</small>
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
    })
    document.getElementById('results').innerHTML = code;
  })
  .catch(error => console.error(error))
