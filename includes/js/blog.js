let particles = [];
let canvas = document.getElementById("background_canvas");
let ctx = canvas.getContext('2d');

let colors = [
    { color_fill_A: "rgba(255,0,255,0.3)", color_fill_B: "rgba(0,255,255,0.3)", color_stroke_A: "rgba(255,255,0,0.3)", color_stroke_B: "rgba(0,0,255,0.3)" }
]

function tick() {

    let content = document.getElementById("blog_list");
    let blog_box = document.getElementById("blog_box");

    blog_box.style.height = content.clientHeight + "px";

    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    let c = colors[Math.floor(Math.random() * colors.length)]

    if (Math.random() < 0.01 && particles.length < 100) {
        particles.push({
            x: Math.random() * canvas.clientWidth,
            y: Math.random() * canvas.clientHeight,
            vx: 0.5 - Math.random(),
            vy: 0.5 - Math.random(),
            t: 60 + Math.random() * 30,
            c
        })
    }
    particles = particles.filter(({ t }) => t > 0.1);

    particles.forEach(p => {
        p.t -= 0.1;
        p.x += p.vx;
        p.y += p.vy;

        var stroke_gradient = ctx.createLinearGradient(p.y - p.t / 2, p.x - p.t / 2, p.y + p.t / 2, p.x + p.t / 2);
        stroke_gradient.addColorStop("0", p.c.color_stroke_A);
        stroke_gradient.addColorStop("1.0", p.c.color_stroke_B);

        // Fill with gradient
        ctx.strokeStyle = stroke_gradient;

        var fill_gradient = ctx.createLinearGradient(p.y - p.t / 2, p.x - p.t / 2, p.y + p.t / 2, p.x + p.t / 2);
        fill_gradient.addColorStop("0", p.c.color_fill_A);
        fill_gradient.addColorStop("1.0", p.c.color_fill_B);

        // Fill with gradient
        ctx.fillStyle = fill_gradient;


        ctx.lineWidth = p.t / 10;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.t, 0, 2 * Math.PI, true);
        ctx.fill();
        ctx.stroke();

    });


    requestAnimationFrame(tick);

}

requestAnimationFrame(tick);