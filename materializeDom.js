document.addEventListener('DOMContentLoaded', function() {
    var sideNav = document.querySelectorAll('.sidenav');
    var dropDOwn = document.querySelectorAll('.dropdown-trigger');
    var slider = document.querySelectorAll('.carousel');

    var instances = M.Carousel.init(slider);

    var instances = M.Sidenav.init(sideNav);
    var instances = M.Dropdown.init(dropDOwn);

  });
