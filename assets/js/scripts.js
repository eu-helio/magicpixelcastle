const ataque = document.getElementById('ataqueamigo');
const inimigomorto = document.querySelector('.inimigomorto');
const guerreiro1 = document.getElementById('guerreiro1');
const guerreiro = document.querySelector('.guerreiro');
const guerreiroparado = document.querySelector('.guerreiroparado');
const inimigo = document.querySelector('.inimigo');
const pontos = document.getElementById('pontos');
const gameover = document.querySelector('.gameover');
const nuvens = document.querySelector('.nuvens');
const restart = document.querySelector('.restart');
const start = document.querySelector('.start');
let score = 0

let controle = false;
let controlemorte = false;
guerreiroparado.style.display = 'block';

function reset(){
    
    window.location.reload();
    }







function atacar(){
            
    inimigo.style.display = 'none';
    inimigomorto.style.display ='block'
    ;
    setTimeout(() => {
        inimigomorto.style.display ='none'
            
    }, 1200);

        
    const valorAleatorio = Math.floor(Math.random() * (3500 - 300 + 1)) + 300;

    setTimeout(() => {
        inimigo.style.display = 'block';
            
    }, valorAleatorio);


        
        score = score + 1

        pontos.innerHTML =  `SCORE: ${score}`



}

function play(){
    console.log("PLAY!!!")
    guerreiroparado.style.display = 'none';
    pontos.style.display = 'block';
    inimigo.style.display = 'block';
    guerreiro.style.display = 'block';
    start.style.display = 'none'
    const loop = setInterval(() => {
        const posicaodoinimigo = inimigo.offsetLeft;
    
        
        if (posicaodoinimigo < 15) {
            if (posicaodoinimigo == 9 && controle == false)
                fimdejogo()
        
        
        
        if (posicaodoinimigo < 12 )
                if (posicaodoinimigo > 9  && controle == true)
                atacar()
    
        
            
                    
        
    
        
                
    
        }
    }, 10);
        function ataqueinimigo() {
        controle = true;
        guerreiro.style.display = 'none';
        ataque.style.display = 'block';
        
        setTimeout(() => {
            guerreiro.style.display = 'block';
            ataque.style.display = 'none';
            
        }, 200);

        

        return controle;
        }



        function resetcontrole(){
            setTimeout(() => {
            controle = false;
                
            }, 1000);

            



        }


        function fimdejogo(){
            inimigo.style.display = 'none'
            gameover.style.display = 'block'
            nuvens.style.animation = 'none'
            nuvens.style.left = '180px'
            guerreiro.style.display = 'none'
            restart.style.display = 'block'
            start.style.display = 'none'
            clearInterval(loop);
        }
        
        

        

            document.addEventListener('keydown', ataqueinimigo);
            document.addEventListener('keyup', resetcontrole);

        

        
        }

/*
    function ataqueinimigo() {
        controle = true;
        guerreiro.style.display = 'none';
        ataque.style.display = 'block';
        
        setTimeout(() => {
            guerreiro.style.display = 'block';
            ataque.style.display = 'none';
            
        }, 200);

        

        return controle;
    }

    function resetcontrole(){
        setTimeout(() => {
        controle = false;
            
        }, 1000);

        



    }

    // Não chame a função diretamente aqui
    document.addEventListener('keydown', ataqueinimigo);
    document.addEventListener('keyup', resetcontrole);



    function atacar(){
        
                inimigo.style.display = 'none';
                inimigomorto.style.display ='block'
                ;
                setTimeout(() => {
                    inimigomorto.style.display ='none'
                    
                }, 1200);

                
                const valorAleatorio = Math.floor(Math.random() * (3500 - 1200 + 1)) + 1200;

                setTimeout(() => {
                    inimigo.style.display = 'block';
                    
                }, valorAleatorio);


                
                    score = score + 1

                    pontos.innerHTML =  `SCORE: ${score}`



    }


    function fimdejogo(){
        inimigo.style.display = 'none';
        gameover.style.display = 'block'
        nuvens.style.animation = 'none'
        nuvens.style.left = '180px'
        clearInterval(loop);
        restart.style.display = 'block'
    }


     


    

const loop = setInterval(() => {
    const posicaodoinimigo = inimigo.offsetLeft;

    if (posicaodoinimigo < 160 )
            if (posicaodoinimigo > 100  && controle == true)
                atacar()

    
        if (posicaodoinimigo < 120) {
            if (posicaodoinimigo == 100 && controle == false)
                fimdejogo()
                
    

    
            

    }
}, 10);


    */




 


