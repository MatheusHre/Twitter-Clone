class Usuario{
    
    buscaUsuario(){
        
        return fetch("./usuario.json")
    }

    constructor(){
        this.infousuario = document.getElementById("infouser")
        this.infotf = document.getElementById("infosupp")
    }

    
    mostrarUsuario(dados) {
        
        let infoUser = ''
        let infosup = ''

        localStorage.setItem("nome-usuario", dados[0].nome)
        let nomeUsuario = localStorage.getItem("nome-usuario", dados[0].nome)

        infoUser += `
            <h3 class="profile-fullname"><a>${nomeUsuario}<a></h3>
            <h2 class="profile-element"><a>@${dados[0].usuario}</a></h2>
            <a class="profile-element profile-website" hrerf=""><i class="octicon octicon-link"></i>&nbsp;josesilva.com</a>
            <a class="profile-element profile-website" hrerf=""><i class="octicon octicon-location"></i>&nbsp;${dados[0].local}</a>
            <h2 class="profile-element"><i class="octicon octicon-calendar"></i>${dados[0].cadastro}</h2>
            <button class="btn btn-search-bar tweet-to-btn">Tweet to ${dados[0].nome}</button>
        
        `
        this.infousuario.innerHTML = infoUser

        infosup += `
            
              <li class="profile-stats-item-active">
                <a>
                  <span class="profile-stats-item profile-stats-item-label">Tweets</span>
                  <span class="profile-stats-item profile-stats-item-number">${dados[0].quantidade_tweets}</span>
                </a>
              </li>
              <li>
                <a>
                  <span class="profile-stats-item profile-stats-item-label">Following</span>
                  <span class="profile-stats-item profile-stats-item-number">${dados[0].seguindo}</span>
                </a>
              </li>
              <li>
                <a>
                  <span class="profile-stats-item profile-stats-item-label">Followers</span>
                  <span class="profile-stats-item profile-stats-item-number">${dados[0].seguidores}</span>
                </a>
              </li>
              <li>
                <a>
                  <span class="profile-stats-item profile-stats-item-label">Likes</span>
                  <span class="profile-stats-item profile-stats-item-number">${dados[0].likes}</span>
                </a>
              </li>        
                       
        `
        this.infotf.innerHTML = infosup
    }
    
}