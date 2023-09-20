let current_theme = "dark";

addEventListener("onThemeChange", (e) => {
    current_theme = e.detail.theme;
    reset_bg()
});

addEventListener("resize", () => {
    reset_bg()
})

function reset_bg() {
    let content = document.getElementById("content_margins")
    let footer = document.getElementById("footer")
    let canvas = document.getElementById("background_canvas");
    console.log("calc(100vh - " + footer.clientHeight + "px + 3px)")

    content.style.minHeight = "calc(100vh - " + getAbsoluteHeight(footer) + "px + 3px)";
    canvas.style.height = content.clientHeight + "px";



    reset_canvas(canvas, current_theme)
}

function getAbsoluteHeight(el) {
    // Get the DOM Node if you pass in a string
    el = (typeof el === 'string') ? document.querySelector(el) : el;

    var styles = window.getComputedStyle(el);
    var margin = parseFloat(styles['marginTop']) +
        parseFloat(styles['marginBottom']);

    return Math.ceil(el.offsetHeight + margin);
}