import {home_articles} from 'https://tsanaung.github.io/springmoni/js/config.js';
let apiurl = home_articles.apihome+'?blog='+home_articles.blog;

function articles(apiurl, lang) {
    if (lang==='mm') {
        let apiurl_mm = apiurl+'&lang=mm';
        fetch(apiurl_mm)
        .then((response)=>response.json())
        .then((items)=>{
            items.forEach(elm => {
                const en_articles = document.querySelector('#articles');
                while (en_articles.firstChild) {
                    en_articles.removeChild(en_articles.firstChild);
                }
                const article = document.querySelector('#translated_articles');
                article.innerHTML += '<article id="'+elm.id+'" class="article">'
                +'<a href="article.html?id='+elm.id+'" class="article-url">'
                +'<div class="preview">'
                +'<img class="og-image" src="'+elm.ogimg+'"/>'
                +'</div> <div class="detail">'
                +'<p class="title">'+elm.title+'</p>'
                +'<span class="info">Published on '+elm.pub+' in '+elm.cat+'</span>'
                +'<p class="exerpt">'+elm.exerpt+'</p>'
                +'</div></a>'
                +'</article>';
            });
        })
    }else{
        fetch(apiurl)
        .then((response)=>response.json())
        .then((items)=>{
            console.log(items);
            items.forEach(elm => {
                const article = document.querySelector('#articles');
                article.innerHTML += '<article id="'+elm.id+'" class="article">'
                +'<a href="article.html?id='+elm.id+'&title='+elm.title+'" class="article-url">'
                +'<div class="preview">'
                +'<img class="og-image" src="'+elm.ogimg+'"/>'
                +'</div> <div class="detail">'
                +'<p class="title">'+elm.title+'</p>'
                +'<span class="info">Published on '+elm.pub+' in '+elm.cat+'</span>'
                +'<p class="exerpt">'+elm.exerpt+'</p>'
                +'</div></a>'
                +'</article>';
            });
        })
    }
}

articles(apiurl);
let btn = document.querySelector('#btn');
btn.onclick = function() {
    articles(apiurl,'mm');
}
