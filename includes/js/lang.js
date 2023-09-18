let lang_i = 0;
let langs = ["es", "en"];

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
    langChange("es")
});

function toggle_language() {
    lang_i++;
    let new_lang = langs[lang_i % langs.length]
    langChange(new_lang)
}

function langChange(lang) {
    retranslate(lang)

    var event = new CustomEvent("onLangChange", { "detail": { lang } });
    document.dispatchEvent(event);
}
