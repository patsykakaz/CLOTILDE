
$(document).ready(function(){
    $('#curtain .left').css('right', 0).css('opacity',1);
    $('#curtain .right').css('left',0).css('opacity',1);

    padding = 20;
    if($(window).scrollTop() == 0 & $('#curtain').length){
        $("body").addClass('block');
        $('#curtain').height($(window).height()-2*padding);
    }
    setTimeout(function(){
        if($(window).scrollTop() > 0 || !$('#curtain').length){
            $("body").removeClass('block');
        }
    },10);
    $('#menu').height($(window).height()).width($(window).width());
    $('#menu .container').css('margin-top',($(window).height()-$('#menu .container').height())/2);
    $('#title').css('top',($('#curtain').height()-$('#title').height())/2).css('left', ($('#curtain').width()-$('#title').width())/2);

    $('#cta_menu .fa').css('margin-top',($('nav').height()-$('#cta_menu').outerHeight())/2);
    $('#cta_menu button').click(function(){
        $('#menu').toggleClass('show');
        $('body').toggleClass('block');
        $('#brand').toggleClass('on');
    });
});

$(window).load(function(){
    $('#toggle')
        .css('top',$('#curtain').outerHeight()*0.85)
        .css('left',($('#curtain').width()-$('#toggle').width())/2);

    $('#curtain').click(function(){
        $('#curtain').height(0);
        $('body').removeClass('block');
    });
    Projects();
    $('.carousel .item').height($(window)width()/2);
});
$(window).resize(function(){
    Projects();
    $('.carousel .item').height($(window)width()/2);
});


function Projects(){
    $('.projet').height($('.projet.square').width());

    $('.projet').each(function(){
        $(this).css('top',$(this).attr('rel')*$('.projet.square').outerHeight());
    });

    $('#projets').height((Math.ceil($('.projet.square').length/2)+$('.projet.banner').length) * $('.projet.square').width());
}