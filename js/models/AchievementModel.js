class AchievementModel {
    constructor(requester) {
        this.requester = requester;
        this.serviceUrl = this.requester.authorizationService.baseServiceUrl + 'appdata/' + this.requester.authorizationService.appKey + '/achievements/';
    }

    getAllAchievements() {
        return this.requester.get(this.serviceUrl, true);
    }

}