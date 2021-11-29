import {single_article, top_menu} from './config.js';
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');
let api_en = single_article.apiena+'id='+id+'&blog='+single_article.blog;
let api_mm = single_article.apimma+'id='+id+'&blog='+single_article.blog;

if(id){
    article(api_en);
}else{
    document.querySelector('#lee').innerHTML='<h1>insufficient query request</h1>';
}

function article(api_en) {
    fetch(api_en)
    .then((res)=>res.json())
    .then((data)=>{
        let a = data[0];
        console.log(data);

        let og_title = document.createElement('meta');
        og_title.setAttribute('property', 'og:title');
        og_title.setAttribute('content', a.title);
        document.head.appendChild(og_title);

        let og_url = document.createElement('meta');
        og_url.setAttribute('property', 'og:url');
        og_url.setAttribute('content', window.location.href);
        document.head.appendChild(og_url);

        let og_img = document.createElement('meta');
        og_img.setAttribute('property', 'og:image');
        og_img.setAttribute('content', a.preview);
        document.head.appendChild(og_img);

        let og_description = document.createElement('meta');
        og_description.setAttribute('property', 'og:description');
        og_description.setAttribute('content', a.exerpt.replace('<p>','').replace('</p>',''));
        document.head.appendChild(og_description);

        document.querySelector('#article').innerHTML = '<article id="'+a.id+' to-translate" class="article">'
        +'<img src="'+a.preview+'" class="og-img"/>'
        +'<h1 class="title">'+a.title+'</h1>'
        +'<div class="detail"><p class="info">Published on '+a.pub+', Updated at '+a.upd+' In '+a.cat+'</p></div>'
        //+'<button id="translate">Translate to Burmese</button>'
        +'<div class="content">'+a.content+'</div>'
        +'</article>';
    })
}
let do_translation = document.querySelector('#translate');
do_translation.onclick = function() {
    article(api_mm);
}
