class AchievementsController {
    constructor(view, model) {
        this.view = view;
        this.model = model;
    }

    loadAllAchievementsPage(selector) {

        this.model.getAllAchievements()
            .then((success) => {
                console.log(success);

                this.view.showAllAchievements(selector, {data: success});
            });
    }
}