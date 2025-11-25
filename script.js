document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    if (!form) return;

    const phoneInput = document.getElementById("phone");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const phoneValue = phoneInput.value.trim();

        if (phoneValue.length < 10) {
            alert("Будь ласка, введіть номер телефону.");
            phoneInput.style.borderColor = "red";
            return;
        }

        phoneInput.style.borderColor = "";
        alert("Заявку відправлено!");
        form.reset();
    });
});
