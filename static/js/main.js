
$(document).ready(function(){
    $('#curtain .left').css('right', 0).css('opacity',1);
    $('#curtain .right').css('left',0).css('opacity',1);

    padding = 20;
    $('#curtain').height($(window).height()-2*padding);
    $('#title').css('top',($('#curtain').height()-$('#title').height())/2).css('left', ($('#curtain').width()-$('#title').width())/2);

    $('#menu .fa').css('margin-top',($('nav').height()-$('#menu').outerHeight())/2);
    setTimeout(function(){
        $(window).scrollTop(0);
    },50);
});

$(window).load(function(){
    $('#toggle')
        .css('top',$('#curtain').outerHeight()*0.75)
        .css('left',($('#curtain').width()-$('#toggle').width())/2);

    $('#curtain').click(function(){
        $('#curtain').height(0);
        $('body').css('overflow','auto');
    });


    Projects();
});
$(window).resize(function(){
    Projects();
});


function Projects(){
    $('.projet').height($('.projet.square').width());

    $('.projet').each(function(){
        $(this).css('top',$(this).attr('rel')*$('.projet.square').outerHeight());
    });

    $('#projets').height((Math.ceil($('.projet.square').length/2)+$('.projet.banner').length) * $('.projet.square').width());
}