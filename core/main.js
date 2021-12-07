import { articles } from "https://tsanaung.github.io/springmoni/core/js/articles_v1.1.1.js";
import { article } from "https://tsanaung.github.io/springmoni/core/js/article_v1.1.1.js";
let data_method = document.querySelector('main').getAttribute('data-method');
let data = 'springcondor';
if (data_method === 'article') {
    article(data); 
} else {
    articles(data);
}
