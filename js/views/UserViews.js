class UserViews {
    showRegisterPage(selector) {
        $.get('templates/register.html', (templ) => {
            $(selector).html(templ);
        });
    }

    showLoginPage(selector) {
        $.get('templates/login.html', (templ) => {
            $(selector).html(templ);
        });
    }
}
