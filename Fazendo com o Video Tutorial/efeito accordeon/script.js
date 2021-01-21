window.onload = function(){

    const item = document.querySelectorAll('p');

    item.forEach((el)=>{
        el.addEventListener('click',()=>{
            const conteudoDoItem = el.nextElementSibling;
            conteudoDoItem.classList.toggle('ativo');
        })
    })

}