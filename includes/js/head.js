// quoting https://codepen.io/bramus/pen/wvoqoxb

// Polyfill for browsers with no Scroll-Timeline support
import '/includes/js/scroll-timeline.js';

// Create ScrollTimeline

const myScrollTimeline = new ScrollTimeline({
    source: document.scrollingElement,
    scrollSource: document.scrollingElement, // For legacy implementations
    orientation: 'block',
    scrollOffsets: [
        new CSSUnitValue(0, 'px'),
        new CSSUnitValue(screen.height * 0.9, "px"),
    ],
});

// Animate Progress Bar on Scroll
new Animation(
    new KeyframeEffect(
        document.getElementById('head_banner_aux'),
        {
            backgroundPosition: ['50% 0vh', '50% 60vh'],
        },
        { duration: 1, fill: "forwards" }
    ),
    myScrollTimeline
).play();

new Animation(
    new KeyframeEffect(
        document.getElementById('head_banner'),
        {
            backgroundPosition: ['50% 0vh', '50% 60vh'],
        },
        { duration: 1, fill: "forwards" }
    ),
    myScrollTimeline
).play();

imgs = imgs.filter(({ data }) => data.portrait == screen.height > screen.width);

console.log(imgs)

let spotlight_detail = "";

function goto_spotlight() {
    window.location = spotlight_detail;
}

function set_random_image() {
    let i = Math.floor(Math.random() * imgs.length);

    document.getElementById("head_banner_aux").style.backgroundImage = "url(" + imgs[i].data.src + ")"
    if (!document.getElementById("head_banner").style.backgroundImage) {
        document.getElementById("head_banner").style.backgroundImage = "url(" + imgs[i].data.src + ")"
    }
    document.getElementById("head_banner").style.opacity = "0";
    setTimeout(() => {
        document.getElementById("head_banner").style.backgroundImage = "url(" + imgs[i].data.src + ")"
        document.getElementById("head_banner").style.opacity = "1";
    }, 3100);
    // document.getElementById("head_banner").style.backgroundImage = "url(" + imgs[i].data.ultra_minifyed + ")"


    spotlight_detail = imgs[i].url
}


setInterval(set_random_image, 12000);
set_random_image();
console.log(imgs);
document.querySelectorAll(".spotlight_butt").forEach(elm => elm.addEventListener("click", goto_spotlight))