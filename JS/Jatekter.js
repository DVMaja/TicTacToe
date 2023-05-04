import Elem from "./Elem.js";

class Jatekter {
  //vezérli a játékot
  // példányosítja az elemeket és figyeli hogy hol tart a játék

  #lepes;
    //nyerés ellenörzése
    #aktAllapotLista=[];

  constructor() {
    this.#lepes = 0;
    this.#aktAllapotLista = [" "," "," "," "," "," "," "," ","" ];

    const szuloElem = $(".taroloElem");

    for (let index = 0; index < 9; index++) {
        //példányosítja az ELem-et 9x
      const elem = new Elem(szuloElem, index);
    }
    //saját eseményünket kezeli le / iratkozik fel
    //Ha rákattintunk az Elemre , akkor kiváltódik az esemény
    $(window).on("elemKattintas", (event) => {        
      //console.log(event.detail);
      console.log(this.#aktAllapotLista)
      let aktElem = event.detail;
      //aktuális objektumom
      if (this.#lepes % 2 == 0) {
        //meghívja a setElem metódust az aktElem-nek
        aktElem.setElem("X");
        this.#aktAllapotLista[aktElem.index] = "X";
      } else {
        aktElem.setElem("O");
        this.#aktAllapotLista[aktElem.index] = "O";
      }
      //a lepes-hez hozzáad egyet
      this.#lepes++;
    });
  }


  ellenorzes(){
    //itt ellenőrzöm ogy ki nyert
    //X nyert O nyert    
    //döntetlen, nincs méég vége
    return "Ki nyert";
  }
}
export default Jatekter;
