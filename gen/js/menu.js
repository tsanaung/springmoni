document.querySelector('#menu').onclick = function() {
  if (document.querySelector('.menu-container').style.display === 'none') {
    document.querySelector('.menu-container').style.display = 'block'
    } else {
      document.querySelector('.menu-container').style.display = 'none'
    }
}
