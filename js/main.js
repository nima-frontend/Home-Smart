const navBtn = document.querySelector('#menu')
const menuBar = document.querySelector('[role="menubar"]')

navBtn.addEventListener('click',()=>{
    const isExpanded = JSON.parse(navBtn.getAttribute('aria-expanded'))
    navBtn.setAttribute('aria-expanded',!isExpanded)
    menuBar.classList.toggle('hidden')
    menuBar.classList.toggle('flex')
})

document.getElementById("profile-btn").addEventListener("click", function () {
    let socials = document.getElementById("socials");
    let github = socials.children[0];
    let linkedin = socials.children[1];
    
    if (socials.classList.contains("opacity-0")) {
        socials.classList.remove("opacity-0");
        setTimeout(() => {
            github.style.opacity = "1";
            github.style.top = "-50px";
            linkedin.style.opacity = "1";
            linkedin.style.left = "-50px";
        }, 100);
    } else {
        github.style.opacity = "0";
        github.style.top = "-5px";
        linkedin.style.opacity = "0";
        linkedin.style.left = "-6px";
        setTimeout(() => socials.classList.add("opacity-0"), 500);
    }
});