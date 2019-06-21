document.addEventListener("DOMContentLoaded", (event) => {
  const arrows = document.querySelectorAll(".arrow-button");

  arrows.forEach( ( arrow ) => {

    if( arrow.id === "prev"){
      arrow.addEventListener( 'click', backArrow);
    }

    if( arrow.id === "next"){
      arrow.addEventListener( 'click', forwardArrow);
    }
  })

  document.querySelector(".snap-container").addEventListener('scroll', (event) => {
    if( scrollThrottle ){

      scrollThrottle = false;
      window.requestAnimationFrame( () => {
        scrollThrottle = true;
      })

      const links = document.querySelectorAll(".activeArrow");
      const scrollTop = document.querySelector(".snap-container").scrollTop;
      const containerHeight = window.innerHeight;

      if ( scrollTop < containerHeight ){
        links[0].className = "activeArrow";
        links[1].className = "activeArrow arrowHidden";
        links[2].className = "activeArrow arrowHidden";
      } else if ( scrollTop < 2 * containerHeight ){
        links[0].className = "activeArrow arrowHidden";
        links[1].className = "activeArrow";
        links[2].className = "activeArrow arrowHidden";
      } else if ( scrollTop < 3 * containerHeight ){
        links[0].className = "activeArrow arrowHidden";
        links[1].className = "activeArrow arrowHidden";
        links[2].className = "activeArrow";
      }

    }
  })
});

let scrollThrottle = true;

let workIndex = 1;
const maxIndex = 3;

const backArrow = function(){


  const current = document.querySelector(`#item-${workIndex}`);
  current.className = "works-item works-hidden";

  workIndex --;

  if( workIndex === 0 ){
    workIndex = maxIndex;
  }

  const back = document.querySelector(`#item-${workIndex}`);
  back.className = "works-item";

}

const forwardArrow = function(){

  const current = document.querySelector(`#item-${workIndex}`);
  current.className = "works-item works-hidden";
  workIndex ++;

  if( workIndex > maxIndex ){
    workIndex = 1;
  }

  const forward = document.querySelector(`#item-${workIndex}`);
  forward.className = "works-item";
}
