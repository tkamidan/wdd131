function thankYouTemplate(email) {
    return `<p>Thank you for submitting your message/question, ${email}!! Please refresh the page to submit another message or question.</p>`;
};

document.addEventListener('DOMContentLoaded', function() {
    var formElement = document.querySelector('form');
    var successElement = document.getElementById('success');

    formElement.addEventListener('submit', function(event) {
        event.preventDefault();

        var emailData = document.getElementById('email').value;
        var textArea = document.querySelector('textarea').value;

        if (emailData !== "" || textArea !== "") {
            formElement.style.display = 'none';
            successElement.insertAdjacentHTML("beforebegin", thankYouTemplate(emailData));
        }
    });
});

