(() => {
    const selector = '#view-wrapper';

    const appKey = 'kid_SJFQs5PXl';
    const appSecret = 'de1ea738752e4d0fa93216855e6b6a46';
    const baseServiceUrl = 'https://baas.kinvey.com/';

    let authorizationService = new AuthorizationService(appKey, appSecret, baseServiceUrl);
    let requester = new Requester(authorizationService);

    let homeViews = new HomeViews(),
        userViews = new UserViews();

    let userModel = new UserModel(requester);

    let homeController = new HomeController(homeViews),
        usersController = new UsersController(userViews, userModel);

    initEventServices();

    onRoute("#/", function () {
        homeController.loadWelcomePage(selector);
    });

    onRoute("#/login", function () {
        usersController.loadLoginPage(selector);
    });

    onRoute("#/register", function () {
        usersController.loadRegisterPage(selector);
    });

    onRoute("#/logout", function () {
        usersController.logout();
    });


    bindEventHandler('login', function (ev, data) {
        usersController.login(data);
    });

    bindEventHandler('register', function (ev, data) {
        usersController.register(data);
    });



    run('#/');
})();