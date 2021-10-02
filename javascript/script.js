let btnCafeDaManha = document.querySelector('.btnBreakfest')
let areaCafeDaManha = document.querySelector('.areaBreakfest')
let btnAlmoco = document.querySelector('.btnLunchs')
let areaAlmoco = document.querySelector('.areaLunchs')
let btnJanta = document.querySelector('.btnDinner')
let areaJanta = document.querySelector('.areaDinner')
let btnDrinks = document.querySelector('.btnDrinks')
let areaDrinks = document.querySelector('.areaDrinks')

function chamarCafe(){
    areaAlmoco.style.display = 'none'
    btnAlmoco.style.backgroundColor = '#ffffff'
    btnCafeDaManha.style.backgroundColor = '#cecccc'
    areaCafeDaManha.style.display = 'inline-block'
    btnJanta.style.backgroundColor = '#ffffff'
    areaJanta.style.display = 'none'
    btnDrinks.style.backgroundColor = '#ffffff'
    areaDrinks.style.display = 'none'
}

function chamarAlmoco(){
    areaAlmoco.style.display = 'inline-block'
    btnAlmoco.style.backgroundColor = '#cecccc'
    btnCafeDaManha.style.backgroundColor = '#ffffff'
    areaCafeDaManha.style.display = 'none'
    btnJanta.style.backgroundColor = '#ffffff'
    areaJanta.style.display = 'none'
    btnDrinks.style.backgroundColor = '#ffffff'
    areaDrinks.style.display = 'none'
}

function chamarJanta(){
    areaAlmoco.style.display = 'none'
    btnAlmoco.style.backgroundColor = '#ffffff'
    btnCafeDaManha.style.backgroundColor = '#ffffff'
    areaCafeDaManha.style.display = 'none'
    btnJanta.style.backgroundColor = '#cecccc'
    areaJanta.style.display = 'inline-block'
    btnDrinks.style.backgroundColor = '#ffffff'
    areaDrinks.style.display = 'none'
}

function chamarDrinks(){
    areaAlmoco.style.display = 'none'
    btnAlmoco.style.backgroundColor = '#ffffff'
    btnCafeDaManha.style.backgroundColor = '#ffffff'
    areaCafeDaManha.style.display = 'none'
    btnJanta.style.backgroundColor = '#ffffff'
    areaJanta.style.display = 'none'
    btnDrinks.style.backgroundColor = '#cecccc'
    areaDrinks.style.display = 'inline-block'
}