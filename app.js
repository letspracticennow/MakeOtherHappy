let FaceClosed = document.querySelector(".closed");
let FaceOpen = document.querySelector(".open");
let ParaClosed = document.querySelector(".pclosed");
let ParaOpen = document.querySelector(".popen");
FaceClosed.addEventListener('click', () => {
    if (FaceOpen.classList.contains("open")) {
        FaceOpen.classList.add("active");
        FaceClosed.classList.remove("active");
        ParaOpen.classList.add("pactive");
        ParaClosed.classList.remove('pactive');


    }
})
FaceOpen.addEventListener('click', () => {
    if (FaceClosed.classList.contains("closed")) {
        FaceClosed.classList.add("active");
        FaceOpen.classList.remove('active');
        ParaOpen.classList.remove("pactive");
        ParaClosed.classList.add('pactive');


    }
})