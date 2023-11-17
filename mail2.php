<?php
error_reporting(E_ALL); # выводим ошибки
require('phpmailer/class.phpmailer.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$email = $_POST['user_email'];
// $answer = $_POST['radio'];
$answer = $_POST['answer'];
$question1 = $_POST['question1'];
$question2 = $_POST['question2'];
$question3 = $_POST['question3'];
$question4 = $_POST['question4'];
$question5 = $_POST['question5'];
$question4 = $_POST['question6'];

$mail->SMTPDebug = 0;  // Enable verbose debug output
// $mail->SMTPDebug = SMTP::DEBUG_SERVER;
$mail->Debugoutput = 'html';

$mail->isSMTP();                                      // Set mailer to use SMTP
// $mail->Host = 'smtp.mail.ru';  // Specify main and backup SMTP servers
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPSecure = 'ssl'; // Enable TLS encryption, `ssl` also accepted
// $mail->SMTPSecure = 'tls'; # шифрование
$mail->Port = 465; //587 TCP port to connect to
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'aquarel.novik@gmail.com'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'qoth rxar mxjq wdvy'; // Ваш пароль от почты с которой будут отправляться письма
$mail->setFrom('aquarel.novik@gmail.com'); // от кого будет уходить письмо?
$mail->addReplyTo('aquarel.novik@gmail.com', 'Valery Test'); # адрес для ответа
$mail->addAddress('aquarel.novik@gmail.com');     // Кому будет уходить письмо
   // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
// $mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
// $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->AddAttachment( $_FILES["attachment"]["tmp_name"], $_FILES["attachment"]["name"] );

$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка с тестового сайта-лендинга';
$mail->Body    = '' .$name . ' оставил заявку, его телефон ' .$phone. '<br>Почта этого пользователя: ' .$email.' ОТВЕТЫ: '. $answer .'.';
$mail->AltBody = '';


if(!$mail->send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
} else {
    header('location: ./pages/thank-you.html');
}
?>