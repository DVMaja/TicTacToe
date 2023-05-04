class Elem {
  constructor(szuloElem, index) {
    this.index = index;
    //this.divElem = divElem;
    //this.pElem = pElem;
    console.log(this.index);
    //lesz még egy onCLick is
    console.log(szuloElem);
    szuloElem.append(`<div class="divElem"><p class="pElem"> </p></div>`);

    this.pElem = $("article .divElem:last-child p");
    this.divElem = $("article .divElem:last-child");
    //console.log(this.pElem);

    this.divElem.on("click", () => {
      //this.setElem.text("X");
      this.esemenyTrigger();
    });
  }

  setElem(ertek) {
    this.pElem.text(ertek);
  }

  //saját esemény létrehozása
  //https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent

  esemenyTrigger() {
    const esemeny = new CustomEvent("elemKattintas", {detail: this});    
    window.dispatchEvent(esemeny);   
  }
}

export default Elem;
