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

    loadProfilePage(selector) {
        let data = {
            username: sessionStorage['username'],
            fullName: sessionStorage['fullName']
        };

        this.view.showProfilePage(selector, data);
    }

    login(data) {
        return this.model.login(data)
            .then(function (success) {
                sessionStorage['sessionId'] = success._kmd.authtoken;
                sessionStorage['username'] = success.username;
                sessionStorage['fullName'] = success.fullName;
                sessionStorage['userId'] = success._id;

                redirectUrl('#/');


            }).done();
    };

    register(data) {
        return this.model.register(data)
            .then(function (success) {
                sessionStorage['sessionId'] = success._kmd.authtoken;
                sessionStorage['username'] = success.username;
                sessionStorage['fullName'] = success.fullName;
                sessionStorage['userId'] = success._id;

               redirectUrl('#/');
            })
            .done();
    }

    logout() {
        this.model.logout()
            .then(function () {
                sessionStorage.clear();
                redirectUrl('#/');
            })
    };
}


