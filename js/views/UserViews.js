class UserViews {
    showRegisterPage(selector) {
        $.get('templates/register.html', (templ) => {
            $(selector).html(templ);

            $('#registerButton').on('click', function () {
                let username = $('#username').val();
                let password = $('#password').val();
                let fullName = $('#full-name').val();

                let data = {
                    username: username,
                    password: password,
                    fullName: fullName,
                };



                triggerEvent('register', data);
            });
        });
    }

    showLoginPage(selector) {
        $.get('templates/login.html', (templ) => {
            $(selector).html(templ);
        });
    }
}
