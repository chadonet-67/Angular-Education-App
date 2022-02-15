let navbar = document.querySelector(".header .navbar");

document.querySelector('#menu-btn').onclick = ()=>{
    navbar.classList.toggle("active");
}

window.onscroll = ()=>{
    navbar.classList.remove("active");
}

let mainvid = document.querySelector(".main-video");

document.querySelectorAll(".course-3 .box .video video").forEach(vid =>{
    vid.onclick = () =>{
        let src = vid.getAttribute('src');
        mainvid.classList.add('active');
        mainvid.querySelector('video').src = src;
    }
});

document.querySelector("#close-vid").onclick = ()=>{
    mainvid.classList.remove("active");
}