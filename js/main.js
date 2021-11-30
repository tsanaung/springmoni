import {single_article, top_menu} from './config.js';
import {article} from 'https://tsanaung.github.io/springmoni/js/article.js';
import {empty_article} from 'https://tsanaung.github.io/springmoni/js/article.js';
function single() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');
    let api_en = single_article.apiena+'id='+id+'&blog='+single_article.blog;
    let api_mm = single_article.apimma+'id='+id+'&blog='+single_article.blog;

    if(id){
        article(api_en);
        document.querySelector('#translate').innerHTML = '<img id="do-translation" class="do-translation" src="img/springmoni_article_do-translate.png"/>';
        document.querySelector('#translate').onclick = function() {
            document.querySelector('#translate').innerHTML = '';
            article(api_mm);
        }
    }else{
        empty_article();
    }
}
export {
    single
}
