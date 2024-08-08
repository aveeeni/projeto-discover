function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    // se tiver sem light mode, manter imagem normal
  }

  // pegar a tag alt
  const alt = document.querySelector("#profile img")

  // substituir a legenda
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar legenda light
    img.setAttribute("alt", "anya fofinha com uma lupa")
  } else {
    img.setAttribute("alt", "anya forger armada")
    // se tiver sem light mode, manter legenda normal
  }


}
