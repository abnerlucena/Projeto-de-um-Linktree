function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light") 
    
    //pegar a tag img
    const img = document.querySelector("#Profile img")

    //substituir a imagem
    if(html.classList.contains('light')) {
        //se tiver o light mode, adicionar a img light
        img.setAttribute('src', 'carol.svg')
        img.setAttribute('alt', 'a carol sendo linda')
    } else {
        //se tiver em dark mode, manter a img normal
        img.setAttribute('src', 'abner.jpeg')
        img.setAttribute('alt', 'o abner sendo bem lindo')
    }
}