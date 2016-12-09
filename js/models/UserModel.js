class UserModel {
    constructor(requester) {
        this.requester = requester;
        this.serviceUrl = requester.baseServiceUrl + 'user/' + requester.appKey + '/';
    }

    login(data) {
        var requestUrl = this.serviceUrl + 'login';
        return this.requester.post(requestUrl, data, false);
    };

    register(data) {
        return this.requester.post(this.serviceUrl, data, false);
    };

    logout() {
        var requestUrl = this.serviceUrl + '_logout';
        return this.requester.post(requestUrl, null, true);
    };
}