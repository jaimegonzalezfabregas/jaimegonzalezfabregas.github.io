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
        document.querySelector('.head_container'),
        {
            backgroundPosition : ['50% 0vh', '50% 60vh'],
        },
        { duration: 1, fill: "forwards" }
    ),
    myScrollTimeline
).play();

imgs = imgs.filter(({ data }) => data.portrait == screen.height > screen.width);

let spotlight_detail = "";

function go_to_spotlight(){
    window.location = spotlight_detail;
}

function set_random_image() {
    let i = Math.floor(Math.random() * imgs.length);
    document.getElementById("head_banner").style.backgroundImage = "url(" + imgs[i].data.src + ")"
    // document.getElementById("head_banner").style.backgroundImage = "url(" + imgs[i].data.ultra_minifyed + ")"

    
    spotlight_detail = imgs[i].url
}


set_random_image();
console.log(imgs);
document.getElementById("spotlight_butt_en").addEventListener("click", go_to_spotlight);
document.getElementById("spotlight_butt_es").addEventListener("click",go_to_spotlight);
