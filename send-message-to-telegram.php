<?php
// Включаем отображение ошибок
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Получаем данные из POST-запроса
$name = $_POST['name'] ?? '';
$phone = $_POST['phone'] ?? '';
$service = $_POST['service'] ?? '';
$situation = $_POST['situation'] ?? '';
$agreement = $_POST['agreement'] ?? '';

// Простой валидация
if (empty($name) || empty($phone) || empty($service) || empty($situation) || empty($agreement)) {
    echo 'Пожалуйста, заполните все поля.';
    exit;
}

// Формируем сообщение
$message = "Новое сообщение:\nИмя: $name\nТелефон: $phone\nУслуга: $service\nСитуация: $situation\n Соглашение на обработку персональных данных: $agreement";

// Telegram Bot API
$apiToken = "YOUR_TELEGRAM_BOT_API_TOKEN";
$chatId = "YOUR_CHAT_ID";
$url = "https://api.telegram.org/bot$apiToken/sendMessage";

// Данные для отправки
$data = [
    'chat_id' => $chatId,
    'text' => $message,
    'parse_mode' => 'HTML',
];

// Инициализируем cURL
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

// Выполняем запрос
$response = curl_exec($ch);
curl_close($ch);

// Проверяем ответ от API
if ($response) {
    echo 'Сообщение успешно отправлено.';
} else {
    echo 'Ошибка при отправке сообщения.';
}
?>
