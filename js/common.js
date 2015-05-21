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

$(function ()
{
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

$(function()
{
    $('.form_phone').focus(function()
    {
        if(!$(this).val()){
            $(this).val('+38 (0');
        }
    });

    $('.form_phone').mask('+38 (000) 000 - 00 - 00');
});

$(function()
{
    $('.app_btn').click(function()
    {
        var _this = $(this);
        var name  = _this.parent().find('input[name="clientName"]').val();
        var phone = _this.parent().find('input[name="clientPhone"]').val();

        $.ajax({
            type: "POST",
            url: 'mail.php',
            data:{
                'clientName' : name,
                'clientPhone': phone
            },
            success: function(data)
            {
                if (data)
                {
                    swal({
                        title: "Ошибка!",
                        text: data,
                        type: "error",
                        confirmButtonText: "Попробовать еще раз!"
                    });
                }
                else
                {
                    swal({
                        title: "Успех!",
                        text: "Ваши данные успешно отправлены. Вскоре мы с Вами свяжемся!",
                        type: "success",
                        confirmButtonText: "Вперед, к КОТЭшествиям!"
                    });
                (window.Image ? (new Image()) : document.createElement('img')).src = location.protocol + '//vk.com/rtrg?r=AkUnpO2rnQU8OodWOQK*okqJ38y3jcwT**JuZudGuoDbOzCJJVLaRJVqhHsRmIrFKZzEna395cENFMnw5YCkYeLpny9YvIOl4TwW3iJRKqwz5i*jtfQB/4Mis63vfr*rKsyzxILTiH2qHpcJzlrDZ6knxqB3gsMD9Yxf76GqBus-';
                yaCounter30238469.reachGoal('ORDER');

                    ga('send','event','cart','zakaz');
                    $('.app_input').val('');
                }
            }
        });
    });
});