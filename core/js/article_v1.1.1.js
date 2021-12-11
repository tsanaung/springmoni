function article(data) {
    const qs = window.location.search;
    const uparms = new URLSearchParams(qs);
    const id = uparms.get('id');
    if (id) {
        let api = 'https://script.google.com/macros/s/AKfycbyuBIR2zFAKd6FyxuViwWHx-j-lIkNMzhQwuhYuI9ukxHGFB07lZBEAOol90OWAzYlQ9g/exec?blog='+data+'&id='+id; 
        article_data(api);
        translate_article(data,id);
    } else {
        empty_article(data);
    }
}

function article_data(api) {
    fetch(api)
    .then((r) => r.json())
    .then(
        (a) => {
            a = a[0];
            document.querySelector('#article-preview').setAttribute('src', a.preview);
            document.querySelector('#article-title').textContent = a.title;
            document.querySelector('articleData').innerHTML = '<span class="sponsored">Sponsored By SpringMoni</span>';
            document.querySelector('#article-info').textContent = '<p>Published on '+a.pub+', Updated at '+a.upd+' In '+a.cat+'</p>';
            // document.querySelector('exerpt').textContent = a.exerpt;
            document.querySelector('#content').innerHTML = a.content;
        }
    )
}

function empty_article(data) {
    document.querySelector('#article-title').innerHTML = '<h1 class="output">Insufficient Request!</h1>';
    document.querySelector('#article-info').innerHTML= '<span class="article-info output">Your request doesn\'t contain sufficient query data, so there is no article data to render. There are some articles in this categry for you. Thanks';
    document.querySelector('#content').innerHTML = '<h1 class="output"> fetch and list the home data for '+data+'</h1>';
}

function translate_article(data,id) {
    document.querySelector('#translate').innerHTML = '<img id="do-translation" class="do-translation" src="https://tsanaung.github.io/springmoni/free-course/img/springmoni_article_do-translate.png"/>';
    document.querySelector('#translate').onclick = function() {
        document.querySelector('#translate').innerHTML = '';
        let translation_api = 'https://script.google.com/macros/s/AKfycbxOFbeAyTFuRL7TbXPGDK_iplzzi7n-xk_HVJX5sR3hYTTBr8OoZmBzV-w3u4CXotA/exec?blog='+data+'&id='+id;
        article_data(translation_api);
    };
}

export {article};
