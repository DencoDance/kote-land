<?php
/**
 * Created by PhpStorm.
 * User: DencoDance
 * Date: 14.05.2015
 * Time: 12:52
 */
function complete_mail()
{
    // если не заполнено поле "Имя" - показываем ошибку 0
    if (empty($_POST['clientName']))
        output_err(0);
    // если не заполнено поле "Сообщение" - показываем ошибку 1
    if (empty($_POST['clientPhone']))
        output_err(1);
    // создаем наше сообщение
    $mess = '<html>
                <title>Новая "жертва" лендинга bustogeorgia</title>' .
               '<body>
                     <br/>' . 'Имя отправителя:' . $_POST['clientName'] .
                    '<br/>' . 'Контактный телефон:' . $_POST['clientPhone'] .
                    '<br/>' . 'Email:' . $_POST['clientMail'] .
               '</body>
             </html>';
//  $to - кому отправляем
    $to = 'kote.travel@gmail.com';
//  $to = 'di.nekto@gmail.com';
//  $from - от кого
    $headers = "Content-type: text/html; charset=\"utf-8\" \r\n";
    $headers .= "From: bustogeorgia landing page\r\n";
    mail($to, 'New contacts from landing', $mess
        , $headers
    );
}

function output_err($num)
{
    $err[0] = 'Не введено имя.';
    $err[1] = 'Неверно введен мобильный.';
    echo $err[$num];
    exit();
}

complete_mail();

?>