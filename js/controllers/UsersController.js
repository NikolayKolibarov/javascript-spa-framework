class UsersController {
    constructor(view, model) {
        this.view = view;
        this.model = model;
    }

    loadRegisterPage(selector) {
        this.view.showRegisterPage(selector);
    }

    loadLoginPage(selector) {
        this.view.showLoginPage(selector);
    }
}


