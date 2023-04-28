let particles = [];
let canvas = document.getElementById("background_canvas");
let ctx = canvas.getContext('2d');

function bump(x) {
    return 4 * (-x * x + x)
}

let view_margin = 300;

let cooldown = 0

function tick() {

    let content = document.getElementById("blog_list");
    let blog_box = document.getElementById("blog_box");

    blog_box.style.height = content.clientHeight + "px";

    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    let base_y_position = - canvas.getBoundingClientRect().top;
    cooldown--;

    if (particles.length < 100 && cooldown < 0) {
        cooldown = 10;
        let initial_size = Math.min(canvas.width * 0.5, Math.min(canvas.height * 0.5, 30 + Math.random() * 100));

        let particula = {
            x: Math.random() * canvas.clientWidth,
            y: Math.random() * (window.innerHeight + view_margin * 2) + base_y_position - view_margin,
            vx: (0.5 - Math.random()) * 5,
            vy: (0.5 - Math.random()) * 5,
            t: initial_size,
            total: initial_size,
        }

        particles.push(particula)
    }
    particles = particles.filter(({ t }) => t > 0);

    particles.forEach(p => {
        p.t -= 0.3;
        let r = Math.max(0, bump(p.t / p.total) * p.total);

        if (base_y_position - view_margin > p.y + r) {
            p.t = 0;
        }
        if (base_y_position + window.innerHeight + view_margin < p.y - r) {
            p.t = 0;
        }

        particles.forEach(f => {
            let l = Math.sqrt((f.y - p.y) * (f.y - p.y) + (f.x - p.x) * (f.x - p.x));
            if (l < 0.001) return;
            p.vy -= 2 * (f.y - p.y) / l / l;
            p.vx -= 2 * (f.x - p.x) / l / l;

        })


        // if (p.y + r > canvas.height || p.y - r < 0) {
        //     p.vy *= -0.9;
        //     p.y = Math.max(r, Math.min(p.y, canvas.height - r))
        // }

        if (p.x + r > canvas.width || p.x - r < 0) {
            p.vx *= -0.9;
            p.x = Math.max(r, Math.min(p.x, canvas.width - r))
        }



        p.x += p.vx;
        p.y += p.vy;

        let stroke_gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        stroke_gradient.addColorStop("0", "rgba(0, 255, 255, 0.5)");
        stroke_gradient.addColorStop("0.5", "rgba(255, 0, 255, 0.5)");
        stroke_gradient.addColorStop("1", "rgba(255, 255, 0, 0.5)");

        // Fill with gradient
        ctx.strokeStyle = stroke_gradient;

        let fill_gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        fill_gradient.addColorStop("0", "rgba(0, 255, 255, 0.2)");
        fill_gradient.addColorStop("0.5", "rgba(255, 0, 255, 0.2)");
        fill_gradient.addColorStop("1", "rgba(255, 255,0, 0.2)");

        // Fill with gradient
        ctx.fillStyle = fill_gradient;

        let blur = 5 + Math.abs(p.t - p.total / 2) / p.total * 30;
        ctx.filter = "blur(" + blur + "px)";

        ctx.lineWidth = r / 10;
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, 2 * Math.PI, true);
        ctx.fill();
        ctx.stroke();

    });


    setTimeout(tick, 1000 / 30);

}

requestAnimationFrame(tick);