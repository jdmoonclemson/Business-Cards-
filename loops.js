// create the array
var cards = [];
var x = 0;
var finalx =0;

function addCard(){
    let currentE =document.theform.email.value;
    let currentN =document.theform.newname.value;
    let currentA =document.theform.address.value;
    let currentP =document.theform.phone.value;
    let currentD =document.theform.birthdate.value;
    if(!currentE == ' ' && !currentN == ' ' && !currentA== ' ' && !currentP == ' ' && !currentD== ' ' ){
      cards.push(new Card(currentN,currentE,currentA,currentP,currentD));
      printNew();
    }

}

function printNew(){
  document.theform.sorted.value = " ";
    cards[x].printCard();
    x++;
}




function printAll(){
  for (let i = 0; i < cards.length; i++) {
    cards[i].printCard();

 }
}