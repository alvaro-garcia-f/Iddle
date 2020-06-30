
// USER NOT LOGGED
if (!localStorage.getItem('token')) {
  document.getElementById('myNavbar').innerHTML = `    
    <a href="index.html" class="navbar-brand d-flex align-items-center"><strong>Iddle</strong> </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader">
      <span class="navbar-toggler-icon"></span> </button>    
    <div class="collapse bg-light navbar-collapse" id="navbarHeader">
      <ul class="navbar-nav ml-3 mt-3">
        <li class="nav-item">
          <form class="form-inline my-1 my-lg-0">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Search" aria-label="Search"
                aria-describedby="basic-addon2" id="searchInput">
              <div class="input-group-append">
                <button class="btn btn-outline-primary" type="button" id="searchBtn"><i class="fa fa-search"
                    aria-hidden="true"></i></button>
              </div>
            </div>
          </form>
        </li>
        <div class="dropdown-divider border-primary"></div>
        <li class="navbar-item">
          <a class="nav-link" href="#">Technologies</a>
        </li>
        <li class="navbar-item">
          <a class="nav-link" href="level.html">Skill Level</a>
        </li>
        <div class="dropdown-divider border-primary"></div>
        <li class="navbar-item">
          <button class="btn btn-primary" type="button" data-toggle="modal" data-target="#logInModal">Get Started</button>
        </li>
      </ul>
    </div>
    `
} else {
  document.getElementById('myNavbar').innerHTML = `
      <a href="index.html" class="navbar-brand d-flex align-items-center"><strong>Iddle</strong> </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader"> <span
            class="navbar-toggler-icon"></span> </button>    
      <div class="collapse bg-light navbar-collapse" id="navbarHeader">
        <ul class="navbar-nav ml-3 pt-3">
          <li class="nav-item">
            <form class="form-inline my-1 my-lg-0">
              <div class="input-group">
                <input type="text" class="form-control" placeholder="Search" aria-label="Search"
                  aria-describedby="basic-addon2" id="searchInput">
                <div class="input-group-append">
                  <button class="btn btn-outline-primary" type="button" id="searchBtn"><i class="fa fa-search"
                      aria-hidden="true"></i></button>
                </div>
              </div>
            </form>
          </li>
          <div class="dropdown-divider border-primary"></div>
          <li class="navbar-item">
            <a class="nav-link" href="#">Technologies</a>
          </li>
          <li class="navbar-item">
            <a class="nav-link" href="level.html">Skill Level</a>
          </li>
          <div class="dropdown-divider border-primary"></div>
          <li class="navbar-item">
            <a class="nav-link" href="#"><i class="fa fa-user-circle"></i> Profile</a>
          </li>
          <li class="navbar-item">
            <a class="nav-link" href="#" type="button" data-toggle="modal" data-target="#uploadModal"><i
                class="fa fa-upload"></i> Upload video</a>
          </li>
          <div class="dropdown-divider border-primary"></div>
          <li class="navbar-item">
            <button class="btn btn-dark" id="logout">Log out</button>
          </li>
        </ul>
      </div>
    `

  document.getElementById('logout').addEventListener('click', function (e) {
    localStorage.clear()
    window.location.href = 'index.html'
  })
}
