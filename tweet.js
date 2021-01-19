class Tweets{

    buscaTweets(){
        return fetch("./tweets.json")
    }

    constructor(){
        this.infoTweets = document.getElementById("infotweet")
    }

    mostrarTweets(dados){

        let infoTweet = ''

        let aleatorio = 14

        dados.map(function (tweet){

            aleatorio++

            infoTweet += `
                <li class="tweet-card">
                <div class="tweet-content">
                    <div class="tweet-header">
                    <span class="fullname">
                        <strong>${tweet.nome}</strong>
                    </span>
                    <span class="username">${tweet.usuario}</span>
                    <span class="tweet-time">- ${tweet.data}</span>
                    </div>
                    <a>
                    <img class="tweet-card-avatar" src="https://randomuser.me/api/portraits/men/${aleatorio}.jpg" alt="">
                    </a>
                    <div class="tweet-text">
                    <p class="" lang="es" data-aria-label-part="0">${tweet.mensagem}</p>
                    </div>
                    <div class="tweet-footer">
                    <a class="tweet-footer-btn">
                        <i class="octicon octicon-comment" aria-hidden="true"></i><span> ${tweet.comentarios}</span>
                    </a>
                    <a class="tweet-footer-btn">
                        <i class="octicon octicon-sync" aria-hidden="true"></i><span> ${tweet.compartilhamentos}</span>
                    </a>
                    <a class="tweet-footer-btn">
                        <i class="octicon octicon-heart" aria-hidden="true"></i><span> ${tweet.likes}</span>
                    </a>
                    </div>
                </div>
                </li>            
            
            `
            
        });
        
        this.infoTweets.innerHTML = infoTweet
    }

}