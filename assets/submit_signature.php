<?php
// Включаем отображение ошибок (для отладки, потом убрать)
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Проверяем, что форма отправлена методом POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    // Проверяем обязательные поля
    if (empty($_POST['full_name']) || empty($_POST['agree'])) {
        die('Ошибка: имя и согласие обязательны.');
    }

    // Сохраняем данные
    $fullName = strip_tags(trim($_POST['full_name']));
    $email = filter_var(trim($_POST['email']), FILTER_VALIDATE_EMAIL) ?: 'Не указан';
    $comment = strip_tags(trim($_POST['comment']));
    $date = date('Y-m-d H:i:s');

    // Формируем строку для записи в файл
    $line = "$date | $fullName | $email | $comment" . PHP_EOL;

    // Путь к файлу для хранения подписей (установи права на запись)
    $file = 'signatures.txt';

    // Пишем строку в файл, добавляя в конец
    file_put_contents($file, $line, FILE_APPEND | LOCK_EX);

    // Можно отправить письмо администратору (опционально)
    /*
    $to = 'youremail@example.com';
    $subject = 'Новая подпись на сайте';
    $message = "Подписал: $fullName\nEmail: $email\nКомментарий: $comment\nДата: $date";
    $headers = "From: no-reply@yourdomain.com";
    mail($to, $subject, $message, $headers);
    */

    // Перенаправляем на страницу благодарности
    header('Location: thank-you.html');
    exit;
} else {
    // Если доступ не через POST — редирект или ошибка
    header('Location: index.html');
    exit;
}
