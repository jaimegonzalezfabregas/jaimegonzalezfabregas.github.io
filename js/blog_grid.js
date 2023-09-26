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

let transition_time = 300;

let last_reset_time = 0;

function reset_bg(repeating) {

    if (!repeating) {
        last_reset_time = new Date().getTime()
    }

    const content = document.getElementById("blog_flex_" + current_blog_lang);
    const blog_box = document.getElementById("blog_box");

    blog_box.style.height = content.clientHeight + "px";

    let canvas_dark = document.getElementById("background_canvas_dark");
    let canvas_light = document.getElementById("background_canvas_light");

    if (current_blog_theme == "light") {
        canvas_dark.style.zIndex = -1
        canvas_light.style.zIndex = -2
        canvas_dark.style.opacity = 0;
        canvas_light.style.opacity = 1;
    } else {
        canvas_dark.style.zIndex = -2
        canvas_light.style.zIndex = -1
        canvas_dark.style.opacity = 1;
        canvas_light.style.opacity = 0;
    }

    reset_canvas(canvas_dark, "dark")
    reset_canvas(canvas_light, "light")

    if (new Date().getTime() - last_reset_time < transition_time) {
        requestAnimationFrame(()=>{reset_bg(true)});
    }
}