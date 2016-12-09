class AuthorizationService {
    constructor(baseServiceUrl, appId, appSecret, guestUserCredentials) {
        this.baseServiceUrl = baseServiceUrl;
        this.appId = appId;
        this.appSecret = appSecret;
        this._guestCredentials = guestUserCredentials;
        this._appCredentials = btoa(appId + ":" + appSecret);
    }

    get authorizationType() {
        return this._authorizationType;
    }

    set authorizationType(authorizationType) {
        this._authorizationType = authorizationType;
    }

    static getCurrentUser() {
        return sessionStorage['username'];
    }

    static isLoggedIn() {
        return AuthorizationService.getCurrentUser() != undefined;
    }

    getAuthorizationHeaders(isGuest) {
        let headers = {};

        if (AuthorizationService.isLoggedIn()) {
            headers = {
                'Authorization': this.authorizationType + ' ' + sessionStorage['_authToken']
            };
        } else if (!AuthorizationService.isLoggedIn() && isGuest) {
            headers = {
                'Authorization': this.authorizationType + ' ' + this._guestCredentials
            };
        } else if (!AuthorizationService.isLoggedIn() && !isGuest) {
            headers = {
                'Authorization': 'Basic' + ' ' + this._appCredentials
            };
        }

        headers['Content-Type'] = 'application/json';

        return headers;
    }
}
