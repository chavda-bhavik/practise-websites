let toggleBtn = document.getElementById('navbar-toggle');
let navbar = document.getElementById('navbar-collapse');

toggleBtn.addEventListener('click', function() {
    navbar.classList.toggle('collapse');
});

