class AchievementViews {
    showAllAchievements(selector, data) {
        $.get('templates/achievements-all.html', function (templ) {
            console.log(data);
            let renderedData = Mustache.render(templ, data);
            $(selector).html(renderedData);
        })
    }

    showAddAchievement(selector) {
        $.get('templates/achievements-add.html', function (templ) {
            $(selector).html(templ);

            $('#addAchievementButton').on('click', () => {
                let achievement = $('#achievement').val();

                let data = {
                    achievement: achievement
                };

                triggerEvent('addAchievement', data);
            });

        })
    }
}