
$(document).ready(function(){
    padding = 20;
    if($(window).scrollTop() == 0 & $('#curtain').length){
        $("body").addClass('block');
        $('#curtain').height($(window).height()-2*padding);
        $('#toggle')
            .css('top',$('#curtain').outerHeight()*0.85)
            .css('left',($('#curtain').width()
                        -$('#toggle').width())/2);
    }
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
    $('#toggle').css('opacity',1);
    // setTimeout(bounce(), 4000);
    setTimeout(function(){
        console.log('bounce');
        $('.bounce').addClass('once');
        console.log('bounceD');
        return function() {
            $('.bounce').removeClass('once');
        }
    },1500);
    $('#curtain .left').css('right', 0).css('opacity',1);
    $('#curtain .right').css('left',0).css('opacity',1);
    if($(window).scrollTop() == 0 & $('#curtain').length){
        $("body").addClass('block');
        $('#curtain').height($(window).height()-2*padding);
    }else{
        $('#curtain').height(0);
        setTimeout(function(){
            $('#toggle').addClass('hide');
        },1000);
    }
    setTimeout(function(){
        if($(window).scrollTop() > 0 || !$('#curtain').length){
            $("body").removeClass('block');
        }
    },25);

    $('#curtain').click(function(){
        $('#curtain').height(0);
        $('body').removeClass('block');
        $('#toggle').addClass('hide');
    });
    Projects();
    $('.carousel .item').height($('.projet.square').width());
});
$(window).resize(function(){
    if($(window).scrollTop() == 0 & $('#curtain').length & $('#curtain').height() > 0){
        $('#curtain').height($(window).height()-2*padding);
        $('#toggle')
            .css('top',$('#curtain').outerHeight()*0.85)
            .css('left',($('#curtain').width()
                        -$('#toggle').width())/2);
        $('#title').css('top',($('#curtain').height()-$('#title').height())/2).css('left', ($('#curtain').width()-$('#title').width())/2);
    }
    Projects();
    $('.carousel .item').height($('.projet.square').width());
});


function Projects(){
    $('.projet').height($('.projet.square').width());

    $('.projet').each(function(){
        $(this).css('top',$(this).attr('rel')*$('.projet.square').outerHeight());
        more = $(this).children('.more');
        cross = more.children('a').children('img');
        cross.css('top', (more.height()-cross.height())/2);
    });

    $('#projets').height((Math.ceil($('.projet.square').length/2)+$('.projet.banner').length) * $('.projet.square').width());
}

function bounce(){
    console.log('bounce');
    $('.bounce').addClass('once');
    console.log('bounceD');
    return function() {
        $('.bounce').removeClass('once');
    }
}