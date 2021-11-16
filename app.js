const cards = document.querySelectorAll('li div');

function addInView() {
   for (let card of cards) {
      // console.log(window.innerHeight);
      const rect = card.getBoundingClientRect();
      if (rect.bottom <= window.innerHeight)
         // console.log('bottom', rect.bottom);
         card.classList.add('in-view');
   }
   console.log("card3",cards[3].getBoundingClientRect().bottom);
}


document.addEventListener('DOMContentLoaded', addInView);
document.addEventListener('scroll', addInView);