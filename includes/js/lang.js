let lang_i = 0;
let langs = ["es", "en"];
let full_html = document.querySelector("html");

function retranslate(dst_lang) {
    console.log("switching to lang:" + dst_lang);
    langs.forEach((curr_lang) => {
        document.querySelectorAll("[js_lang=\"" + curr_lang + "\"]").forEach(elm => {
            if (elm != full_html)
                elm.style.display = dst_lang == curr_lang ? "block" : "none"
        });

        document.getElementById(curr_lang + "_butt").setAttribute("selected", dst_lang == curr_lang)
    });
    document.querySelector("html").setAttribute("lang", dst_lang);

}

window.addEventListener("load", function () {
    retranslate("es")
    document.getElementById("toggle").style.display = "block";

});

function toggle_language() {
    lang_i++;
    retranslate(langs[lang_i % langs.length])
}

