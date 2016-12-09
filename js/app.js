(() => {
    const selector = '#view-wrapper';

    const appKey = 'kid_SJFQs5PXl';
    const appSecret = 'kid_SJFQs5PXl';
    const baseServiceUrl = 'https://baas.kinvey.com/';

    let authorizationService = new AuthorizationService(appKey, appSecret, baseServiceUrl);
    let requester = new Requester(AuthorizationService);

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


    run('#/');
})();