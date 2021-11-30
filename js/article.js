function article(api_en) {
    fetch(api_en)
    .then((res)=>res.json())
    .then((data)=>{
        let a = data[0];

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

        document.querySelector('#og-img').setAttribute('src',a.preview);
        document.querySelector('#article-title').innerHTML = a.title;
        document.querySelector('#published').innerHTML = '<span class="published">Published on: </span><span class="pub">'+a.pub+' </span>';
        document.querySelector('#updated').innerHTML = '<span class="updated">Updated on: </span><span class="upd">'+a.upd+' </span>';
        document.querySelector('#category').innerHTML = '<span class="category">in : </span><span class="cat">'+a.cat+' </span>';
        document.querySelector('#article-content').innerHTML = a.content;
    })
}
function empty_article() {
    document.querySelector('#article-title').innerHTML= '<h1>insufficient query request</h1>';
    document.querySelector('#article-info').innerHTML = 'Your request doesn\'t contain sufficient query string, so, there is no article content to show. Learn more about us.';
    document.querySelector('#translate').innerHTML = '';
    let siteHome = window.location.href;
    document.querySelector('#article-content').innerHTML = '<a href="./BJSCMS.html">Back to Home</a>';
}
export {
    article,
    empty_article
};
