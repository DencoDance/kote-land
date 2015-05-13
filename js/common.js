$(function()
{
    var index = 0;

    $('#arrow_right').click(function()
    {
        if (index < $('#sliderBox li').length - 1 && index >=0 )
        {
            $('#sliderBox li').eq(index).animate({'width':'0px'},600).animate({'opacity':'0','width':'700px'},1);

            setTimeout(function(){
                $('#sliderBox li').eq(++index).animate({'opacity':'1'},400);
            },400);
        }
        return false;
    });

    $('#arrow_left').click(function()
    {
        if (index >= 1)
        {
            $('#sliderBox li').eq(index).animate({'width':'-0px'},600).animate({'opacity':'0','width':'700px'},1);

            setTimeout(function(){
                $('#sliderBox li').eq(--index).animate({'opacity':'1'},400);
            },400);
        }
        return false;
    });
});