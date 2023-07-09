
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

// Render Shoplist

const shoplist = document.getElementById ("add-to-cart-button");

    shoplist.addEventListener ('click', () =>{
    alert ("Haz añadido el producto al carrito!");
 
});

// Render Boxes anteojos
const renderdivscards = document.createElement ("div")


const rendercards = document.querySelector (".boxes-shop")

rendercards.appendChild (renderdivscards)


