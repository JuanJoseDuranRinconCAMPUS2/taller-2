export default{
    
    nav:[
        { 
            title:"Skillet celebra 25 años con la música",
            paragranph:"Hace 25 años, tres miembros de diferentes y estilos musicales (John Cooper, Ken Steorts y Trey McClurkin) se reunieron para formar una banda. Comentaron que era como «tirar sus influencias musicales en una sartén», así que lo eligieron como nombre (skillet = sartén) y lanzaron su álbum debut skillet. A partir del sonido del grunge, es difícil imaginar que este pequeño grupo de rock se convertiría en una de las bandas más icónicas y exitosas de la música cristiana. Si bien solo el vocalista John Cooper permanece como miembro original en la banda, este álbum fue donde comenzó la magia."
        },
        { 
            title:"Logros",
            paragranph:"Hasta el momento, ha conseguido 8 GMA Dove Award, 1 Billboard Music Award, 1 Loudwire Music Award, 3 HM Award y 2 nominaciones al Grammy. La banda fue reconocida en 2016 por haber grabado el sencillo digital más grande en la historia de la música cristiana, ya que «Monster» había alcanzado la cifra de 2.6 millones en ventas. Fue Doble Certificado de Platino por la RIAA, fue la canción cristiana #1 en streaming y fue la canción de rock #8 en streaming de 2015. En 2019, Skillet anunció en su sitio que la RIAA había certificado «Monster» como Triple Platino y a «Hero» como Doble Platino."
        },
        {
            title:"Miembros",
            link:[
                {
                    name:"John Cooper",
                    link:"https://es.wikipedia.org/wiki/John_Cooper_(cantante)"
                },
                {
                    name:"Korey Cooper",
                    link:"https://es.wikipedia.org/wiki/Korey_Cooper"
                },
                {
                    name:"Jen Ledger",
                    link:"https://es.wikipedia.org/wiki/Jen_Ledger"
                },
                {
                    name:"Seth Morrison",
                    link:"https://es.wikipedia.org/wiki/Seth_Morrison"
                }
              
            ]
        },
        {
            title:"Redes",
            link:[
                {
                    name:"PaginaOficial",
                    link:"https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwi9y6PCh_L9AhVvJUQIHSMRAZMQFnoECF4QAQ&url=https%3A%2F%2Fwww.skillet.com%2F%3Ffrontpage%3Dtrue&usg=AOvVaw1ShQQqBkYoD5yI0KphEX28"
                },
                {
                    name:"Youtube",
                    link:"https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwi9y6PCh_L9AhVvJUQIHSMRAZMQtwJ6BAggEAE&url=https%3A%2F%2Fwww.youtube.com%2Fchannel%2FUCE8NoMFnai3tTuwdiQJ-78A&usg=AOvVaw2oO20bqKCwd9GOBv2gIY3u"
                },
                {
                    name:"Twitter",
                    link:"https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwi9y6PCh_L9AhVvJUQIHSMRAZMQ6F56BAhuEAE&url=https%3A%2F%2Ftwitter.com%2Fskilletmusic%3Fref_src%3Dtwsrc%255Egoogle%257Ctwcamp%255Eserp%257Ctwgr%255Eauthor&usg=AOvVaw189jIglZaAT7tDJsXki53m"
                },
                {
                    name:"Spotify",
                    link:"https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwi9y6PCh_L9AhVvJUQIHSMRAZMQFnoECGEQAQ&url=https%3A%2F%2Fopen.spotify.com%2Fartist%2F49bzE5vRBRIota4qeHtQM8&usg=AOvVaw0SyrF2Lnh16mNB9hHJ5bLu"
                }
            ]
        },
    ],
    showAside(){
        const data = this.nav.map((val, id) => {
            return(
                (val.link)
                    ? this.list(val)
                    : this.cards(val)
            )
        });
        document.querySelector("#nav").insertAdjacentHTML("beforeend", data.join(""))
    },
    cards(p1){
        return(`
        <div class="p-4 mb-3 bg-light rounded">
        <h4 class="fst-italic">${p1.title}</h4>
        <p class="mb-0">${p1.paragranph}</p>
        </div>`)
    },
    list(p1){
        return(
            `
            <div class="p-4">
            <h4 class="fst-italic">${p1.title}</h4>
            <ol class="list-unstyled mb-0">
              ${p1.link.map((val, id) => `<li><a href="${val.link}" target = "_blank">${val.name}</a></li>`).join("")}
            </ol>
          </div>`)

    }
};
