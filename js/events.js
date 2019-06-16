document.addEventListener("DOMContentLoaded", (event) => {

  const works = document.querySelectorAll(".workContainer");

  works.forEach( (work) => {
    work.addEventListener("click", (event) => {

      const front = work.getElementsByClassName('workFront')[0];
      const back = work.getElementsByClassName('workBack')[0];

        if( front.className === "work workFront workVisible"){

          front.className = "work workFront workHidden";
          back.className = "work workBack workVisible";

        }else{

          front.className = "work workFront workVisible";
          back.className = "work workBack workHidden";

        }

    })
  })
});
