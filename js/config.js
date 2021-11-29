const blog_name         = 'springcondor';
const fallback_og_image = '';
const fb_app_id         = '';
const site_name         = '';
const logo_url          = '';
const site_description  = '';
const copyright         = ' | All Rights Reserved <strong>The Source Code is MIT Licnesed</strong>';

const top_menu          = {
    'home':{'name':'Home','url':'index.html'},
    'about':{'name':'About SpringMoni','url':'about.html'},
    'contact':{'name':'Contact Us','url':'contact.html'},
    'tos':{'name':'Terms of Service','url':'tos.html'},
    'services':{'name':'Services','url':'services.html'},
    'pricing':{'name':'Pricing','url':'pricing.html'},
    'privacy':{'name':'Privacy Policy','url':'privacy-policy.html'},
    'USAGE':{'name':'MENU NAME','url':'MENU LINK'}
};

// You don't need to touch following codes

const home_articles = {
    'blog':blog_name,
    'apihome':'https://script.google.com/macros/s/AKfycbzDjBFkxbdNGrrPzGGHm4FJVze3Dtguc9znwt0p7q7VofLAVNL7WLYo01LeptY9tR7Oag/exec'
};

const single_article = {
    'blog':blog_name,
    'apiena':'https://script.google.com/macros/s/AKfycbyuBIR2zFAKd6FyxuViwWHx-j-lIkNMzhQwuhYuI9ukxHGFB07lZBEAOol90OWAzYlQ9g/exec?', 
    'apimma':'https://script.google.com/macros/s/AKfycbxOFbeAyTFuRL7TbXPGDK_iplzzi7n-xk_HVJX5sR3hYTTBr8OoZmBzV-w3u4CXotA/exec?'
}

const site_detail = {
    'fallback_og_image':fallback_og_image,
    'fb_app_id':fb_app_id,
    'site_name':site_name,
    'site_description':site_description,
    'logo_url':logo_url,
    'copyright':copyright
}

export{
    home_articles,
    single_article,
    site_detail,
    top_menu
};
