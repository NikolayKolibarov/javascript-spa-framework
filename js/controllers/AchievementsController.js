class AchievementsController {
    constructor(view, model) {
        this.view = view;
        this.model = model;
    }

    loadAllAchievementsPage(selector) {

        this.model.getAllAchievements()
            .then((success) => {
                console.log(success);
                let data = {
                    achievements: success
                };

                this.view.showAllAchievements(selector, data);
            });
    }

    loadAddAchievementPage(selector) {
        this.view.showAddAchievement(selector);
    }

    addAchievement(data) {
        this.model.addAchievement(data)
            .then((success) => {
                console.log(success);
                redirectUrl("#/achievements");
            });
    }
}