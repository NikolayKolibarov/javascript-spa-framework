class UserViews {
    showRegisterPage(selector) {
        $.get('templates/register.html', (templ) => {
            $(selector).html(templ);

            $('#registerButton').on('click',  () => {
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

            $('#loginButton').on('click',  () => {
                let username = $('#username').val();
                let password = $('#password').val();

                let data = {
                    username: username,
                    password: password,
                };

                triggerEvent('login', data);
            });
        });
    }

    showProfilePage(selector, data) {
        $.get('templates/profile.html', (templ) => {
            var renderedData = Mustache.render(templ, data);
            $(selector).html(renderedData);
        })
    }
}
