let a = document.querySelector(".header")
a.innerHTML=`
<div class="m-container">
    <div class="up-header">
        <div class="header-items">
            <ul>
                <li>
                    <a href=""><i class="fa fa-facebook"></i></a>
                    <a href=""><i class="fa fa-twitter"></i></a>
                    <a href=""><i class="fa fa-google-plus"></i></a>
                </li>
                <li>
                    <a href=""><i class="fa fa-envelope"> xyz@kidszone.com</i></a>
                    <a href=""><i class="fa fa-phone"> 123456789</i></a>
                </li>
            </ul>
        </div>
    </div>
</div>
<nav class="navbar navbar-expand-lg navbar-light">
    <a class="navbar-brand" href="#"><img src="./assets/images/logo.png" alt=""></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item dropdown">
          <a class="nav-link" id="home" href="./index.html" role="button" data-toggle="dropdown" aria-expanded="false">
            Home
          </a>
          <div class="dropdown-menu" id="hm">
            <a class="dropdown-item" href="./index.html">Home page</a>
            <a class="dropdown-item" href="#">Home Landing</a>
            <a class="dropdown-item" href="#">Home Kindergarten</a>
            <a class="dropdown-item" href="#">Home Events</a>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link" id="about" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
            About
          </a>
          <div class="dropdown-menu" id="abt">
            <a class="dropdown-item" href="#">Our journey</a>
            <a class="dropdown-item" href="#">Our goal</a>
            <a class="dropdown-item" href="#">About teachers</a>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link" id="learn" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
            Learn
          </a>
          <div class="dropdown-menu" id="lea">
            <a class="dropdown-item" href="./abc.html">ABC/abc</a>
            <a class="dropdown-item" href="./fruit.html">Fruits Names</a>
            <a class="dropdown-item" href="./veg.html">Vegetables Names</a>
            <a class="dropdown-item" href="./color.html">Color Names</a>
            <a class="dropdown-item" href="./math.html">123/Tables<br>Add/Sub</a>
            <a class="dropdown-item" href="./md.html">Months/Days Names</a>
            <a class="dropdown-item" href="./animal.html">Animals Name</a>               
          </div>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link" id="franchise" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
            Franchise
          </a>
          <div class="dropdown-menu" id="fran">
            <a class="dropdown-item" href="#">Branch 1</a>
            <a class="dropdown-item" href="#">Branch 2</a>
            <a class="dropdown-item" href="#">Branch 3</a>
            <a class="dropdown-item" href="#">Branch 4</a>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link" id="gallery" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
            Gallery
          </a>
          <div class="dropdown-menu" id="gal">
            <a class="dropdown-item" href="">our Events</a>
            <a class="dropdown-item" href="">Performances</a>
            <a class="dropdown-item" href="">Our arts</a>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link" id="contact" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
            Contact
          </a>
          <div class="dropdown-menu" id="con">
            <a class="dropdown-item" href="#">phone: 123456789</a>
            <a class="dropdown-item" href="#">Email: xyz@kidszone.com</a>
            <a class="dropdown-item" href="#">Contact our counsellor</a>
          </div>
        </li>
      </ul>
      <form class="form-inline my-0 my-lg-0" id="form">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" id="inpt">
        <button class="btn my-2 my-sm-0" type="submit"><i class="fa fa-search"></i></button>
      </form>
    </div>
  </nav>`