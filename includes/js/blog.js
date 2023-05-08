let particles = [];

const content = document.getElementById("blog_flex");
const blog_box = document.getElementById("blog_box");
let canvas = document.getElementById("background_canvas");
let ctx = canvas.getContext('2d');

function bump(x) {
    // y = 3.330669e-16 + 8.513889*x - 26.56944*x^2 + 36.11111*x^3 - 18.05556*x^4
    return 8.513889 * x - 26.56944 * x * x + 36.11111 * x * x * x - 18.05556 * x * x * x * x
}

const view_margin = 300;
const initial_speed_max = 2;
const max_particle_size = 0.15;

let max_particles;

function init() {

    resize()

    for (let i = 0; i < max_particles; i++) {
        particles.push(new_particle(Math.random()))
    }

    tick()
}


let cooldown = 0

function resize() {
    blog_box.style.height = content.clientHeight + "px";

    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    max_particles = canvas.height / (canvas.width * max_particle_size) * 2;
}

function position_energy(x, y) {
    let e = particles.reduce(
        (energy, p) => {
            energy - Math.sqrt((p.x - x) * (p.x - x) + (p.y - y) * (p.y - y))
        }, 0);
    // console.log("energy of ", x, y, e);
    return e;
}

function find_position() {
    let posibilities = [];

    for (let j = 0; j < 3000; j++) {
        posibilities.push({
            x: Math.random() * canvas.clientWidth,
            y: Math.random() * canvas.clientHeight,
        })
    }

    posibilities = posibilities.map(({ x, y }) => {
        return {
            x, y, e: position_energy(x, y)
        }
    });


    let { x_min, y_min } = posibilities.reduce(({ x_min, y_min, e_min }, { x, y, e }) => {
        if (!e_min || e_min > e) {
            return { x_min: x, y_min: y, e_min: e };
        } else {
            return { x_min, y_min, e_min };
        }
    }, {});




    return { x: x_min, y: y_min };
}

function new_particle(t) {
    let initial_size = (0.5 + Math.random() * 0.5) * max_particle_size * canvas.width;
    let { x, y } = find_position();

    return {
        x,
        y,
        vx: (0.5 - Math.random()) * initial_speed_max,
        vy: (0.5 - Math.random()) * initial_speed_max,
        t: initial_size * t,
        total: initial_size,
    }
}

function tick() {

    resize()
 

    cooldown--;

    if (particles.length < max_particles && cooldown < 0) {
        cooldown = 4;
        particles.push(new_particle(1))
    }
    particles = particles.filter(({ t }) => t > 0);

    particles.forEach(p => {
        p.t -= 0.05;

        const normal_t = bump(p.t / p.total);

        let r = Math.max(0, normal_t * p.total);

        p.x += p.vx;
        p.y += p.vy;

        if (p.x - r - view_margin > canvas.width) {
            p.t = 0;
            return;
        }
        if (p.x + r + view_margin < 0) {
            p.t = 0;
            return;
        }

        if (p.y + r < canvas.clientTop) {
            return;
        }

        if (p.y - r > canvas.clientTop + window.clientHeight) {
            return;
        }

        // let blur = Math.abs(p.t - p.total / 2) / p.total * 30;
        // ctx.filter = "blur(" + blur + "px)";

        const base_fill_opacity = 0.0;
        const base_stroke_opacity = 0.2;

        const max_fill_opacity = 0.3;
        const max_stroke_opacity = 0.7;

        const fill_opacity = base_fill_opacity + (max_fill_opacity - base_fill_opacity) * normal_t
        const stroke_opacity = base_stroke_opacity + (max_stroke_opacity - base_stroke_opacity) * normal_t


        const fill_gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        fill_gradient.addColorStop("0", "rgba(0, 255, 255, " + fill_opacity + ")");
        fill_gradient.addColorStop("0.1", "rgba(255, 0, 255, " + fill_opacity + ")");
        fill_gradient.addColorStop("0.2", "rgba(255, 255, 0, " + fill_opacity + ")");
        fill_gradient.addColorStop("0.3", "rgba(0, 255, 255, " + fill_opacity + ")");
        fill_gradient.addColorStop("0.4", "rgba(255, 0, 255, " + fill_opacity + ")");
        fill_gradient.addColorStop("0.5", "rgba(255, 255, 0, " + fill_opacity + ")");
        fill_gradient.addColorStop("0.6", "rgba(0, 255, 255, " + fill_opacity + ")");
        fill_gradient.addColorStop("0.7", "rgba(255, 0, 255, " + fill_opacity + ")");
        fill_gradient.addColorStop("0.8", "rgba(255, 255, 0, " + fill_opacity + ")");
        fill_gradient.addColorStop("0.9", "rgba(0, 255, 255, " + fill_opacity + ")");
        fill_gradient.addColorStop("1", "rgba(255, 0, 255, " + fill_opacity + ")");

        const stroke_gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        stroke_gradient.addColorStop("0", "rgba(0, 255, 255, " + stroke_opacity + ")");
        stroke_gradient.addColorStop("0.1", "rgba(255, 0, 255, " + stroke_opacity + ")");
        stroke_gradient.addColorStop("0.2", "rgba(255, 255, 0, " + stroke_opacity + ")");
        stroke_gradient.addColorStop("0.3", "rgba(0, 255, 255, " + stroke_opacity + ")");
        stroke_gradient.addColorStop("0.4", "rgba(255, 0, 255, " + stroke_opacity + ")");
        stroke_gradient.addColorStop("0.5", "rgba(255, 255, 0, " + stroke_opacity + ")");
        stroke_gradient.addColorStop("0.6", "rgba(0, 255, 255, " + stroke_opacity + ")");
        stroke_gradient.addColorStop("0.7", "rgba(255, 0, 255, " + stroke_opacity + ")");
        stroke_gradient.addColorStop("0.8", "rgba(255, 255, 0, " + stroke_opacity + ")");
        stroke_gradient.addColorStop("0.9", "rgba(0, 255, 255, " + stroke_opacity + ")");
        stroke_gradient.addColorStop("1", "rgba(255, 0, 255, " + stroke_opacity + "");



        ctx.strokeStyle = stroke_gradient;
        ctx.fillStyle = fill_gradient;

        const border_size = 0.1;

        ctx.lineWidth = r * border_size;
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, 2 * Math.PI, true);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, r * (1 + border_size / 2), 0, 2 * Math.PI, true);
        ctx.stroke();

    });


    setTimeout(tick, 1000 / 30);
}

init()