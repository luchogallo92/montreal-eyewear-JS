//llamado a Filter
const filtercontainer = document.querySelector ('.filter')

// llamado a Rendercards
const callingrendercards = document.querySelector ('.boxes-shop')

//llamado a Favoritos
const favcallinginco = document.getElementById ("")

// llamado a Dark mode
const darkmode = document.getElementById ("toggle-dark-mode");



////
const applyfilter = () => {
};

/// Render Boxes anteojos
const createproductstemplate = (product) => {
    const {id, nombre, precio, category, cardImg, favourite} = product;
    
    return `
    <div class="caja-shop">
        <div class="box-shop-imagen">
            <img src=${cardImg} alt=${nombre}>
        </div>
        <div class="caja-title">
            <h2>${nombre}</h2>
            <p>${precio}</p>
            <div class="caja-categories">
                <span>${category}</span>
            </div>
        </div>
        <div class="add-to-fav">
            <img src=${favourite} alt="">
        </div>
        <div class="add-to-cart">
            <button id="add-to-cart-button" 
            data-id=${id}
            data-name=${nombre}
            data-img=${cardImg}
            >
            Agregar al carrito
            <img src="./Assets/Iconos/shop.png" alt="" id="cart-button">
            </button>
        </div>
    </div>
    `
};

const rendercards = (product_list) => {
    callingrendercards.innerHTML = product_list.map(createproductstemplate).join("");
};


//

///Dark mode///

darkmode.addEventListener ('click', () =>{
    document.body.classList.toggle("dark-mode")

    if(document.body.classList.contains ("dark-mode")){
        darkmode.src = ("./Assets/Iconos/sol.png")
    } else {
        darkmode.src = ("./Assets/Iconos/darkmode.png")
    }
});


const init = () => {
    rendercards (product_list);
    filtercontainer.addEventListener ("click", applyfilter)
};
    
init ();