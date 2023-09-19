let current_blog_lang = "";

document.addEventListener("onLangChange", (e) => {
    current_blog_lang = e.detail.lang;
    perlin.seed(Math.random())

    reset_canvas(current_blog_lang)
});

addEventListener("resize", () => {
    reset_canvas(current_blog_lang)

})