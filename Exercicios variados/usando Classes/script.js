// function calcAltura(){ document.querySelectorAll('section').forEach(elemento =>{
//     elemento.style.height = window.innerHeight+'px';
// });
// }
// document.body.onresize = calcAltura;
// document.body.onload = calcAltura;


class scrollSuave{
    constructor(links){
        this.elementosLink =document.querySelectorAll(links);
        this.adicionarEventoNosLinks();
    }

    linkClicado(event){
        //preventDefault zera qualquer evento definido no elemento
        event.preventDefault();
        //currentTarget retorna o elemento que chamou o evento
        const hrefDoLink = event.currentTarget.getAttribute("href");
        const sessaoDoLink = document.querySelector(hrefDoLink);
        //offsetTop - atributo que identifica a distancia do elemento do topo da pagina
        console.log(sessaoDoLink.offsetTop);
        window.scrollTo({
            top:sessaoDoLink.offsetTop,
            behavior:'smooth'
        })
    }
    adicionarEventoNosLinks(){
       this.elementosLink.forEach(link=>{
           link.addEventListener("click",this.linkClicado);
       })
    }
}

class colorirLinks extends scrollSuave{
    constructor(links,secoes){
        super(links);

        this.elementosSecoes = document.querySelectorAll(secoes);
        this.ativarSessao = this.ativarSessao.bind(this);
        this.sessaoAtiva();
        this.elementosLink[0].parentElement.classList.add("ativa");
    }
    ativarSessao(){
        this.elementosSecoes.forEach((sessao,indice)=>{
            if(window.pageYOffset > sessao.offsetTop + window.innerHeight * 0.7){
                this.elementosLink[indice+1].parentElement.classList.add("ativa");
            }
            else{
                this.elementosLink[indice+1].parentElement.classList.remove("ativa");
            }
        })
    }

    sessaoAtiva(){
        window.addEventListener("scroll",this.ativarSessao);
    }
}

const scroll = new colorirLinks("a[href^='#']","div");
