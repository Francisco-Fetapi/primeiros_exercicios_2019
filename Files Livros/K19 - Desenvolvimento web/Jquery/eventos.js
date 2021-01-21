 $(document).ready(function(){
    console.log('Pagina Carregada');
});
$(window).resize(function(){
    let largura = $(window).width();
    let altura = $(window).height();
    console.clear();
    console.log(`Largura: ${largura}px e Altura:${altura}px`);
});
$(window).scroll(function(){
    let x = $(window).scrollLeft();
    let y = $(window).scrollTop();
    console.clear();
    console.log(`Scroll:X: ${x} e Y:${y}`);
});

$('*').focus(function(){
    let nomeDaTag = this.tagName;
    let id = this.id;
    console.log(`${nomeDaTag}#${id}`);
});

$("input").select(function(){
    window.alert('selecionou');
});

$("input").change(function(){
    console.log(`Valor mudado para: ${$(this).val()}`);
});
$("input").keydown(function(event){
    console.log(event.which +"="+event.keyCode)
});
$('#div1').mousemove(function(){
    console.log(`X:${event.pageX} e Y:${event.pageY}`);
})
