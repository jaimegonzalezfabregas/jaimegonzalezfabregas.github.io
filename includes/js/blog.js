
let canvas_es = document.getElementById("background_canvas_es");

function reset(lang) {

    console.log("lang", lang)
    const content = document.getElementById("blog_flex_" + lang);
    const blog_box = document.getElementById("blog_box_" + lang);
    let canvas = document.getElementById("background_canvas_" + lang);

    blog_box.style.height = content.clientHeight + "px";

    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    let ctx = canvas.getContext('2d');

    const fill_gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    fill_gradient.addColorStop("0", "#000000");
    fill_gradient.addColorStop("0.1", "#313131");
    fill_gradient.addColorStop("1", "#313131");
    ctx.fillStyle = fill_gradient;
    ctx.beginPath();
    ctx.rect(0, 0, canvas.width, canvas.height)
    ctx.fill();

    let already_drawn = []

    for (let i = 0; i < canvas.height / canvas.width * 100; i++) {

        let top_y = canvas.height * 0.1 + Math.random() * canvas.height
        let center_x = Math.random() * canvas.width;
        let r = Math.random() * canvas.width / 3 + canvas.width / 100;
        let center_y = top_y + r;

        let hit = false;

        for (let j = 0; j < already_drawn.length; j++) {
            let { center_x: x, center_y: y, r: rad } = already_drawn[j];

            if ((center_x - x) ** 2 + (center_y - y) ** 2 < ((r + rad) * 1.1) ** 2) {
                hit = true;
                break
            }
        }

        if (hit) continue;


        const fill_gradient = ctx.createLinearGradient(center_x - r, center_y - r, center_x + r, center_y + r);
        if (Math.random() > 0.5) {
            fill_gradient.addColorStop("0", "#47F1FF");
            fill_gradient.addColorStop("1", "#003B47");
        }
        else {
            fill_gradient.addColorStop("1", "#FF468A");
            fill_gradient.addColorStop("0", "#9E003E");
        }

        ctx.fillStyle = fill_gradient;


        ctx.beginPath();
        ctx.arc(center_x, center_y, r, 0, 2 * Math.PI);
        ctx.fill();

        already_drawn.push({ center_x, center_y, r })
    }

}

document.addEventListener("onLangChange", (e) => {
    reset(e.detail.lang)
});

// setInterval(() => {
//     reset("es")
//     reset("en")
// }, 1000)