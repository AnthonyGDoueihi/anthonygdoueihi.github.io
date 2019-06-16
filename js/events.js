document.addEventListener("DOMContentLoaded", (event) => {
  const arrows = document.querySelectorAll(".arrow");

  arrows.forEach( ( arrow ) => {

    if( arrow.className === "arrow arrow-prev"){
      arrow.addEventListener( 'click', backArrow);
    }

    if( arrow.className === "arrow arrow-next"){
      arrow.addEventListener( 'click', forwardArrow);
    }
  })

});

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
