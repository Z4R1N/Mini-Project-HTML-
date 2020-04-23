var NavID = document.getElementById("Nav");
var OthersID = document.getElementById("Others");

OthersID.addEventListener("click", function(){
NavID.classList.toggle("remove");
NavID.classList.toggle("OthersNav");
})

var OthersTextBox = document.getElementById("OthersTextBox");
var GameName = OthersTextBox.value;

switch(GameName){
  case 'Snake':
    let MadeWindow = window.open();
    MadeWindow.document.open();
    break;
  case 'TictacToe':
    //Code
    break;
}

// var Users = {
//   "ZARIN": {Firstname: "Khaled", Lastname: "Husein", Password: "WORM"},
//   "James": {Firstname: "Olle", Lastname: "Albrink", Password: "Dick"},
//   "Red": {Firstname: "Assef", Lastname: "Husein", Password: "Builder"},
// }
//
// function UserAdder(User, Firstname, Lastname, Password) {
//   Users[User] = {Firstname: Firstname, Lastname: Lastname, Password: Password}
// }

var id_button = document.getElementById("id_button");
var id_input02 = document.getElementById("id_input02");



function volym(radie){
  var svar = ((radie^3) * 4 * 3.14)/3;
  return svar;
}

//id_button.addEventListener("click", function(){   console.log(NavID);
//if (FirstRow.style.visibility != "hidden"){
//  FirstRow.style.visibility= "hidden"
//}
//else {
//  FirstRow.style.visibility= "visible";
//}
//});
