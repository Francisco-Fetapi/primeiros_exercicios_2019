const elementos = document.querySelectorAll("[data-anima]");
const classActive = 'ativo';

function animaScroll(){
    const topoPaginaNaJanela = window.pageYOffset+window.innerHeight-100;

    elementos.forEach((elemento)=>{
        if(topoPaginaNaJanela >= elemento.offsetTop){
            elemento.classList.add(classActive);
        }else{
            elemento.classList.remove(classActive);
        }
    })
}

if(elementos){
    addEventListener('scroll',animaScroll);
}