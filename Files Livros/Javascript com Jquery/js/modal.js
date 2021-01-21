jQuery(function(){
    
    (function($){

        function showModal(el){
            el.
            css('display','block').
            find('.modal-content').
            animate({top:'20%'},500);
        }
        function hideModal(el){
            el.
            find('.modal-content').
            animate({top:'-100%'},500,function(){
                $(el).css('display','none');
            });
        }

        $.fn.modal = function(op){
            this.each(function(ind,el){
                elem = $(el);
                if($(el).hasClass('modal')){
                    if(op == 'show'){
                        showModal(elem);
                    }else if(op == 'hide'){
                       hideModal(elem);
                    }else if('toggle'){
                        if(elem.css('display') == 'block'){//esta ativo
                            hideModal(elem);
                        }else{
                            showModal(elem);
                        }
                    }
                    //fechar pelo X
                    elem.find('.close').click(function(){
                        hideModal(elem);
                    });
                }
            });
            return this;
        }
        $('[data-toggle=modal]').click(function(){
            let idTarget = $(this).attr('data-target');
            $(idTarget).modal('show');
        });
        $('.modal').find('.modal-dialog').click(function(e){
            
            if(e.delegateTarget == e.originalEvent.target){
                hideModal($(this).parent());
            }
            console.log(e)
        });

    }(jQuery))

});