class Follow{

    buscaFollow(){
        return fetch("./follow.json")
    }

    constructor(){
        this.infofollow = document.getElementById("infofollow")
    }

    mostrarFollow(dados){

        let infoFollow = ''

        let aleatorio = 12

        dados.map(function (resposta){

            aleatorio++

            infoFollow += `
                <li class="tweet-card">
                  <div class="tweet-content">
                    <img class="tweet-card-avatar" src="https://randomuser.me/api/portraits/men/${aleatorio}.jpg" alt="">
                    <div class="tweet-header">
                      <span class="fullname">
                        <strong>${resposta.nome}</strong>
                      </span>
                      <span class="username">${resposta.usuario}</span>
                    </div>

                    <button class="btn btn-follow">Follow</button>
                  </div>
                </li>         
                                                       
            `
        });
        this.infofollow.innerHTML = infoFollow
    }
}