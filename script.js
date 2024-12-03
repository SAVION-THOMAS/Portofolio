var splashScreen = document.querySelector('.splash');
splashScreen.addEventListener('click',()=>{
  splashScreen.style.opacity = 0;
  setTimeout(()=>{
    splashScreen.classList.add('hidden')
  },610)
})
function closeWin(){
   window.location.href = 'https://codepen.io/Davion-Sebastian-Babu/pens/public';
}