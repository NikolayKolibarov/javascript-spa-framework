(() => {
    const menu = '#menu';
    const wrapper = '#view-wrapper';

    const appKey = 'kid_HJbOy0tQe';
    const appSecret = 'd891ebad0ef4449292482b4a3d5f3321';
    const baseServiceUrl = 'https://baas.kinvey.com/';

    let authorizationService = new AuthorizationService(appKey, appSecret, baseServiceUrl);
    let requester = new Requester(authorizationService);

    let menuViews = new MenuViews(),
        homeViews = new HomeViews(),
        userViews = new UserViews(),
        achievementViews = new AchievementViews();

    let userModel = new UserModel(requester);
    let achievementModel = new AchievementModel(requester);

    let menuController = new MenuController(menuViews),
        homeController = new HomeController(homeViews),
        usersController = new UsersController(userViews, userModel),
        achievementsController = new AchievementsController(achievementViews, achievementModel);

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


    onRoute("#/",  () => {
        homeController.loadWelcomePage(wrapper);
    });

    onRoute("#/login",  ()  =>{
        usersController.loadLoginPage(wrapper);
    });

    onRoute("#/register",  () => {
        usersController.loadRegisterPage(wrapper);
    });

    onRoute("#/logout",  () => {
        usersController.logout();
    });

    onRoute("#/user/profile",  () => {
        usersController.loadProfilePage(wrapper);
    });

    onRoute("#/achievements", () => {
        achievementsController.loadAllAchievementsPage(wrapper);
    });

    onRoute("#/achievements/create", () => {
        achievementsController.loadAddAchievementPage(wrapper);
    });


    bindEventHandler('login',  (ev, data)  =>{
        usersController.login(data);
    });

    bindEventHandler('register',  (ev, data) => {
        usersController.register(data);
    });



    run('#/');
})();