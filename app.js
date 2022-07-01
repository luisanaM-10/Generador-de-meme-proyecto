                    // BOTONES 
const btnTexto = document.getElementById("btn-texto") // btn de mostrar aside de text
const btnImagen = document.getElementById("btn-imagen") // btn de mostar aside de img
const btnToggle = document.getElementById("btn-toggle") //Modo oscuro
const btnCancelar = document.getElementById("cancelar") // btn de salir de aside text
const btnSalir = document.getElementById("salir") // btn de salir de aside img
const btnReestablecer = document.getElementById("btn-reestablecer") // btn de reestablecer filtros (aside img)


                    // ELEMENTOS 
const header = document.querySelector("header") // header
const web = document.getElementById("contenedor-web") // contenedor web
const textImg = document.getElementById("text-meme") // etiqueta p que toma el value de input superior
const img = document.getElementById("div-img") // div contenedor de img
const textImg2 = document.getElementById("text2-meme") // etiqueta p que toma el value de input inferior 

const asideText = document.getElementById("aside-text") // aside text
const inputSuperior = document.getElementById("superior") // input superior que pinta su value en la etiqueta p (aside text)
const inputInferior = document.getElementById("inferior") // input inferior que pinta su value en la etiqueta p (aside tex)
const fuenteText = document.getElementById("fuente-text") // font-family (aside text)
const colorText = document.getElementById("color-text") // span de color de texto (aside text)
const fondoText = document.getElementById("fondo-text") // span de fondo de texto (aside text)


const asideImg = document.getElementById("aside-img") // aside img
const inputImagen = document.getElementById("url") // input de url, para la img (aside img)
const fondoImg = document.getElementById("fondo-img"); // input tipo color (aside img)
const spanFondoImg = document.getElementById("span-fondo-img") // span de fondo de imagen (aside img)

const rangoBrillo = document.getElementById("brillo") // input tipo rango del filtro brillo (aside img)
const rangoOpacidad = document.getElementById("opacidad") // input tipo rango del filtro opacidad (aside img)
const rangoContraste = document.getElementById("contraste") // input tipo rango del filtro contraste (aside img)
const rangoDesenfoque = document.getElementById("desenfoque") // input tipo rango del filtro desenfoque (aside img)
const escalasDeGrises = document.getElementById("grises") // input tipo rango del filtro escala de grises (aside img)
const rangoSepia = document.getElementById("sepia") // input tipo rango del filtro sepia (aside img)
const rangoHue = document.getElementById("hue") // input tipo rango del fritro hue (aside img)
const rangoSaturno = document.getElementById("saturno") // input tipo rango del fritro saturno (aside img)
const rangoNegativo = document.getElementById("negativo") // input tipo rango de flitro negativo (aside img)


// ------------------------------------------------
// OCULTAR Y MOSTAR (JUNTO CON HEADER Y ASIDE)
// ------------------------------------------------
btnTexto.addEventListener(`click`, () =>{
    asideImg.classList.add("oculto")
    asideText.classList.remove("oculto")
})
btnImagen.addEventListener(`click`, () =>{
    asideText.classList.add("oculto")
    asideImg.classList.remove("oculto")
})

// --------------------------------------
//  TOGGLE DE MODO OSCURO
// --------------------------------------
btnToggle.addEventListener("click", ()  => {
    web.classList.toggle("web-black")
    header.classList.toggle("header-black")
    asideText.classList.toggle("aside-black")
    asideImg.classList.toggle("aside-black")
    fuenteText.classList.toggle("fuente-text")
    colorText.classList.toggle("span-black")
    fondoText.classList.toggle("span-black")
    spanFondoImg.classList.toggle("span-black")
}) 

// --------------------------------------------
//  INPUT QUE PINTE EN LA ETIQUETA P 
// --------------------------------------------

inputSuperior.addEventListener( "input", (event) => {
    const textoIngresado = event.target.value;
    textImg.innerHTML = textoIngresado
})

inputInferior.addEventListener( "input", (event) => {
    const textoIngresado = event.target.value;
    textImg2.innerHTML = textoIngresado
})

// --------------------------------------------
    //  INPUT QUE PINTE EL VALUE EN EL SPAN
// --------------------------------------------
fondoImg.addEventListener( "input", (event) => {
  const textoIngresado = event.target.value;
  spanFondoImg.innerHTML = textoIngresado
})

// -------------------------------------------------------------
    // DIV QUE TOME EL VALUE DEL INPUT PARA PINTAR LA IMAGEN 
// -------------------------------------------------------------
inputImagen.addEventListener( "input", (event) => {
    const srcIngresado = event.target.value;
    img.innerHTML = `<img src="${srcIngresado}"/>`
})

// -----------------------------------
      // FILTROS PARA LA IMAGEN
// -----------------------------------

rangoBrillo.addEventListener('input', (event) => {
    const valorActual = event.target.value;
    img.style.filter = `brightness(${valorActual})`
  })

 
rangoOpacidad.addEventListener('input', (event) => {
    const valorActual = event.target.value;
    img.style.filter = `opacity(${valorActual})`
  })


 rangoContraste.addEventListener('input', (event) => {
    const valorActual = event.target.value;
    img.style.filter = `contrast(${valorActual}%)`
    })


rangoDesenfoque.addEventListener('input', (event) => {
    const valorActual = event.target.value;
    img.style.filter = `blur(${valorActual}px)`
  })

escalasDeGrises.addEventListener('input', (event) => {
    const valorActual = event.target.value;
    img.style.filter = `grayscale(${valorActual}%)`
  })

rangoSepia.addEventListener('input', (event) => {
    const valorActual = event.target.value;
    img.style.filter = `sepia(${valorActual}%)`
  })


rangoHue.addEventListener('input', (event) => {
    const valorActual = event.target.value;
    img.style.filter = `hue-rotation(${valorActual}deg)`
  })


rangoSaturno.addEventListener('input', (event) => {
    const valorActual = event.target.value;
    img.style.filter = `saturation(${valorActual}%)`
  })


 rangoNegativo.addEventListener('input', (event) => {
    const valorActual = event.target.value;
    img.style.filter = `invert(${valorActual})`
  })

// ---------------------------------------------
  // BOTON DE REESTABLECER TODOS LOS FILTROS   
// ---------------------------------------------
btnReestablecer.addEventListener("click", (event) => {
  const brillo = rangoBrillo.value = 1
  const opacidad = rangoOpacidad.value = 1
  const contraste = rangoContraste.value = 100
  const desenfoque = rangoDesenfoque.value = 0
  const grises = escalasDeGrises.value = 0
  const hue = rangoHue.value = 0
  const sepia = rangoSepia.value =  0
  const saturno = rangoSaturno.value = 0 
  const negativo = rangoNegativo.value = 0
  img.style.filter = `brightness(${brillo})` 
  img.style.filter = `opacity(${opacidad})` 
  img.style.filter =  `contrast(${contraste}%)` 
  img.style.filter = `blur(${desenfoque}px) `
  img.style.filter = `grayscale(${grises}%) `
  img.style.filter = `hue-rotation(${hue}deg)`
  img.style.filter = `sepia(${sepia}%)`
  img.style.filter = `saturation(${saturno}%)`
  img.style.filter = `invert(${negativo})`
})

// ----------------------------------------------
        // BOTON DE SALIR/OCULTAR DEL ASIDE 
// ----------------------------------------------
btnCancelar.addEventListener('click', (event) => {asideText.classList.add("oculto")})
btnSalir.addEventListener('click', (event) => {asideImg.classList.add("oculto")})




