window.addEventListener('load', function(){
    document.getElementById('output').setAttribute('contenteditable', 'true');
});

document.querySelector('#create-p').onclick = function() {
    che('p','Write Paragraph Here... ');
};

document.querySelector('#create-img').onclick = function() {
    che('photo','https://your.photo/link.jpg/or/png');
};

document.querySelector('#create-li').onclick = function() {
    che('li','List item, Enter to add more...');
};

document.querySelector('#create-b').onclick = function() {
    che('strong','Bold/Strong text...');
};

document.querySelector('#create-i').onclick = function() {
    che('i','itilic text...');
};

document.querySelector('#create-h1').onclick = function() {
    che('h1','Write Heading Here... ');
};

function che (elm, instruction) {
    const output = document.querySelector('#output');
    let theEl = document.createElement(elm);
    theEl.textContent = instruction;
    theEl.setAttribute('contenteditable','true');
    output.appendChild(theEl);
}

document.querySelector('#do-rhg').onclick = function() {
    const output = document.querySelector('#output').innerHTML;
    let formated_output = output.toString();
    formated_output = formated_output.replaceAll(' contenteditable="true"','').replaceAll('<photo>','<figure><img src="').replaceAll('</photo>','"/><figcaption>Sponsored By SpringMoni</figcaption></figure>').replaceAll('<p><br/></p>','');
    let ot = document.createElement('textarea');
    ot.textContent = formated_output;
    ot.setAttribute('rows','24');
    ot.setAttribute('class','final-result');
    let theResult = document.querySelector('#result');
    theResult.appendChild(ot);
}
