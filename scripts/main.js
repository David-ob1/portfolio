let btnTheme = document.querySelector(".switch");
nav = document.getElementById("nav")
btnTheme.addEventListener("click", e => {

    btnTheme.classList.toggle("active")
    document.body.classList.toggle("active")

    toggleAttribute(nav,"data-bs-theme","dark")

})

function toggleAttribute( element,Attribute,value){
    element.hasAttribute(Attribute) 
            ? element.removeAttribute(Attribute) 
            : element.setAttribute(Attribute,value)

}