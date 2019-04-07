
// GLOBAL VARIABLES
// ===========================================================
// Create variables to store data for later use
var user = false;
var enemy = false;
var allEnemies = [];
var roundCounter = 1;
var killCounter = 0;
var selected;

// Create a variable of objects containing each character and assign game stat properties
var characters = {
    "Big Arm Morty": {
        name:"Big Arm Morty",
        hp: 100,
        userAttk: 15,
        compAttk: 5,
        image: "assets/images/mortyBigArm.jpg"
    },
    "Pickle Rick": {
        name:"Pickle Rick",
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
        name:"Mr Poopy Butthole",
        hp: 250,
        userAttk: 45,
        compAttk: 35,
        image: "assets/images/mrPoopyButthole.jpg"
    }
}

// Hide HTML when not in use
$("#user-selected-wrap").css("display", "none");
$("#all-enemies-wrap").css("display", "none");
$("#enemy-selected-wrap").css("display", "none");
$("#btn-wrap").css("display", "none");

// FUNCTIONS
// =====================================================================
//Create divs in HTML to append characters properties by passing the "char" and "charArea" arguements
var createChar = (char, charArea) => {
    var charWrap = $("<div class ='char' char-data ='" + char.name + "'>");
    var nameTitle = $("<div class ='char-name'>").text(char.name);
    var charImg = $("<img class ='char-img'>").attr("src", char.image);
    var charHp = $("<div class ='char-hp'>").text("HP: " + char.hp);
    charWrap.append(nameTitle).append(charImg).append(charHp);
    $(charArea).append(charWrap);
}
// Create "for/in loop" to iterate through the character object properties and load created characters to "#all-chars-wrap"
var loadAllChars = function() {
    for (var properties in characters) {
      createChar(characters[properties], "#all-chars-wrap");
    }
  };
loadAllChars();

// Update selected characters by empyting "charArea" and calling "createChar()" with new arguements
var updateSelection = (newChar, newCharArea) => {
   $(newCharArea).empty();
   createChar(newChar, newCharArea);
};

var createEnemies = (allEnemiesArr) => {
    for (var i = 0; i < allEnemiesArr.length; i++) {
        createChar(allEnemiesArr[i], "#all-enemies-wrap");
        $("#all-enemies-wrap").css("display", "block");
      }
};

// Click Events
// ==================================================================
// Create a click event to capture users character selection
$("#all-chars-wrap").on("click", ".char", function (){
    var selected = $(this).attr("char-data");
    if (user === false) {
        user = characters[selected];
        for (var properties in characters) {
            if (properties !== selected) {
                allEnemies.push(characters[properties]);
            }
        }

        // Update HTML and call createEnemies()
        updateSelection(user, "#user-char");
        $("#all-chars-wrap").css("display", "none");
        $("#user-selected-wrap").css("display", "grid");
        createEnemies(allEnemies);
        user = true;
    } 
});

// Create click event to capture users enemy selection
$("#all-enemies-wrap").on("click", ".char", function() {
    var selected = $(this).attr("char-data");
    if (enemy === false) {
        enemy = characters[selected];

        // Update HTML and empty the "char" div
        updateSelection(enemy, "#enemy-char");
        $("#all-enemies-wrap").css("display", "none");
        $("#enemy-selected-wrap").css("display", "grid");
        $(this).empty();
        $("#btn-wrap").css("display", "grid");
    }
})


