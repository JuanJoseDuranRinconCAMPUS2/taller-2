export default {
    title: {
            name : "Skillet",
            href : "https://es.wikipedia.org/wiki/Skillet_(%C3%A1lbum)"
    },
    ALBUMS : [
        {
            name : "Skillet",
            href : "https://es.wikipedia.org/wiki/Skillet_(%C3%A1lbum)"
        },
        {
            name : "Hey You, I Love Your Soul",
            href : "https://es.wikipedia.org/wiki/Hey_You,_I_Love_Your_Soul"
        },
        {
            name : "Invincible",
            href : "https://es.wikipedia.org/wiki/Invincible_(%C3%A1lbum_de_Skillet)"
        },
        {
            name : "Alien Youth",
            href : "https://es.wikipedia.org/wiki/Alien_Youth"
        },
        {
            name : "Collide",
            href : "https://es.wikipedia.org/wiki/Collide_(%C3%A1lbum_de_Skillet)"
        },
        {
            name : "Comatose",
            href : "https://es.wikipedia.org/wiki/Comatose_(%C3%A1lbum_de_Skillet)"
        },
        {
            name : "Awake",
            href : "https://es.wikipedia.org/wiki/Awake_(%C3%A1lbum_de_Skillet)"
        },
        {
            name : "Rise",
            href : "https://es.wikipedia.org/wiki/Rise_(%C3%A1lbum_de_Skillet)"
        },
        {
            name : "Unleashed",
            href : "https://es.wikipedia.org/wiki/Unleashed_(%C3%A1lbum_de_Skillet)"
        },
        {
            name : "Victorious",
            href : "https://es.wikipedia.org/wiki/Victorious_(%C3%A1lbum_de_Skillet)"
        },
        {
            name : "Dominion",
            href : "https://es.wikipedia.org/w/index.php?title=Dominion_(%C3%A1lbum_de_Skillet)&action=edit&redlink=1#"
        }
    ],
    listTitle(){
        document.querySelector("#title").insertAdjacentHTML("beforeend", 
        `
        <a class="blog-header-logo text-dark" href="${this.title.href}" >${this.title.name}</a>
        
        `
        )
    },
    listAlbums(){
        let plantilla = "";
        this.ALBUMS.forEach((val, id) => {
            plantilla += `<a class="p-2 link-secondary" href="${val.href}">${val.name}</a>`;
        });
        document.querySelector("#Albums").insertAdjacentHTML("beforeend", plantilla);
    }
    }

