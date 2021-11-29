import {home_articles} from './config.js';
let apiurl = home_articles.apihome+'?blog='+home_articles.blog;
let apiurl_mm = home_articles.apihome+'?blog='+home_articles.blog+'&lang=mm';

function articles(url,lang) {
    fetch(url)
    .then((response)=>response.json())
    .then((items)=>{
        items.forEach(elm => {
            // console.log(elm);
            if (lang==='mm') {
                document.querySelector('#translated_articles').innerHTML += '<article id="'+elm.id+'" class="article">'
                +'<a href="article.html?id='+elm.id+'" class="article-url">'
                +'<div class="preview">'
                +'<img class="og-image" src="'+elm.ogimg+'"/>'
                +'</div> <div class="detail">'
                +'<p class="title">'+elm.title+'</p>'
                +'<span class="info">Published on '+elm.pub+' in '+elm.cat+'</span>'
                +'<p class="exerpt">'+elm.exerpt+'</p>'
                +'</div></a>'
                +'</article>';
                let enas = document.querySelector('#articles');
                enas.parentNode.removeChild(enas);
            } else {
                document.querySelector('#articles').innerHTML += '<article id="'+elm.id+'" class="article">'
                +'<a href="article.html?id='+elm.id+'" class="article-url">'
                +'<div class="preview">'
                +'<img class="og-image" src="'+elm.ogimg+'"/>'
                +'</div> <div class="detail">'
                +'<p class="title">'+elm.title+'</p>'
                +'<span class="info">Published on '+elm.pub+' in '+elm.cat+'</span>'
                +'<p class="exerpt">'+elm.exerpt+'</p>'
                +'</div></a>'
                +'</article>';
            }
        });
    })
}
articles(apiurl);
let do_translation = document.querySelector('#translate');
do_translation.onclick = function() {
    articles(apiurl_mm,'mm');
}
