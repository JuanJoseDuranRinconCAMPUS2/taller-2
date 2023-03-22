export default{
    banner: {
            titleBanner : "Skillet",
            pBanner : "Skillet es una banda de rock cristiano y metal cristiano originaria de Tennessee, fundada en 1996 y conformada por John y Korey Cooper, Seth Morrison y Jen Ledger. El grupo ha publicado once álbumes de estudio, el más reciente, Dominion, en el 2022. Dos de sus discos, Collide y Comatose recibieron nominación al Grammy. El sonido de la banda se ha descrito como rock alternativo, hard rock, y rock sinfónico, y ha sido caracterizada por elementos electrónicos"
    },
    image : "./img/skilletHeader.jpg",
    showImage(){
        document.querySelector(".imgStyle").style.backgroundImage = `url(${this.image})`;
    },
    listBanner(){
        document.querySelector("#banner").insertAdjacentHTML("beforeend", 
        `
        <h1 class="display-4 fst-italic" >${this.banner.titleBanner}</h1>
        <p class="lead my-3">${this.banner.pBanner}</p>
        <p class="lead mb-0"><a href="https://dayofdestiny.skillet.com/" target = "_blank" class="text-white fw-bold">Continuar...</a></p>
        `
        )
    },
}