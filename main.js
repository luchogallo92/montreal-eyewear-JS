
//Dark mode//
const darkmode = document.getElementById ("toggle-dark-mode");

darkmode.addEventListener ('click', () =>{
    document.body.classList.toggle("dark-mode")

    if(document.body.classList.contains ("dark-mode")){
        darkmode.src = ("./Assets/Iconos/sol.png")
    } else {
        darkmode.src = ("./Assets/Iconos/darkmode.png")
    }
});




///////
const cardanteojos = document.querySelector (".boxes-shop");

