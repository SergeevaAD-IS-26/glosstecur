<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = strip_tags(trim($_POST["name"]));
    $email = strip_tags(trim($_POST["email"]));
    $message = strip_tags(trim($_POST["message"]));
    

    $to = "your-email@example.com"; 
    $subject = "Новая заявка с сайта GLOSSTECUR";


    $email_content = "
    <html>
    <head>
      <title>Заявка GLOSSTECUR</title>
    </head>
    <body style='background-color: #f4f4f4; font-family: sans-serif; padding: 20px;'>
      <div style='max-width: 600px; margin: 0 auto; background-color: #fff; border-radius: 20px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.1);'>
        <div style='background-color: #184C28; padding: 30px; text-align: center;'>
          <h1 style='color: #ffffff; margin: 0; font-size: 24px;'>GLOSSTECUR ✦</h1>
          <p style='color: #BEAE9A; margin-top: 10px;'>Новая заявка на индивидуальный подбор</p>
        </div>
        <div style='padding: 30px; color: #333;'>
          <p><strong>Имя клиента:</strong> {$name}</p>
          <p><strong>Email:</strong> {$email}</p>
          <hr style='border: none; border-top: 1px solid #eee; margin: 20px 0;'>
          <p><strong>Сообщение:</strong></p>
          <p style='background-color: #f9f9f9; padding: 15px; border-radius: 10px;'>{$message}</p>
        </div>
        <div style='background-color: #BEAE9A; padding: 15px; text-align: center; font-size: 12px; color: #fff;'>
          © 2024 GLOSSTECUR. Система восстановления ногтей.
        </div>
      </div>
    </body>
    </html>
    ";


    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: info@glosstecur.ru" . "\r\n"; 

    if (mail($to, $subject, $email_content, $headers)) {
        echo "success";
    } else {
        echo "error";
    }
} else {
    echo "Запрещено";
}
?>