
let transition_pixel_size = 100;

let canvas_color_themes = {
    "dark": {
        web_background_color: "black",
        background_color: "#071952",
        dot_colors: [
            "#0B666A",
            "#35A29F",
            "#97FEED"
        ]
    },
    "light": {
        web_background_color: "rgb(238, 238, 238)",
        background_color: "white",
        dot_colors: [
            "#00425A",
            "#1F8A70",
            "#BFDB38",
            "#FC7300"
        ]
    }
}


function get_hash(x, y) {
    let ret = Math.abs(Math.floor((perlin.get(x * 1.0001, y * 1.0001) * 10000000))) % 100;
    return ret;
}

const reset_canvas = (canvas, theme) => {
    let { web_background_color, background_color, dot_colors } = canvas_color_themes[theme];

    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    let ctx = canvas.getContext('2d');

    const fill_gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);

    fill_gradient.addColorStop("0", web_background_color);
    fill_gradient.addColorStop("" + (transition_pixel_size / canvas.height), background_color);
    fill_gradient.addColorStop("" + (1 - transition_pixel_size / canvas.height), background_color);
    fill_gradient.addColorStop("1", web_background_color);
    ctx.fillStyle = fill_gradient;
    ctx.beginPath();
    ctx.rect(0, 0, canvas.width, canvas.height)
    ctx.fill();

    let columns = 30;

    const perlin_scale = 3;

    for (let x = -1; x < columns + 1; x++) {
        for (let y = 0; y < canvas.height / canvas.width * columns; y++) {

            const center_x = canvas.width / (columns + 1) * (x + 1)
            const center_y = canvas.width / (columns + 1) * (y + 1)

            let perlin_point = Math.abs(perlin.get(x / columns * perlin_scale, y / columns * perlin_scale));
            if (perlin_point < 0) continue;

            // let scale = Math.sqrt(perlin_point) * 0.9
            let scale = Math.min(perlin_point, 0.5);

            const r = canvas.width / columns * scale;

            draw_circle(center_x, center_y, r, ctx, dot_colors, get_hash(x, y))

        }
    }

}


function draw_circle(center_x, center_y, r, ctx, dot_colors, rand) {
    if (r < 0) return;

    ctx.fillStyle = dot_colors[rand % dot_colors.length];

    ctx.beginPath();
    ctx.arc(center_x, center_y, r, 0, 2 * Math.PI);
    ctx.fill();

}

