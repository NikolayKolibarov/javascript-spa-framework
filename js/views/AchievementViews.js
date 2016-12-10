class AchievementViews {
    showAllAchievements(selector, data) {
        $.get('templates/achievements-all.html', function(templ) {
            var renderedData = Mustache.render(templ, data);
            $(selector).html(renderedData);
        })
    }
}