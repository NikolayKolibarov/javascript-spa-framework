(() => {
    import Sammy from 'sammy';

    import Requester from './utils/Requester';
    import  AuthorizationService from './utils/AuthorizationService';

    const appKey = 'kid_SJFQs5PXl';
    const appSecret = 'kid_SJFQs5PXl';
    const baseServiceUrl = 'https://baas.kinvey.com/';

    let router = Sammy(function () {
        let AuthorizationService = new AuthorizationService(appKey, appSecret, baseServiceUrl);
        let Requester = new Requester(AuthorizationService);

        this.get('#/', function () {
        });

    });

    router.run('#/');
})();
