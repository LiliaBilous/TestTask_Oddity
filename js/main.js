// burger menu
document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.nav-burger');
    const menu = document.querySelector('.menu');
  
    burger.addEventListener('click', function() {
      if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        menu.classList.add('visible');
      } else {
        menu.classList.remove('visible');
        menu.classList.add('hidden');
      }
    });
  });
  
// logo
// document.getElementById('btn-lucky').addEventListener('click', function() {
//   const googleLogo = document.getElementById('logo');
//   const oddityLogo = document.querySelector('.oddity-logo');
  
//   if (googleLogo.classList.contains('hide')) {
//     googleLogo.classList.remove('hide');
//     googleLogo.classList.add('show');
//     oddityLogo.classList.remove('show');
//     oddityLogo.classList.add('hide');

//   } else {
//     googleLogo.classList.remove('show');
//     googleLogo.classList.add('hide');
//     oddityLogo.style.display = 'block';
//     setTimeout(() => {
//       oddityLogo.classList.remove('hide');
//       oddityLogo.classList.add('show');
//     }, 10); 
//   }
// });
const logo = document.getElementById('logo');
        const oddityLogo = document.querySelector('.oddity-logo');
        const button = document.getElementById('btn-lucky');
        let isOddity = false;

        button.addEventListener('click', () => {
            isOddity = !isOddity;
            if (isOddity) {
                logo.classList.add('hide');
                oddityLogo.classList.remove('hide');
            } else {
                logo.classList.remove('hide');
                oddityLogo.classList.add('hide');
                oddityLogo.style.transform = 'scale(1)';
            }
        });