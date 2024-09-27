document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.querySelector(".contact-form");
  const messageElement = document.querySelector(".contact-form__message");
  const preloader = document.querySelector(".preloader");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const successSendText = "Сообщение успешно отправлено";
    const errorSendText = "Сообщение не отправлено. Попробуйте еще раз!";
    const requiredFieldsText = "Заполните поля с именем и телефоном";

    const formData = new FormData(contactForm);

    preloader.classList.add("preloader_active");

    fetch("/telegramform/php/send-message-to-telegram.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((respond) => {
        preloader.classList.remove("preloader_active");

        if (respond === "SUCCESS") {
          messageElement.textContent = successSendText;
          messageElement.style.color = "var(--accent-color)";
        } else if (respond === "NOTVALID") {
          messageElement.textContent = requiredFieldsText;
          messageElement.style.color = "var(--accent-color-red)";
        } else {
          messageElement.textContent = errorSendText;
          messageElement.style.color = "var(--accent-color-red)";
        }

        setTimeout(
          () => {
            messageElement.textContent = "";
          },
          respond === "NOTVALID" ? 3000 : 4000,
        );
      })
      .catch((error) => {
        preloader.classList.remove("preloader_active");
        messageElement.textContent = `Ошибка: ${error}. ${errorSendText}`;
        messageElement.style.color = "var(--accent-color-red)";
        setTimeout(() => {
          messageElement.textContent = "";
        }, 4000);
      });
  });
});
