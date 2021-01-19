const objetoUsuario = new Usuario()

const objetoTweets = new Tweets()

const objetoFollow = new Follow()

objetoUsuario.buscaUsuario()   
    .then(function (recebido){
        recebido.json()
            .then(function (dados){
                objetoUsuario.mostrarUsuario(dados)
            })
    })


objetoTweets.buscaTweets()
    .then(function (recebido){
        recebido.json()
            .then(function (dados){
                objetoTweets.mostrarTweets(dados.tweets)
           })
    })

objetoFollow.buscaFollow()
    .then(function (recebido){
        recebido.json()
            .then(function (dados){
                objetoFollow.mostrarFollow(dados.followers)
            })
    })