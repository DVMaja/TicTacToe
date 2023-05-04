import Elem from "./Elem.js";

class Jatekter {
  //vezérli a játékot
  // példányosítja az elemeket és figyeli hogy hol tart a játék

  #lepes;
  constructor() {
    this.#lepes = 0;

    const szuloElem = $(".taroloElem");

    for (let index = 0; index < 9; index++) {
      const elem = new Elem(szuloElem, index);
    }
    $(window).on("elemKattintas", (event) => {
      console.log(event.detail);
      let aktElem = event.detail;
      //aktuális objektumom
      if (this.#lepes % 2 == 0) {
        aktElem.setElem("X");
      } else {
        aktElem.setElem("O");
      }
      this.#lepes++;
    });
  }
}
export default Jatekter;
