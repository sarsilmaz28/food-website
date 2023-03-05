let navBar=document.querySelectorAll('.nav-link');
let navCollapse=document.querySelector('.navbar-collapse.collapse');

navBar.forEach(element => {
    element.addEventListener("click",()=>{
        navCollapse.classList.remove("show")
    })
});