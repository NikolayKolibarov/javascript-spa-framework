class Requester {
    constructor(authorizationService) {
        this.authorizationService = authorizationService;
    }

    get(url) {
        let requestHeaders = this._getHeaders(true);
        Requester._makeRequest('GET', url, null, requestHeaders);
    }

    post(url, data) {
        let requestHeaders = this._getHeaders(false);
        Requester._makeRequest('POST', url, data, requestHeaders);
    }

    put(url, data) {
        let requestHeaders = this._getHeaders(false);
        Requester._makeRequest('PUT', url, data, requestHeaders);
    }

    remove(url, data) {
        let requestHeaders = this._getHeaders(false);
        Requester._makeRequest('DELETE', url, data, requestHeaders);
    }

    static _makeRequest(method, url, data, headers) {
        $.ajaxSetup({processData: true});

        let defer = Q.defer();

        $.ajax({
            method: method,
            url: url,
            headers: headers,
            data: JSON.stringify(data) || null,
            success: function (data) {
                defer.resolve(data);
            },
            error: function (error) {
                defer.reject(error);
            }
        });

        return defer.promise;
    }

    _getHeaders(isGuest) {
        return this.authorizationService.getAuthorizationHeaders(isGuest);
    }
}
