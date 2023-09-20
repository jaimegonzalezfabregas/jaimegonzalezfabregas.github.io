let langs = ["es", "en"];

let lang_i = localStorage.getItem("lang_i");
if (!lang_i) lang_i = 0


function retranslate(dst_lang) {
    console.log("switching to lang:" + dst_lang);

    langs.forEach((curr_lang) => {
        let posible_new_url = document.URL.split("/" + curr_lang + "/").join("/" + dst_lang + "/")
        if (document.URL != posible_new_url) {
            window.location.replace(posible_new_url);
        }

        document.querySelectorAll("[js_lang=\"" + curr_lang + "\"]").forEach(elm => {
            elm.style.display = dst_lang == curr_lang ? "block" : "none"
        });

        document.getElementById(curr_lang + "_butt").setAttribute("selected", dst_lang == curr_lang)
    });
    document.querySelector("html").setAttribute("lang", dst_lang);

    var event = new CustomEvent("onLangChange", { "detail": { lang: dst_lang } });
    dispatchEvent(event);

}

window.addEventListener("load", function () {
    lang_i %= langs.length
    retranslate(langs[lang_i])
});

function toggle_language() {
    lang_i++;
    lang_i %= langs.length
    localStorage.setItem("lang_i", lang_i);
    setTimeout(() => {
        retranslate(langs[lang_i])
    }, 0)
}