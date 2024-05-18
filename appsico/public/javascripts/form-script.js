

/* Função para formatar a primeira letra de cada palavra em maiúscul */
function formatName(input) {
    var texto = input.value;
    var word = texto.split(' ');

    for (var i = 0; i < word.length; i++) {
        word[i] = word[i].charAt(0).toUpperCase() + word[i].substring(1);
    }

    input.value = word.join(' ');
}


/* Formata campo para inserção de CRM */
document.addEventListener('DOMContentLoaded', function () {
    const crpInput = document.getElementById('crp');
    const errorText = document.createElement('p');

    /* Mensagem de erro */
    errorText.className = 'text-red-500 text-sm mt-1 hidden';
    errorText.textContent = 'O CRP deve ter entre 4 e 6 dígitos.';
    crpInput.parentNode.appendChild(errorText);

    crpInput.addEventListener('input', function () {
        const inputValue = this.value.replace(/\D/g, ''); // Remove caracteres não numéricos
        this.value = inputValue; // Atualiza o valor do input

        if (inputValue.length < 4 || inputValue.length > 6) {
            errorText.classList.remove('hidden');
        } else {
            errorText.classList.add('hidden');
        }
    });
});

/* Formata  Data de Nascimento */
document.addEventListener('DOMContentLoaded', function () {
    const birthInput = document.getElementById('birthDate');
    const errorTextNasc = document.createElement('p');

    birthInput.addEventListener('input', function () {
        const nascValue = birthInput.value;
        const birthDate = new Date(nascValue);
        const currentDate = new Date();

        const ageDifference = currentDate.getFullYear() - birthDate.getFullYear();

        // Verifica se a idade é menor que 18 anos
        if (ageDifference < 18 || (ageDifference === 18 && currentDate.getMonth() < birthDate.getMonth()) || (ageDifference === 18 && currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())) {
            errorTextNasc.textContent = 'Você deve ter 18 anos ou mais para continuar.';
            errorTextNasc.classList.remove('hidden');
        } else {
            errorTextNasc.classList.add('hidden');
        }
    });

    /* Mensagem de erro */
    errorTextNasc.className = 'text-red-500 text-sm mt-1 hidden';
    errorTextNasc.textContent = 'Você deve ter 18 anos ou mais para continuar.';
    birthInput.parentNode.appendChild(errorTextNasc);
});

/* Formatar E-mail */
function handleEmailInput() {
    const emailInput = document.getElementById('emailInput');
    const inputValue = emailInput.value.trim(); // Remove espaços em branco no início e no final

    const errorTextEmail = document.getElementById('emailError');

    // Verifica se o email é válido
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputValue);

    if (!isValidEmail) {
        if (!errorTextEmail) {
            const errorTextEmail = document.createElement('p');
            errorTextEmail.id = 'emailError';
            errorTextEmail.textContent = 'Por favor, insira um email válido.';
            errorTextEmail.classList.add('text-red-500', 'text-sm', 'mt-1');
            emailInput.parentNode.appendChild(errorTextEmail);
        } else {
            errorTextEmail.textContent = 'Por favor, insira um email válido.';
        }
    } else {
        if (errorTextEmail) {
            errorTextEmail.remove();
        }
    }
}

/* Formatar Contato */
function handleContactInput() {
    const contactInput = document.getElementById('contactInput');
    let inputValue = contactInput.value.trim(); // Remove espaços em branco no início e no final

    // Remove todos os caracteres não numéricos do valor de entrada
    const numericValue = inputValue.replace(/\D/g, '');

    // Formata o número conforme o padrão de telefone brasileiro
    let formattedValue = '';

    // Adiciona o código de área (DD)
    if (numericValue.length > 2) {
        formattedValue += '(' + numericValue.substring(0, 2) + ') ';
    } else {
        formattedValue += numericValue.substring(0, 2);
    }

    // Adiciona o número do telefone
    if (numericValue.length > 2 && numericValue.length <= 7) {
        formattedValue += numericValue.substring(2, 7);
    } else if (numericValue.length > 7) {
        formattedValue += numericValue.substring(2, 7) + '-' + numericValue.substring(7, 11);
    }

    // Atualiza o valor do campo de entrada com a formatação adequada
    contactInput.value = formattedValue;
}

/* Função para lidar com a seleção de opções */
function handleLanguageSelection() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {
            if (this.checked) {
                this.classList.add('bg-blue-500', 'border-blue-500');
            } else {
                this.classList.remove('bg-blue-500', 'border-blue-500');
            }
        });
    });
}

// Chama a função quando o conteúdo da página é carregado
document.addEventListener('DOMContentLoaded', function () {
    handleLanguageSelection();
});

/* Ativar campo de Idiomas */
document.addEventListener('DOMContentLoaded', function () {
    const othersLanguage = document.getElementById('othersLanguage');
    const othersLanguageInput = document.getElementById('othersLanguageInput');

    othersLanguage.addEventListener('change', function () {
        othersLanguageInput.disabled = !this.checked;
        othersLanguageInput.focus();
    });
});

/* Ativar campo de Especialidades */
document.addEventListener('DOMContentLoaded', function () {
    const othersSpecialties = document.getElementById('othersSpecialties');
    const othersInputSpecialties = document.getElementById('othersInputSpecialties');

    othersSpecialties.addEventListener('change', function () {
        othersInputSpecialties.disabled = !this.checked;
        othersInputSpecialties.focus();
    });
});

/* Formatação da Bio */
function updateRemainingChars() {
    const bioTextarea = document.getElementById('bioTextarea');
    const remainingChars = document.getElementById('remainingChars');
    const remaining = 500 - bioTextarea.value.length;
    remainingChars.textContent = remaining + " caracteres restantes";
}

document.addEventListener('DOMContentLoaded', function () {
    const bioTextarea = document.getElementById('bioTextarea');

    // Adiciona um ouvinte de evento para cada vez que o usuário digita no textarea
    bioTextarea.addEventListener('input', function () {
        updateRemainingChars();
    });

    // Atualiza o contador inicialmente
    updateRemainingChars();
});

/* Verifica Senha */
document.addEventListener("DOMContentLoaded", function () {
    var password1Input = document.getElementById("password1");
    var password2Input = document.getElementById("password2");
    var message = document.getElementById("message");
    var requirements = document.getElementById("passwordRequirements");
    var showPasswordsCheckbox = document.getElementById("showPasswords");

    function updateRequirements(hasUpperCase, hasLowerCase, hasNumber, hasSpecialChar, isLengthValid) {
        var requirementsText = "";

        if (!hasUpperCase) {
            requirementsText += "<span class='text-red-500'>- Pelo menos uma letra maiúscula;</span><br>";
        } else {
            requirementsText += "<span class='text-green-500'>- Pelo menos uma letra maiúscula;</span><br>";
        }
        if (!hasLowerCase) {
            requirementsText += "<span class='text-red-500'>- Pelo menos uma letra minúscula;</span><br>";
        } else {
            requirementsText += "<span class='text-green-500'>- Pelo menos uma letra minúscula;</span><br>";
        }
        if (!hasNumber) {
            requirementsText += "<span class='text-red-500'>- Pelo menos um número;</span><br>";
        } else {
            requirementsText += "<span class='text-green-500'>- Pelo menos um número;</span><br>";
        }
        if (!hasSpecialChar) {
            requirementsText += "<span class='text-red-500'>- Pelo menos um caractere especial;</span><br>";
        } else {
            requirementsText += "<span class='text-green-500'>- Pelo menos um caractere especial;</span><br>";
        }
        if (!isLengthValid) {
            requirementsText += "<span class='text-red-500'>- Mínimo de 8 caracteres;</span><br>";
        } else {
            requirementsText += "<span class='text-green-500'>- Mínimo de 8 caracteres;</span><br>";
        }

        requirements.innerHTML = requirementsText;
    }

    function updateMessageText(isPasswordMatch) {
        message.textContent = isPasswordMatch ? "As senhas são iguais!" : "As senhas não são iguais.";
        message.classList.remove(isPasswordMatch ? "text-red-500" : "text-green-500");
        message.classList.add(isPasswordMatch ? "text-green-500" : "text-red-500");
    }

    showPasswordsCheckbox.addEventListener("change", function () {
        var type = this.checked ? "text" : "password";
        password1Input.type = type;
        password2Input.type = type;
    });

    password1Input.addEventListener("input", function () {
        var password1 = password1Input.value;

        var hasUpperCase = /[A-Z]/.test(password1);
        var hasLowerCase = /[a-z]/.test(password1);
        var hasNumber = /\d/.test(password1);
        var hasSpecialChar = /[^A-Za-z0-9]/.test(password1);
        var isLengthValid = password1.length >= 8;

        updateRequirements(hasUpperCase, hasLowerCase, hasNumber, hasSpecialChar, isLengthValid);

        var isPasswordMatch = password1 === password2Input.value;
        updateMessageText(isPasswordMatch);
    });

    password2Input.addEventListener("input", function () {
        var isPasswordMatch = password1Input.value === password2Input.value;
        updateMessageText(isPasswordMatch);
    });
});




