document.querySelector('#start').onclick = function() {
    che('div');
};

function che (elm) {
    const input = document.querySelector('#inpstr');
    let theEl = document.createElement(elm);
    theEl.textContent = 'Write Burmese Alphabets Here (Alphabets only)';
    theEl.setAttribute('contenteditable','true');
    theEl.setAttribute('class','input');
    input.appendChild(theEl);
    document.querySelector('#seersl').onclick = function() {
        vizliz();
    }
}

function vizliz() {
    let inpstr = document.querySelector('#inpstr').innerHTML;
    inpstr = inpstr.replaceAll('က','<t1></t1>').replaceAll('ခ','<t2></t2>').replaceAll('ဂ','<t3></t3>').replaceAll('ဃ','<t4></t4>').replaceAll('င','<t5></t5>').replaceAll('စ','<t6></t6>').replaceAll('ဆ','<t7></t7>').replaceAll('ဇ','<t8></t8>').replaceAll('စျ','<t9></t9>').replaceAll('ဈ','<t9></t9>').replaceAll('ည','<t10></t10>').replaceAll('ဋ','<t11></t11>').replaceAll('ဌ','<t12></t12>').replaceAll('ဍ','<t13></t13>').replaceAll('ၒ','<t14></t14>').replaceAll('ဏ','<t15></t15>').replaceAll('တ','<t16></t16>').replaceAll('ထ','<t17></t17>').replaceAll('ဒ','<t18></t18>').replaceAll('ဓ','<t19></t19>').replaceAll('န','<t20></t20>').replaceAll('ပ','<t21></t21>').replaceAll('ဖ','<t22></t22>').replaceAll('ဗ','<t23></t23>').replaceAll('ဘ','<t24></t24>').replaceAll('မ','<t25></t25>').replaceAll('ယ','<t26></t26>').replaceAll('ရ','<t27></t27>').replaceAll('လ','<t28></t28>').replaceAll('ဝ','<t29></t29>').replaceAll('သ','<t30></t30>').replaceAll('ဟ','<t31></t31>').replaceAll('ဠ','<t32></t32>').replaceAll('အ','<t33></t33>')
    ;
    document.querySelector('#oupstr').innerHTML = inpstr;
}
