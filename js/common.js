$(function()
{
  $('.question_Block').click(function()
  {
     $('.question_Block').not(this).removeClass('opened');
     $(this).toggleClass('opened').next('.answer_').slideToggle(400);
     $('.answer_').not($(this).next('.answer_')).slideUp(400);
     $('.arrow').not($(this).find('.arrow')).prop('src','img/arrow-bottom.png');

     if($(this).hasClass('opened')){
        $(this).find('.arrow').prop('src','img/arrow-top.png');
     }
     else{
        $(this).find('.arrow').prop('src','img/arrow-bottom.png');
     }
  });
});

$(function () {
    $('a[href*=#]').bind("click", function (e)
    {
        var anchor = $(this);
        
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 200
        }, 1000);

        window.setTimeout(function () {
            document.getElementById('name-input').focus();
        }, 0);

        e.preventDefault();
    });
    return false;
});