let background_color = "#071952"

let transition_pixel_size = 400;

// let color_pairs = [
//     ["#1CEFEE", "#0AA3A3"],
//     ["#F06B1D", "#A33C00"],
// ]

let color_pairs = [
    ["#0B666A", "#0B666A"],
    ["#35A29F", "#35A29F"],
    ["#97FEED", "#97FEED"]
]

// let color_pairs = [
//     ["#2987F0", "#2987F0"],
//     ["#F04335", "#F04335"],
//     ["#1CEFEE", "#1CEFEE"],
//     ["#F09A05", "#F09A05"],
//     ["#11F072", "#11F072"],
// ]

// let color_pairs = [
//     ["#47F1FF", "#003B47"],
//     ["#9E003E", "#FF468A"],
// ]


let canvas_es = document.getElementById("background_canvas_es");

let reset_canvas = (lang) => {

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
    fill_gradient.addColorStop("" + (transition_pixel_size / canvas.height), background_color);
    fill_gradient.addColorStop("" + (1 - transition_pixel_size / canvas.height), background_color);
    fill_gradient.addColorStop("1", "#000000");
    ctx.fillStyle = fill_gradient;
    ctx.beginPath();
    ctx.rect(0, 0, canvas.width, canvas.height)
    ctx.fill();

    let columns = 30;

    const perlin_scale = 3;

    for (let x = -1; x < columns + 1; x++) {
        for (let y = 0; y < canvas.height / canvas.width * columns + 1; y++) {

            const center_x = canvas.width / (columns + 1) * (x + 1)
            const center_y = canvas.width / (columns + 1) * (y + 1)

            let perlin_point = Math.abs(perlin.get(x / columns * perlin_scale, y / columns * perlin_scale));
            if (perlin_point < 0) continue;

            // let scale = Math.sqrt(perlin_point) * 0.9
            let scale = Math.min(perlin_point, 0.5);

            const r = canvas.width / columns * scale;

            draw_circle(center_x, center_y, r, ctx)

        }
    }

    // let already_drawn = []

    // for (let i = 0; i < canvas.height / canvas.width * 100; i++) {

    //     let top_y = canvas.height * 0.1 + Math.random() * canvas.height
    //     let center_x = Math.random() * canvas.width;
    //     let r = Math.random() * canvas.width / 3 + canvas.width / 100;
    //     let center_y = top_y + r;

    //     let hit = false;

    //     for (let j = 0; j < already_drawn.length; j++) {
    //         let { center_x: x, center_y: y, r: rad } = already_drawn[j];

    //         if ((center_x - x) ** 2 + (center_y - y) ** 2 < ((r + rad) * 1.1) ** 2) {
    //             hit = true;
    //             break
    //         }
    //     }

    //     if (hit) continue;

    //     draw_circle(center_x, center_y, r, ctx)

    //     already_drawn.push({ center_x, center_y, r })
    // }

}


function draw_circle(center_x, center_y, r, ctx) {
    if (r < 0) return;
    const fill_gradient = ctx.createLinearGradient(center_x - r, center_y - r, center_x + r, center_y + r);

    let [a, b] = color_pairs[Math.floor(Math.random() * color_pairs.length)];

    fill_gradient.addColorStop("0", a);
    fill_gradient.addColorStop("1", b);
    ctx.fillStyle = fill_gradient;


    ctx.beginPath();
    ctx.arc(center_x, center_y, r, 0, 2 * Math.PI);
    ctx.fill();

}