let current_theme = "dark";

addEventListener("onThemeChange", (e) => {
    current_theme = e.detail.theme;
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
    let content = document.getElementById("content_margins")
    let footer = document.getElementById("footer")
    let canvas_dark = document.getElementById("background_canvas_dark");
    let canvas_light = document.getElementById("background_canvas_light");
    console.log("calc(100vh - " + footer.clientHeight + "px + 3px)")

    content.style.minHeight = "calc(100vh - " + getAbsoluteHeight(footer) + "px + 3px)";
    canvas_dark.style.height = content.clientHeight + "px";
    canvas_light.style.height = content.clientHeight + "px";

    if (current_theme == "light") {
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
        requestAnimationFrame(() => { reset_bg(true) });
    }
}

function getAbsoluteHeight(el) {
    // Get the DOM Node if you pass in a string
    el = (typeof el === 'string') ? document.querySelector(el) : el;

    var styles = window.getComputedStyle(el);
    var margin = parseFloat(styles['marginTop']) +
        parseFloat(styles['marginBottom']);

    return Math.ceil(el.offsetHeight + margin);
}