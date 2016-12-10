class HomeController {
    constructor(view, model) {
        this.view = view;
        this.model = model;
    }

    loadWelcomePage(selector) {
        this.view.showWelcomePage(selector);
    }

}


