let current_blog_lang = "en";
let current_blog_theme = "dark";

addEventListener("onLangChange", (e) => {
    current_blog_lang = e.detail.lang;
    reset_canvas(current_blog_lang, current_blog_theme)
});

addEventListener("onThemeChange", (e) => {
    current_blog_theme = e.detail.theme;
    reset_canvas(current_blog_lang, current_blog_theme)
})

addEventListener("resize", () => {
    reset_canvas(current_blog_lang, current_blog_theme)

})