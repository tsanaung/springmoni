import { articles } from "https://tsanaung.github.io/springmoni/core/js/articles_v1.1.1.js";
import { article } from "https://tsanaung.github.io/springmoni/core/js/article_v1.1.1.js";
let data_method = document.querySelector('main').getAttribute('data-method');
let data = 'ဒီနေရာပြင်';
if (data_method === 'article') {
    article(data); 
} else {
    articles(data);
}

// Data ယူမယ့် Blogspot site ရဲ့ domain name က springcondor.blogspot.com ဆိုရင် blog name က springcondor
// ပြင်ရမယ့်နေရာမှာ blog name ထည့်ရမယ်။
// ဥပမာ let data = 'springcondor'; လို့ ဖြစ်သွားမယ်။
// Javascript မှာ variable တွေ declare တဲ့အခါ let, const, var စသဖြင့် keyword တွေ သုံးရတယ်။
// ဒီမှာ let ဆိုတာ JavaScript မှာ variable သတ်မှတ်ဖို့သုံးတဲ့ keyword ဥပမာ let variable_name = 'value'; အဲပုံစံရေးထားတာ
// ခုရေးထားတဲ့စာတွေ (စာကြောင်းရှေးမှာ // ပါတဲ့စာတွေ) မကူးနဲ့၊ အဲဒါ comment ရေးထားတာ
