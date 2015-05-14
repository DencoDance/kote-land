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