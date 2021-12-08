
let en_title = document.querySelector("#en_title");
let mm_title = document.querySelector("#mm_title");
let preview = document.querySelector("#url");
let en_content = document.querySelector("#en_content");
let mm_content = document.querySelector("#mm_content");
let result = document.querySelector(".result_text");
let submit_btn = document.querySelector("#submit");
let copy_btn = document.querySelector(".copy_btn");


function generate(en_title, mm_title, preview, en_content, mm_content){
    let en_content_formated = en_content.replaceAll('\n', '</p><p>').replaceAll('<p>i*','<figure><img src="').replaceAll('*i</p>','"/><figcaption>Sponsored By SpringMoni</figcaption></figure>').replaceAll('i*','</p><figure><img src="').replaceAll('*i','"/><figcaption>Sponsored By SpringMoni</figcaption></figure><p>');
    let mm_content_formated = mm_content.replaceAll('\n', '</p><p>').replaceAll('<p>i*','<figure><img src="').replaceAll('*i</p>','"/><figcaption>Sponsored By SpringMoni</figcaption></figure>').replaceAll('i*','</p><figure><img src="').replaceAll('*i','"/><figcaption>Sponsored By SpringMoni</figcaption></figure><p>');

    let final_string = `The post title => ${en_title}#biacms${mm_title}\n\n
<biaogimg>${preview}</biaogimg>\n\n
<biacen><p>${en_content_formated} This Code is Formated by TsanAung</p></biacen>\n\n
<biacmm><p>${mm_content_formated} </p><p>Sopnsored by SpringMoni, Donate for CDMs</p></biacmm>`;
    result.value = final_string;
}

function copy(){
    result.select();
    document.execCommand("copy");
}

submit_btn.addEventListener("click", () => {
    generate(en_title.value, mm_title.value, preview.value, en_content.value, mm_content.value);
    en_title.value = "";
    mm_title.value = "";
    preview.value = "";
    en_content.value = "";
    mm_content.value = "";
});

copy_btn.addEventListener("click", () => {
    copy();
})

window.addEventListener("unload", () => {
    result.value = "";
})

