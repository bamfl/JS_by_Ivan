<?php
	//Получаем данные из html формы

	$name = $_POST['name'];
	$tel = $_POST['tel'];
	$email = $_POST['email'];
	$message = $_POST['message'];


	// Обработка данных

	$name = htmlspecialchars($name);
	$tel = htmlspecialchars($tel);
	$email = htmlspecialchars($email);
	$message = htmlspecialchars($message);
	$message = htmlspecialchars($message);

	$name = urldecode($name);
	$tel = urldecode($tel);
	$email = urldecode($email);
	$message = urldecode($message);

	$name = trim($name);
	$tel = trim($tel);
	$email = trim($email);
	$message = trim($message);


	//Отправка на почту

	if (mail("petukhovrabota@mail.ru",
				"Новое письмо с сайта Moderno",
				"Имя: ".$name."\n".
				"Телефон: ".$name."\n".
				"E-mail: ".$email."\n".
				"Сообщение: ".$message,
				"From: no-reply@mydomain.ru \r\n")

	) {
		echo "<script>alert(\"Письмо успешно отправлено!\");</script>"; 
		echo "<script>document.location.href='http://fls.guru/www/bm/adygea/';</script>";
	}

	else {
		echo "<script>alert(\"Есть ошибки! Проверьте данные...\");</script>";
		echo "<script>document.location.href='http://fls.guru/www/bm/adygea/';</script>";
	}
?>