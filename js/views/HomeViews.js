class HomeViews {
    showWelcomePage(selector) {
        $.get('templates/welcome.html', (templ) => {
            $(selector).html(templ);
        });
    }
}
