const form = document.querySelector("form");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const phoneInput = document.querySelector("#phone");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    clearErrors();

    let isValid = true;

    // Nombre
    if (nameInput.value.trim().length < 3) {
        showError(nameInput, "El nombre debe tener al menos 3 caracteres.");
        isValid = false;
    }

    // Correo
    if (!validateEmail(emailInput.value.trim())) {
        showError(emailInput, "Ingresa un correo válido.");
        isValid = false;
    }

    if(!validatePhone(phoneInput.value.trim())){
        showError(phoneInput, "Ingresa un teléfono válido.");
        isValid = false;
    }

    // Mensaje
    if (messageInput.value.trim().length < 5) {
        showError(messageInput, "El mensaje debe tener al menos 5 caracteres.");
        isValid = false;
    }
});

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validatePhone(phone){
    const regex =  /^(?:\+504\s?|504\s?)?[23789]\d{3}[- ]?\d{4}$/;
    return regex.test(phone);
}

function showError(input, message) {
    input.classList.add("border-red-500");

    const error = document.createElement("p");
    error.className = "text-red-500 text-sm mt-1";
    error.textContent = message;

    input.parentElement.appendChild(error);
}

function clearErrors() {
    document.querySelectorAll(".text-red-500").forEach((el) => el.remove());

    document.querySelectorAll("input, textarea").forEach((input) => {
        input.classList.remove("border-red-500");
    });
}
