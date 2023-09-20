let themes = ["dark", "light"];

let theme_i = localStorage.getItem("theme_i");
if (!theme_i) theme_i = 0

function set_theme(dst_theme) {
    console.log("switching to theme:" + dst_theme);
    themes.forEach((curr_theme) => {
        document.getElementById(curr_theme + "_butt").setAttribute("selected", dst_theme == curr_theme)
    });

    document.querySelector("body").setAttribute("theme", dst_theme)

    var event = new CustomEvent("onThemeChange", { "detail": { theme: dst_theme } });
    dispatchEvent(event);
}

window.addEventListener("load", function () {
    theme_i %= themes.length;
    set_theme(themes[theme_i])
});

function toggle_theme() {
    theme_i++;

    theme_i %= themes.length;
    localStorage.setItem("theme_i", theme_i);
    setTimeout(() => {
        set_theme(themes[theme_i])
    }, 0)
}
