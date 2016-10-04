
$(document).ready(function(){
    $('#curtain .left').css('right', 0).css('opacity',1);
    $('#curtain .right').css('left',0).css('opacity',1);

    padding = 20;
    $('#curtain').height($(window).height()-2*padding);
    $('#title').css('top',($('#curtain').height()-$('#title').height())/2).css('left', ($('#curtain').width()-$('#title').width())/2);

    $('#menu .fa').css('margin-top',($('nav').height()-$('#menu').outerHeight())/2);
});

$(window).load(function(){
    $('#toggle')
        .css('top',$('#curtain').outerHeight()*0.75)
        .css('left',($('#curtain').width()-$('#toggle').width())/2);

    $('#toggle').click(function(){
        $('#curtain').height(0);
        $('body').css('overflow','auto');
    });

    $('.projet').height($('.projet.square').width());

    $('.projet').each(function(){
        console.log($(this).attr('rel'));
        $(this).css('top',$(this).attr('rel')*$('.projet.square').outerHeight());
    });

    $('#projets').height((Math.ceil($('.projet.square').length/2)+$('.projet.banner').length) * $('.projet.square').width());
});



function centerProjects(){
    $('.projet').each(function(){
        $('this').css('top',$(this).height() - $(this).children('img').height()).css('left',$(this).width() - $(this).children('img').width());
    });
}