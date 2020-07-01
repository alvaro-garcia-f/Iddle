
// USER NOT LOGGED
if (!localStorage.getItem('token')) {
  document.getElementById('login-modal').innerHTML = `
    <div class="modal-dialog" role="document">
      <div class="modal-content">

        <div class="modal-header border-primary">
          <h5 class="modal-title">Welcome back!</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span class="text-primary" aria-hidden="true">&times;</span>
          </button>
        </div>

        <div class="modal-body">
          <form id="loginForm">
            <div class="form-group">
              <label for="loginEmail">Email</label>
              <input type="email" class="form-control" id="loginEmail" placeholder="example@example.com" aria-describedby="emailHelp">
            </div>
            <div class="form-group">
              <label for="loginPassword">Password</label>
              <input type="password" class="form-control" id="loginPassword" autocomplete="true">
            </div>
            <div class="text-center">
              <button type="submit" class="btn btn-primary" id="loginBtn">Submit</button>
            </div>
          </form>
        </div>

        <div class="modal-footer justify-content-center">
          <span>You don't have an account? <a href="#" class="text-primary" data-dismiss="modal" data-toggle="modal" data-target="#signup-modal">Register here</a></span>
        </div>

      </div>
    </div>
  `

  document.getElementById('signup-modal').innerHTML = `
    <div class="modal-dialog" role="document">
      <div class="modal-content">

        <div class="modal-header border-primary">
          <h5 class="modal-title">Join our Techies</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span class="text-primary" aria-hidden="true">&times;</span>
          </button>
        </div>

        <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="signupEmail">Email</label>
              <input type="email" class="form-control" id="signupEmail" placeholder="example@example.com" aria-describedby="emailHelp">
            </div>
            <div class="form-group">
              <label for="signupPassword">Password</label>
              <input type="password" class="form-control" id="signupPassword" autocomplete="true">
            </div>
            <div class="form-group">
              <label for="signupPassword2">Repeat Password</label>
              <input type="password" class="form-control" id="signupPassword2" autocomplete="true">
            </div>
            <div class="text-center">
              <button type="submit" class="btn btn-primary" id="signUpBtn">Submit</button>
            </div>
          </form>
        </div>

         <div class="modal-footer justify-content-center">
          <span>Already have an account? <a href="#" class="text-primary" data-dismiss="modal" data-toggle="modal" data-target="#login-modal">Log in here</a></span>
        </div>
      </div>
    </div>
  `

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
          <a class="nav-link" href="techs.html">Technologies</a>
        </li>
        <li class="navbar-item">
          <a class="nav-link" href="level.html">Skill Level</a>
        </li>
        <div class="dropdown-divider border-primary"></div>
        <li class="navbar-item">
          <button class="btn btn-primary" type="button" data-toggle="modal" data-target="#login-modal">Get Started</button>
        </li>
      </ul>
    </div>
    `
} else {

  document.getElementById('upload-modal').innerHTML = `
    <div class="modal-dialog" role="document">
    <div class="modal-content">

      <div class="modal-header border-primary">
        <h5 class="modal-title">Upload Video</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span class="text-primary" aria-hidden="true">&times;</span>
        </button>
      </div>

      <div class="modal-body">
        <form>
          <div class="form-group">
            <label for="title">Title</label>
            <input type="text" class="form-control" id="title" aria-describedby="titleHelp">
          </div>
          <div class="form-group">
            <label for="description">Description</label>
            <textarea class="form-control" id="description" rows="3"></textarea>
          </div>
          <div class="form-group">
            <label for="url">Url</label>
            <input type="text" class="form-control" id="url">
          </div>
          <div class="form-group">
            <label for="techs">Techs</label>
            <input type="text" class="form-control" id="techs" name="techs">
          </div>
          <div class="form-group">
            <label for="level">Skill level</label>
            <div class="text-center">
              <div class="btn-group btn-group-toggle" data-toggle="buttons" id="levels">
                <label class="btn btn-secondary active">
                  <input type="radio" name="options" id="beginner" checked> Beginner
                </label>
                <label class="btn btn-secondary">
                  <input type="radio" name="options" id="intermediate"> Intermediate
                </label>
                <label class="btn btn-secondary">
                  <input type="radio" name="options" id="advanced"> Advanced
                </label>
              </div>
            </div>
          </div>
        </form>
      </div>

      <div class="modal-footer justify-content-center">
        <button type="submit" class="btn btn-primary"><i class="fa fa-upload"></i>Upload</button>
      </div>
    </div>
  </div>
  `

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
            <a class="nav-link" href="techs.html">Technologies</a>
          </li>
          <li class="navbar-item">
            <a class="nav-link" href="level.html">Skill Level</a>
          </li>
          <div class="dropdown-divider border-primary"></div>
          <li class="navbar-item">
            <a class="nav-link" href="my-profile.html"><i class="fa fa-user-circle"></i> Profile</a>
          </li>
          <li class="navbar-item">
            <a class="nav-link" href="#" type="button" data-toggle="modal" data-target="#upload-modal"><i
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
