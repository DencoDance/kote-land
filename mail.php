<?php
/**
 * Created by PhpStorm.
 * User: DencoDance
 * Date: 14.05.2015
 * Time: 12:52
 */
function complete_mail() {
    // $_POST['title'] содержит данные из поля "Тема", trim() - убираем все лишние пробелы и переносы строк, htmlspecialchars() - преобразует специальные символы в HTML сущности, будем считать для того, чтобы простейшие попытки взломать наш сайт обломались, ну и  substr($_POST['title'], 0, 1000) - урезаем текст до 1000 символов. Для переменных $_POST['mess'], $_POST['name'], $_POST['tel'], $_POST['email'] все аналогично
//    $_POST['clientName'] =  substr(htmlspecialchars(trim($_POST['clientName'])), 0, 30);
//    $_POST['clientPhone'] =  substr(htmlspecialchars(trim($_POST['clientPhone'])), 0, 30);
//    var_dump($_POST);
    // если не заполнено поле "Имя" - показываем ошибку 0
    if (empty($_POST['clientName']))
        output_err(0);
    // если не заполнено поле "Сообщение" - показываем ошибку 2
    if(empty($_POST['clientPhone']))
        output_err(1);
    // создаем наше сообщение
    $mess = '<html>
                <title>Новая "жертва" лендинга bustogeorgia</title>'.
            '<body>
                     <br/>'.'Имя отправителя:'.$_POST['clientName'].
                    '<br/>'.'Контактный телефон:'.$_POST['clientPhone'].
            '</body>
             </html>';
    // $to - кому отправляем
    $to = 'kote.travel@gmail.com';
    // $from - от кого
    $headers  = "Content-type: text/html; charset=\"utf-8\" \r\n";
    $headers .= "From: bustogorgia landing page\r\n";
    mail($to, 'New contacts from landing', $mess
        , $headers
    );
    echo 'Спасибо! Ваше письмо отправлено.';
    header('Location: http://bustogeorgia.in.ua');
}

function output_err($num)
{
    $err[0] = 'ОШИБКА! Не введено имя.';
    $err[1] = 'ОШИБКА! Неверно введен мобильный.';
    echo '<p>'.$err[$num].'</p>';
//    show_form();
    header('Location: http://bustogeorgia.in.ua');
    exit();
}

if (!empty($_POST['clientName']) && !empty($_POST['clientPhone']) ){ complete_mail();var_dump('sended');}
else header('Location: http://bustogeorgia.in.ua');

?>