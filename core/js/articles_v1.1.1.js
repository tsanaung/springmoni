function get_articles(api) {
    fetch(api)
    .then((response)=>response.json())
    .then((items)=>{
        document.querySelector('#articles').innerHTML = '';
        items.forEach(elm => {
            document.querySelector('#articles').innerHTML += '<article id="'+elm.id+'" class="article">'
            +'<a href="article.html?id='+elm.id+'" class="article-url">'
            +'<img class="featured-image" src="'+elm.ogimg+'"/>'
            +'<h1 class="article-title">'+elm.title+'</h1>'
            +'<span id="article-info" class="article-info">Published on '+elm.pub+' in '+elm.cat+'</span>'
            +'<p class="exerpt">'+elm.exerpt+'</p>'
            +'</a></article>';
        })
    })
}

function articles(data) {
    let api_en = 'https://script.google.com/macros/s/AKfycbzDjBFkxbdNGrrPzGGHm4FJVze3Dtguc9znwt0p7q7VofLAVNL7WLYo01LeptY9tR7Oag/exec?blog='+data;
    get_articles(api_en);
    document.querySelector('#translate').onclick = function() {
        let api_mm = 'https://script.google.com/macros/s/AKfycbzDjBFkxbdNGrrPzGGHm4FJVze3Dtguc9znwt0p7q7VofLAVNL7WLYo01LeptY9tR7Oag/exec?blog='+data+'&lang=mm';
        document.querySelector('#translate').innerHTML = '';
        get_articles(api_mm);
    };
}

export {articles}
