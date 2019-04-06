
// GLOBAL VARIABLES
// ===========================================================

// Create a variable of objects for each character and assign properties
var characters = {
    "Morty": {
        name:"Morty",
        hp: 100,
        userAttk: 15,
        compAttk: 5,
        image: "assets/images/mortyBigArm.jpg"
    },
    "Rick Sanchez": {
        name:"Rick Sanchez",
        hp: 150,
        userAttk: 25,
        compAttk: 15,
        image: "assets/images/rickSanchez.jpg"
    },

    "Cyber Bird Person": {
        name:"Cyber Bird Person",
        hp: 200,
        userAttk: 35,
        compAttk: 25,
        image: "assets/images/cyberBirdPerson.jpg"
    },
    "Mr Poopy Butthole": {
        name:"Morty",
        hp: 250,
        userAttk: 45,
        compAttk: 35,
        image: "assets/images/mrPoopyButthole.jpg"
    }
}
// Create variables to store data for later use
var user;
var allEnemies = [];
var enemy;
var roundCounter = 1;
var killCounter = 0;

//Create space in HTML to append characters by passing the "character" and "charSpace" arguements
var characterSpace = (character, charSpace) => {
    var charWrap = $("<div class ='char' data-name =" + character.name + '">"');
    var nameTitle = $("<div class ='char-name'>").text(character.name);
    var charImg = $("<img class ='char-img'>").attr("src", character.image);
    var charHp = $("<div class ='char-hp'>").text(character.hp);
    charWrap.append(nameTitle).append(charImg).append(charHp);
    $(charSpace).append(charWrap);
}

var loadChars = function() {
    for (var key in characters) {
      characterSpace(characters[key], "#all-characters-wrap");
    }
  };

loadChars();























// When user picks character, selected character moves to "user character" id.
// All remaining characters are pushed to "all-enemies" id