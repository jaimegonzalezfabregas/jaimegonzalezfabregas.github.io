let current_blog_lang = "en";
let current_blog_theme = "dark";

addEventListener("onLangChange", (e) => {
    current_blog_lang = e.detail.lang;
    reset_bg()
});

addEventListener("onThemeChange", (e) => {
    current_blog_theme = e.detail.theme;
    reset_bg()
});

addEventListener("resize", () => {
    reset_bg()

})

function reset_bg() {
    const content = document.getElementById("blog_flex_" + current_blog_lang);
    const blog_box = document.getElementById("blog_box_" + current_blog_lang);

    blog_box.style.height = content.clientHeight + "px";

    let canvas = document.getElementById("background_canvas_" + current_blog_lang);

    reset_canvas(canvas, current_blog_theme)
}