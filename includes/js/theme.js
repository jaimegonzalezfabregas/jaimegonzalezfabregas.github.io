let themes = ["dark", "light"];

let theme_i = localStorage.getItem("theme_i");
if (!theme_i) theme_i = 0

function set_theme(dst_lang) {
    console.log("switching to theme:" + dst_lang);
    themes.forEach((curr_lang) => {
        document.getElementById(curr_lang + "_butt").setAttribute("selected", dst_lang == curr_lang)
    });

    document.querySelector("body").setAttribute("theme", dst_lang)
}

window.addEventListener("load", function () {
    themeChange(themes[theme_i % themes.length])
});

function toggle_theme() {
    theme_i++;
    localStorage.setItem("theme_i", theme_i);
    themeChange(themes[theme_i % themes.length])
}

function themeChange(theme) {
    set_theme(theme)

    var event = new CustomEvent("onThemeChange", { "detail": { theme } });
    dispatchEvent(event);
}
