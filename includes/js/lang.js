let langs = ["es", "en"];

let lang_i = localStorage.getItem("lang_i");
if (!lang_i) lang_i = 0


function retranslate(dst_lang) {
    console.log("switching to lang:" + dst_lang);
    langs.forEach((curr_lang) => {
        document.querySelectorAll("[js_lang=\"" + curr_lang + "\"]").forEach(elm => {
            elm.style.display = dst_lang == curr_lang ? "block" : "none"
        });

        document.getElementById(curr_lang + "_butt").setAttribute("selected", dst_lang == curr_lang)
    });
    document.querySelector("html").setAttribute("lang", dst_lang);

}

window.addEventListener("load", function () {
    langChange(langs[lang_i % langs.length])
});

function toggle_language() {
    lang_i++;
    localStorage.setItem("lang_i", theme_i);
    langChange(langs[lang_i % langs.length])
}

function langChange(lang) {
    retranslate(lang)

    var event = new CustomEvent("onLangChange", { "detail": { lang } });
    dispatchEvent(event);
}
