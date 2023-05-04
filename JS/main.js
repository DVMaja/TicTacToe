import Elem from "./Elem.js";

let lepesValtozo = 1;

$(function () {
  const szuloElem = $(".taroloElem");

  for (let index = 0; index < 9; index++) {
    const elem = new Elem(szuloElem, index);
  }
  $(window).on("elemKattintas", (event) => {
    console.log(event.detail);
    let aktElem = event.detail;
    //aktuális objektumom
    if (lepesValtozo % 2 == 0) {
      aktElem.setElem("X");
    } else {
      aktElem.setElem("O");
    }
    lepesValtozo++;
  });
});
