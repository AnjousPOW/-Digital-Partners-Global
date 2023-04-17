// Проверка валидности формы и Обработчик события отправки формы с помощью AJAX
(function() {
    'use strict';
    // Дождемся загрузки страницы и вызовем обработчик события
    window.addEventListener('load', function() {
         // Получим ссылку на форму по ID
        $('#myForm').submit(function(event) {
            event.preventDefault();
            // Проверим валидность формы
            if (this.checkValidity() === false) {
            // Остановим дальнейшую обработку, если данные неверны
            event.stopPropagation();
            } else {
            // Отправим данные формы на сервер с помощью AJAX
            $.ajax({
                url: 'submit.php', // Указываем адрес обработчика
                type: 'post',
                data: $(this).serialize(),
            });
            }
            $(this).addClass('was-validated');
        });
        }, false);
})(); 


// Без нажатия галочки о согласие с условиями регистрация не происходит
(function(){
    const agreeCheckbox = document.getElementById('agree');
    const sendButton = document.getElementById('send-btn');

    agreeCheckbox.addEventListener('change', function() {
        if (this.checked) {
        sendButton.disabled = false;
        } else {
        sendButton.disabled = true;
        }
    });
});
