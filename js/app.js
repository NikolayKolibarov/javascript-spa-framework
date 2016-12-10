(() => {
    const menu = '#menu';
    const wrapper = '#view-wrapper';

    const appKey = 'kid_SJFQs5PXl';
    const appSecret = 'de1ea738752e4d0fa93216855e6b6a46';
    const baseServiceUrl = 'https://baas.kinvey.com/';

    let authorizationService = new AuthorizationService(appKey, appSecret, baseServiceUrl);
    let requester = new Requester(authorizationService);

    let menuViews = new MenuViews(),
        homeViews = new HomeViews(),
        userViews = new UserViews();

    let userModel = new UserModel(requester);

    let menuController = new MenuController(menuViews),
        homeController = new HomeController(homeViews),
        usersController = new UsersController(userViews, userModel);

    initEventServices();

    Sammy(function () {
        this.before({except: {path: '#/route'}}, function() {

            if(AuthorizationService.isLoggedIn()) {
                menuController.loadMenuUser(menu);
            } else {
                menuController.loadMenuGuest(menu);
            }

            this.log('not before #/route');
        });
    });


    onRoute("#/", function () {
        homeController.loadWelcomePage(wrapper);
    });

    onRoute("#/login", function () {
        usersController.loadLoginPage(wrapper);
    });

    onRoute("#/register", function () {
        usersController.loadRegisterPage(wrapper);
    });

    onRoute("#/logout", function () {
        usersController.logout();
    });

    onRoute("/user/profile", function () {
        usersController.loadProfilePage(wrapper);
    });


    bindEventHandler('login', function (ev, data) {
        usersController.login(data);
    });

    bindEventHandler('register', function (ev, data) {
        usersController.register(data);
    });



    run('#/');
})();