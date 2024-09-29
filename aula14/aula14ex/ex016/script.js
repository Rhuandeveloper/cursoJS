function contar(){
        var ini = document.getElementById('txti')
        var fim = document.getElementById('txtf')
        var passo = document.getElementById('txtp')
        let res = document.getElementById('res')

        if (ini.value.length == 0 || fim.value.length ==0 || passo.value.length == 0){
           window.alert('ERRO  falta dados!')
        } else{
            res.innerHTML = 'contando:'
            let i = Number(ini.value)
            let f = Number(fim.value)
            let p = Number(passo.value)
        if(i < f){
            // contagem crescente
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} ,`
            }
        } else {
           // contragem regressiva
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} ,`
            }
        }
        }
    }